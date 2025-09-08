import About from '@/components/sections/About';
import PageHeader from '@/components/sections/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb="Home / About Us"
        description="Learn more about our mission and the team that drives our innovative IT solutions forward."
      />
      <About />
    </>
  );
}
