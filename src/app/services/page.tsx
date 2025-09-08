import Services from '@/components/sections/Services';
import PageHeader from '@/components/sections/PageHeader';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ServiceIcon } from '@/components/ui/ServiceIcon';

const AzureSection = () => (
    <section className="py-20 bg-secondary/50 border-y">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="group overflow-hidden rounded-lg shadow-xl">
          <Image
            src="https://picsum.photos/seed/cloud-platform/600/500"
            alt="Windows Azure Cloud Platform"
            width={600}
            height={500}
            data-ai-hint="cloud computing"
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground font-headline">Windows Azure Solutions</h2>
          <p className="text-muted-foreground">Leverage Microsoft's Cloud Computing Platform to realize the benefits of cloud computing. Azure provides a range of functionality to build powerful applications that span from consumer Web to enterprise scenarios.</p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <ServiceIcon variant="analytics" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Control Costs:</strong> Eliminate up-front costs for massively scalable computing infrastructure.</p>
            </li>
            <li className="flex items-start space-x-3">
              <ServiceIcon variant="consulting" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Scale and Grow:</strong> Add compute power as your business grows or demand spikes, ensuring agility and responsiveness.</p>
            </li>
             <li className="flex items-start space-x-3">
              <ServiceIcon variant="genai" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Reduce Risk:</strong> As a Microsoft partner, our expertise ensures your solution uses industry-leading best practices.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);


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
            <AzureSection />
        </AnimatedSection>
      </>
  );
}
