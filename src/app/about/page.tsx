import About from '@/components/sections/About';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About TalentXp"
        breadcrumb="Home / About Us"
        description="Learn more about our mission, vision, and the core values that drive our innovative IT solutions forward."
      />
      <AnimatedSection>
        <About />
      </AnimatedSection>
    </>
  );
}
