import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTA from '@/components/sections/CTA';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Services from '@/components/sections/Services';
import FeaturedClient from '@/components/sections/FeaturedClient';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedClient />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  );
}
