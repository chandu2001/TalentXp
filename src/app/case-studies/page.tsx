import CaseStudies from '@/components/sections/CaseStudies';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CaseStudiesPage() {
  return (
    <>
      <AnimatedSection>
        <PageHeader
          title="Case Studies"
          breadcrumb="Home / Case Studies"
          description="Real results from real clients. See how TalentXp has transformed talent management for leading organizations."
        />
      </AnimatedSection>
      <AnimatedSection>
        <CaseStudies />
      </AnimatedSection>
    </>
  );
}
