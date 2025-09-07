import Careers from '@/components/sections/Careers';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function SolutionsPage() {
  return (
    <>
       <PageHeader
        title="Our Solutions"
        breadcrumb="Home / Solutions"
        description="Use our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent."
      />
      <AnimatedSection>
        <Careers />
      </AnimatedSection>
    </>
  );
}
