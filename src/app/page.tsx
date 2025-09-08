import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import CTA from '@/components/sections/CTA';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  );
}
