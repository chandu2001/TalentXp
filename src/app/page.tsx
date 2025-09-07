import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FeaturedClient from '@/components/sections/FeaturedClient';
import CTA from '@/components/sections/CTA';
import AnimatedPage from '@/components/ui/AnimatedPage';

export default function Home() {
  return (
    <AnimatedPage>
      <Hero />
      <WhyChooseUs />
      <FeaturedClient />
      <CTA />
    </AnimatedPage>
  );
}
