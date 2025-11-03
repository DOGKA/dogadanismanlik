import Hero from '@/components/sections/Hero';
import StatsAndPartners from '@/components/sections/StatsAndPartners';
import ServicesGrid from '@/components/sections/ServicesGrid';
import VehicleQuerySection from '@/components/sections/VehicleQuerySection';
import SpecialtiesOrPartners from '@/components/sections/SpecialtiesOrPartners';
import ConsultForm from '@/components/sections/ConsultForm';
import CTABand from '@/components/sections/CTABand';
import BlogPreview from '@/components/sections/BlogPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsAndPartners />
      <ServicesGrid />
      <VehicleQuerySection />
      <SpecialtiesOrPartners />
      <CTABand />
      <ConsultForm />
      <BlogPreview />
    </>
  );
}
