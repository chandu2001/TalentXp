import CaseStudies from '@/components/sections/CaseStudies';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedPage from '@/components/ui/AnimatedPage';

export default function CaseStudiesPage() {
  return (
    <AnimatedPage>
      <PageHeader
        title="Case Studies"
        breadcrumb="Home / Case Studies"
        description="Real results from real clients. See how TalentXp has transformed talent management for leading organizations."
      />
      <CaseStudies />
    </AnimatedPage>
  );
}
