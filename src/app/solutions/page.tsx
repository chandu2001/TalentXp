import Careers from '@/components/sections/Careers';
import PageHeader from '@/components/sections/PageHeader';

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="AI-Powered Solutions"
        breadcrumb="Home / Solutions"
        description="Leverage our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent, faster."
      />
      <Careers />
    </>
  );
}
