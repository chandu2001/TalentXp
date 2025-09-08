import About from '@/components/sections/About';
import PageHeader from '@/components/sections/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About TalentXp"
        breadcrumb="Home / About Us"
        description="Learn more about our mission, vision, and the core values that drive our innovative IT solutions forward."
      />
      <About />
    </>
  );
}
