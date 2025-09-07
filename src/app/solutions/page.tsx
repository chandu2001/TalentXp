import PageHeader from '@/components/sections/PageHeader';
import Solutions from '@/components/sections/Solutions';

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="AI-Powered Solutions"
        breadcrumb="Home / Solutions"
        description="Leverage our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent, faster."
      />
      <Solutions />
    </>
  );
}
