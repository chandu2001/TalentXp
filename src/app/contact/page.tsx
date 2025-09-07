import Contact from '@/components/sections/Contact';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactPage() {
  return (
    <>
      <AnimatedSection>
        <PageHeader
          title="Contact Us"
          breadcrumb="Home / Contact Us"
          description="Ready to transform your talent strategy with AI? Let's discuss how TalentXp can help."
        />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  );
}
