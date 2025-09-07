import Contact from '@/components/sections/Contact';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedPage from '@/components/ui/AnimatedPage';

export default function ContactPage() {
  return (
    <AnimatedPage>
      <PageHeader
        title="Contact Us"
        breadcrumb="Home / Contact Us"
        description="Ready to transform your talent strategy with AI? Let's discuss how TalentXp can help."
      />
      <Contact />
    </AnimatedPage>
  );
}
