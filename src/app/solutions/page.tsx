import PageHeader from '@/components/sections/PageHeader';
import Solutions from '@/components/sections/Solutions';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Our Solutions"
        breadcrumb="Home / Solutions"
        description="We provide a suite of IT solutions designed to address your most complex challenges in business and technology."
      />
      <Solutions />
    </>
  );
}
