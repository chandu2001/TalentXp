import JobOpenings from '@/components/sections/JobOpenings';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CareersPage() {
  return (
    <>
      <AnimatedSection>
        <PageHeader
          title="Join Our Team"
          breadcrumb="Home / Careers"
          description="We're looking for passionate innovators to join us in shaping the future of AI in talent management. Explore our open roles and discover your next opportunity."
        />
      </AnimatedSection>
      <AnimatedSection>
        <JobOpenings />
      </AnimatedSection>
    </>
  );
}
