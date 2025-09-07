import About from '@/components/sections/About';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb="Home / About Us"
        description="We are pioneers in AI-driven talent solutions, transforming how organizations discover, develop, and deploy exceptional talent through intelligent technology."
      />
      <AnimatedSection>
        <About />
      </AnimatedSection>
    </>
  );
}
