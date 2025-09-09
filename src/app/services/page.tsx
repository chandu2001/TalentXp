import Services from '@/components/sections/Services';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import OurProcess from '@/components/services/OurProcess';
import AnalyticsCTA from '@/components/services/AnalyticsCTA';

export default function ServicesPage() {
    return (
      <>
        <PageHeader
          title="Our Services"
          breadcrumb="Home / Services"
          description="We provide a suite of IT services and solutions designed to address your most complex challenges in business and technology."
        />
        <AnimatedSection>
            <Services />
        </AnimatedSection>
        <AnimatedSection>
            <OurProcess />
        </AnimatedSection>
        <AnimatedSection>
            <AnalyticsCTA />
        </AnimatedSection>
      </>
  );
}
