import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import About from '@/components/sections/About';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
    </>
  );
}
