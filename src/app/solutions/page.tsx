import Careers from '@/components/sections/Careers';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedPage from '@/components/ui/AnimatedPage';

export default function SolutionsPage() {
  return (
    <AnimatedPage>
      <PageHeader
        title="AI-Powered Solutions"
        breadcrumb="Home / Solutions"
        description="Leverage our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent, faster."
      />
      <Careers />
    </AnimatedPage>
  );
}
