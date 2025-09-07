import Contact from '@/components/sections/Contact';
import PageHeader from '@/components/sections/PageHeader';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb="Home / Contact Us"
        description="Ready to transform your talent strategy with AI? Let's discuss how TalentXp can help."
      />
      <Contact />
    </>
  );
}
