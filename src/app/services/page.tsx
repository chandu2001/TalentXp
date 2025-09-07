import Services from '@/components/sections/Services';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const OurProcess = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
          Our <span className="text-primary">Process</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
          A streamlined approach to delivering impactful AI solutions.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <ProcessStep
            number="01"
            title="Discovery & Strategy"
            description="We begin by understanding your unique challenges and objectives to craft a bespoke AI strategy."
          />
          <ProcessStep
            number="02"
            title="Implementation & Integration"
            description="Our experts develop and seamlessly integrate AI solutions into your existing workflows with minimal disruption."
          />
          <ProcessStep
            number="03"
            title="Optimization & Support"
            description="We continuously monitor performance, providing ongoing support and optimization to ensure long-term success."
          />
        </div>
        <div>
          <Image
            src="https://picsum.photos/600/500"
            alt="Our Process"
            width={600}
            height={500}
            data-ai-hint="team collaboration"
            className="rounded-lg shadow-xl"
          />
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
          description="We provide a suite of AI-powered solutions designed to address your most complex challenges in talent management and business innovation."
        />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <OurProcess />
        </AnimatedSection>
      </>
  );
}
