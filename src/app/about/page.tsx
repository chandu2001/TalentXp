import About from '@/components/sections/About';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedPage from '@/components/ui/AnimatedPage';

export default function AboutPage() {
  return (
    <AnimatedPage>
      <PageHeader
        title="About Us"
        breadcrumb="Home / About Us"
        description="We are pioneers in AI-driven talent solutions, transforming how organizations discover, develop, and deploy exceptional talent through intelligent technology."
      />
      <About />
    </AnimatedPage>
  );
}
