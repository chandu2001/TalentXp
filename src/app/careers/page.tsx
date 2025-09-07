import JobOpenings from '@/components/sections/JobOpenings';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedPage from '@/components/ui/AnimatedPage';

export default function CareersPage() {
  return (
    <AnimatedPage>
      <PageHeader
        title="Join Our Team"
        breadcrumb="Home / Careers"
        description="We're looking for passionate innovators to join us in shaping the future of AI in talent management. Explore our open roles and discover your next opportunity."
      />
      <JobOpenings />
    </AnimatedPage>
  );
}
