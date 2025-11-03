import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // For KGM and GİB sites, we need special handling
    const isKgmSite = targetUrl.includes('kgm.gov.tr');
    const isGibSite = targetUrl.includes('gib.gov.tr');

    // Get cookies from the request to maintain session
    const cookieHeader = request.headers.get('cookie');

    // Prepare headers for the fetch request - make it look like a normal browser
    const fetchHeaders: HeadersInit = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
      'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Cache-Control': 'max-age=0',
      'Referer': targetUrl,
      'Origin': targetUrl,
    };

    // Forward cookies if present
    if (cookieHeader) {
      fetchHeaders['Cookie'] = cookieHeader;
    }

    // Special headers for government sites
    if (isKgmSite || isGibSite) {
      fetchHeaders['Sec-Fetch-User'] = '?1';
      fetchHeaders['Sec-Ch-Ua-Mobile'] = '?0';
      fetchHeaders['Sec-Ch-Ua-Platform'] = '"Windows"';
      fetchHeaders['Sec-Ch-Ua-Platform-Version'] = '"15.0.0"';
    }

    // Fetch the target URL
    const response = await fetch(targetUrl, {
      headers: fetchHeaders,
      credentials: 'include',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch: ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get('content-type') || '';

    // Capture Set-Cookie headers from the response
    const setCookieHeaders = response.headers.getSetCookie?.() || [];

    // If it's not HTML, just proxy it through
    if (!contentType.includes('text/html')) {
      const buffer = await response.arrayBuffer();
      const headers: HeadersInit = {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      };

      const nextResponse = new NextResponse(buffer, { headers });

      // Forward cookies
      setCookieHeaders.forEach(cookie => {
        nextResponse.headers.append('Set-Cookie', cookie);
      });

      return nextResponse;
    }

    // For HTML, modify it to fix URLs
    let html = await response.text();
    const baseUrl = new URL(targetUrl);
    const origin = baseUrl.origin;
    const pathname = baseUrl.pathname;
    const basePath = pathname.substring(0, pathname.lastIndexOf('/') + 1);

    // Create proxy URL function
    const proxyUrl = (url: string) => {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url; // Already absolute
      }
      if (url.startsWith('//')) {
        return `https:${url}`; // Protocol-relative
      }
      if (url.startsWith('/')) {
        return `${origin}${url}`; // Root-relative
      }
      return `${origin}${basePath}${url}`; // Relative
    };

    // Fix all types of URLs more comprehensively
    // Fix href attributes (links)
    html = html.replace(/href=["']([^"']+)["']/gi, (match, url) => {
      if (url.startsWith('#') || url.startsWith('javascript:') || url.startsWith('mailto:') || url.startsWith('data:')) {
        return match;
      }
      return `href="${proxyUrl(url)}"`;
    });

    // Fix src attributes (images, scripts, etc.)
    html = html.replace(/src=["']([^"']+)["']/gi, (match, url) => {
      if (url.startsWith('data:')) {
        return match;
      }
      const fullUrl = proxyUrl(url);

      // For dynamic resources (.aspx, .ashx, .png, .jpg, .gif), route through proxy
      if (fullUrl.includes('.aspx') ||
          fullUrl.includes('.ashx') ||
          fullUrl.includes('.png') ||
          fullUrl.includes('.jpg') ||
          fullUrl.includes('.jpeg') ||
          fullUrl.includes('.gif') ||
          fullUrl.includes('.svg') ||
          fullUrl.includes('/Captcha/') ||
          fullUrl.includes('CaptchaImage.aspx')) {
        return `src="/api/proxy?url=${encodeURIComponent(fullUrl)}"`;
      }

      return `src="${fullUrl}"`;
    });

    // Fix action attributes (forms)
    html = html.replace(/action=["']([^"']+)["']/gi, (match, url) => {
      if (url.startsWith('#') || url.startsWith('javascript:')) {
        return match;
      }
      return `action="${proxyUrl(url)}"`;
    });

    // Fix background images in style attributes
    html = html.replace(/url\(["']?([^"')]+)["']?\)/gi, (match, url) => {
      if (url.startsWith('data:')) {
        return match;
      }
      return `url("${proxyUrl(url)}")`;
    });

    // Fix link rel attributes (CSS, JS, etc.)
    html = html.replace(/<link[^>]*href=["']([^"']+)["'][^>]*>/gi, (match, url) => {
      if (url.startsWith('data:') || url.startsWith('#')) {
        return match;
      }
      const fullUrl = proxyUrl(url);

      // CSS, JS, and other static files should be proxied
      if (fullUrl.includes('.css') ||
          fullUrl.includes('.js') ||
          fullUrl.includes('.ico') ||
          fullUrl.includes('.png') ||
          fullUrl.includes('.jpg') ||
          fullUrl.includes('.gif') ||
          fullUrl.includes('.svg') ||
          fullUrl.includes('.woff') ||
          fullUrl.includes('.woff2') ||
          fullUrl.includes('.ttf') ||
          fullUrl.includes('.eot')) {
        return match.replace(`href="${url}"`, `href="/api/proxy?url=${encodeURIComponent(fullUrl)}"`);
      }

      return match.replace(`href="${url}"`, `href="${fullUrl}"`);
    });

    // Fix script src attributes (JavaScript files)
    html = html.replace(/<script[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi, (match, url) => {
      if (url.startsWith('data:') || url.startsWith('#')) {
        return match;
      }
      const fullUrl = proxyUrl(url);

      if (fullUrl.includes('.js')) {
        return `<script src="/api/proxy?url=${encodeURIComponent(fullUrl)}"></script>`;
      }

      return `<script src="${fullUrl}"></script>`;
    });

    // Add base tag for any remaining relative URLs
    if (!html.includes('<base')) {
      html = html.replace(
        /<head[^>]*>/i,
        `$&<base href="${origin}${basePath}" target="_self">`
      );
    }

    // Inject comprehensive script to fix runtime issues and maintain session
    const injectScript = `
      <script>
        (function() {
          // Store original session cookies
          const originalCookies = document.cookie;
          const proxyOrigin = '${origin}';
          const proxyBasePath = '${basePath}';

          // Fix XMLHttpRequest
          const originalOpen = XMLHttpRequest.prototype.open;
          XMLHttpRequest.prototype.open = function(method, url, ...args) {
            if (url && !url.startsWith('http') && !url.startsWith('//')) {
              url = proxyOrigin + (url.startsWith('/') ? '' : proxyBasePath) + url;
            }
            return originalOpen.call(this, method, url, ...args);
          };

          // Fix fetch
          const originalFetch = window.fetch;
          window.fetch = function(url, ...args) {
            if (typeof url === 'string' && !url.startsWith('http') && !url.startsWith('//')) {
              url = proxyOrigin + (url.startsWith('/') ? '' : proxyBasePath) + url;
            }
            return originalFetch.call(this, url, ...args);
          };

          // Fix form submissions
          document.addEventListener('DOMContentLoaded', function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
              form.addEventListener('submit', function(e) {
                const action = form.getAttribute('action');
                if (action && !action.startsWith('http') && !action.startsWith('//')) {
                  form.setAttribute('action', proxyOrigin + (action.startsWith('/') ? '' : proxyBasePath) + action);
                }
              });
            });
          });

          // Fix dynamic image loading (for captcha and other images)
          const originalImageSrc = Object.getOwnPropertyDescriptor(Image.prototype, 'src');
          if (originalImageSrc) {
            Object.defineProperty(Image.prototype, 'src', {
              get: function() {
                return originalImageSrc.get.call(this);
              },
              set: function(value) {
                if (value && !value.startsWith('http') && !value.startsWith('//') && !value.startsWith('data:')) {
                  value = proxyOrigin + (value.startsWith('/') ? '' : proxyBasePath) + value;
                }
                return originalImageSrc.set.call(this, value);
              }
            });
          }

          // Fix element visibility issues (for both KGM and GİB forms)
          document.addEventListener('DOMContentLoaded', function() {
            // Multiple attempts to fix visibility issues with more aggressive approach
            const fixVisibility = function() {
              // Force show ALL elements that might be hidden
              const allElements = document.querySelectorAll('*');
              allElements.forEach(el => {
                const style = el.style;
                const computedStyle = window.getComputedStyle(el);

                // Fix display issues
                if (computedStyle.display === 'none' || style.display === 'none') {
                  style.display = 'block !important';
                }

                // Fix visibility issues
                if (computedStyle.visibility === 'hidden' || style.visibility === 'hidden') {
                  style.visibility = 'visible !important';
                }

                // Fix opacity issues
                if (parseFloat(computedStyle.opacity) === 0 || style.opacity === '0') {
                  style.opacity = '1 !important';
                }

                // Fix position issues that might hide content
                if (computedStyle.position === 'absolute' && computedStyle.top === '-1000px') {
                  style.position = 'relative !important';
                  style.top = 'auto !important';
                }
              });

              // Specific fixes for form elements
              const formElements = document.querySelectorAll('input, select, textarea, button, form');
              formElements.forEach(el => {
                if (el.type !== 'hidden' && el.tagName !== 'OPTION') {
                  el.style.display = 'block !important';
                  el.style.visibility = 'visible !important';
                  el.style.opacity = '1 !important';
                  el.style.width = el.tagName === 'BUTTON' ? 'auto' : '100%';
                  el.style.minHeight = '40px';
                }
              });

              // Fix date inputs for GİB
              const dateInputs = document.querySelectorAll('input[type="date"], input[readonly]');
              dateInputs.forEach(el => {
                el.style.display = 'block !important';
                el.style.visibility = 'visible !important';
                el.style.width = '100% !important';
                el.style.minHeight = '40px !important';
                el.style.pointerEvents = 'auto !important';
                el.style.backgroundColor = 'white !important';
                el.style.border = '1px solid #ccc !important';
              });

              // Fix GİB specific elements
              const tescilTarihi = document.querySelector('#tescilTarihi');
              if (tescilTarihi) {
                tescilTarihi.style.display = 'block !important';
                tescilTarihi.style.visibility = 'visible !important';
                tescilTarihi.parentElement.style.display = 'block !important';
              }

              const sahiplikBelgeTarihi = document.querySelector('#sahiplikBelgeTarihi');
              if (sahiplikBelgeTarihi) {
                sahiplikBelgeTarihi.style.display = 'block !important';
                sahiplikBelgeTarihi.style.visibility = 'visible !important';
                sahiplikBelgeTarihi.parentElement.style.display = 'block !important';
              }

              const securityCode = document.querySelector('#securityCode');
              if (securityCode) {
                securityCode.style.display = 'block !important';
                securityCode.style.visibility = 'visible !important';
                securityCode.parentElement.style.display = 'block !important';
              }

              // Fix captcha images
              const captchaImages = document.querySelectorAll('img[src*="Captcha"], img[src*="captcha"]');
              captchaImages.forEach(img => {
                img.style.display = 'block !important';
                img.style.visibility = 'visible !important';
                img.style.maxWidth = '100% !important';
              });

              // Fix Bootstrap/KGM grid layout
              const bootstrapCols = document.querySelectorAll('.col-md-4, .col-md-6, .col-12');
              bootstrapCols.forEach(col => {
                col.style.display = 'block !important';
                col.style.flex = '1 1 auto';
              });

              // Force trigger any lazy-loaded content
              const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
              lazyImages.forEach(img => {
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                }
              });

              console.log('Doğa Danışmanlık: Form elements visibility fixed - Attempt:', arguments.callee.callCount || 1);
            };

            // Run immediately
            fixVisibility();

            // Run again after 500ms
            setTimeout(fixVisibility, 500);

            // Run again after 1 second
            setTimeout(fixVisibility, 1000);

            // Run again after 2 seconds
            setTimeout(fixVisibility, 2000);

            // Run again after 3 seconds
            setTimeout(fixVisibility, 3000);

            // Run again after 5 seconds
            setTimeout(fixVisibility, 5000);

            // Run again after 10 seconds (final attempt)
            setTimeout(fixVisibility, 10000);
          });

          // Override console methods to catch errors
          const originalError = console.error;
          console.error = function(...args) {
            if (args.some(arg => arg && arg.toString && arg.toString().includes('Failed to load resource'))) {
              // Ignore resource loading errors in proxy context
              return;
            }
            return originalError.apply(console, args);
          };
        })();
      </script>
    `;

    // Inject comprehensive CSS to force show form elements for both KGM and GİB
    const forceShowCSS = `
      <style>
        /* Force show all form elements that might be hidden */
        .MuiFormControl-root,
        input[type="text"],
        input[type="date"],
        input[type="tel"],
        input[type="email"],
        select,
        textarea,
        .MuiInputBase-root,
        .MuiTextField-root,
        .MuiFormGroup-root,
        .MuiRadioGroup-root,
        .MuiGrid-item,
        form,
        .form-control,
        .col-md-4,
        .col-md-6,
        .container,
        .content-hero,
        .MuiCollapse-root,
        .MuiPaper-root,
        .MuiAlert-root {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Fix date inputs for GİB */
        input[type="date"][readonly],
        input[readonly],
        input[type="text"] {
          pointer-events: auto !important;
          background-color: white !important;
          border: 1px solid #ccc !important;
          width: 100% !important;
          min-height: 40px !important;
        }

        /* Fix hidden elements that should be visible */
        input[style*="display: none"],
        select[style*="display: none"],
        div[style*="display: none"],
        .MuiCollapse-root[style*="display: none"] {
          display: block !important;
        }

        /* Fix visibility issues */
        input[style*="visibility: hidden"],
        select[style*="visibility: hidden"],
        div[style*="visibility: hidden"] {
          visibility: visible !important;
        }

        /* Fix opacity issues */
        input[style*="opacity: 0"],
        select[style*="opacity: 0"],
        div[style*="opacity: 0"] {
          opacity: 1 !important;
        }

        /* Ensure form layout is correct */
        .MuiGrid-container,
        .container-fluid,
        .row {
          display: flex !important;
          flex-wrap: wrap !important;
          width: 100% !important;
        }

        .MuiGrid-item,
        .col-md-4,
        .col-md-6,
        .col-12 {
          flex: 1 1 auto !important;
          max-width: none !important;
          display: block !important;
        }

        /* Fix captcha and security code areas for both sites */
        #securityCode,
        .MuiFormControl-root:has(#securityCode),
        img[src*="Captcha"],
        .captcha-container {
          display: block !important;
          visibility: visible !important;
          max-width: 100% !important;
        }

        /* Fix GİB specific elements */
        .MuiTypography-root,
        .MuiTypography-body1,
        .MuiBreadcrumbs-root,
        .MuiPaper-elevation,
        .MuiAlert-message {
          display: block !important;
          visibility: visible !important;
        }

        /* Fix form structure for GİB */
        form {
          width: 100% !important;
          max-width: none !important;
        }

        /* Ensure all form fields are accessible */
        input:disabled,
        select:disabled,
        textarea:disabled {
          opacity: 0.6 !important;
        }

        /* Fix Bootstrap grid for KGM */
        .d-flex {
          display: flex !important;
        }

        .justify-content-center {
          justify-content: center !important;
        }

        /* Fix any absolute positioning issues */
        [style*="position: absolute"] {
          position: relative !important;
        }

        /* Force show all content */
        body {
          overflow: visible !important;
        }

        #main-content,
        main {
          min-height: auto !important;
        }
      </style>
    `;

    html = html.replace('</head>', `${forceShowCSS}${injectScript}</head>`);

    // Return the modified HTML with cookies
    const nextResponse = new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Frame-Options': 'SAMEORIGIN',
      },
    });

    // Forward cookies to maintain session
    setCookieHeaders.forEach(cookie => {
      nextResponse.headers.append('Set-Cookie', cookie);
    });

    return nextResponse;
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch the requested URL' },
      { status: 500 }
    );
  }
}

