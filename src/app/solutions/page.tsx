import Careers from '@/components/sections/Careers';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function CareersPage() {
  return (
    <>
       <PageHeader
        title="Careers"
        breadcrumb="Home / Careers"
        description="Use our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent."
      />
      <AnimatedSection>
        <Careers />
      </AnimatedSection>
    </>
  );
}
