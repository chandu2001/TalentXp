import Services from '@/components/sections/Services';
import PageHeader from '@/components/sections/PageHeader';
import Image from 'next/image';
import { BarChart3, Bot, BrainCircuit } from 'lucide-react';
import AnimatedPage from '@/components/ui/AnimatedPage';

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl border-2 border-primary">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

const OurProcess = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
          Our <span className="text-primary">Process</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
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

const AnalyticsSection = () => (
  <section className="py-20 bg-secondary/50 border-y">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="https://picsum.photos/600/500"
            alt="Data Analytics Dashboard"
            width={600}
            height={500}
            data-ai-hint="data dashboard"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground font-headline">AI-Driven Analytics</h2>
          <p className="text-muted-foreground">Unlock the power of your data. Our AI-driven analytics solutions provide deep insights into your workforce, helping you make smarter, data-backed decisions to drive growth and efficiency.</p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Predictive Insights:</strong> Forecast talent needs, identify top performers, and predict turnover before it happens.</p>
            </li>
            <li className="flex items-start space-x-3">
              <BrainCircuit className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Performance Optimization:</strong> Analyze team performance to identify opportunities for improvement and skill development.</p>
            </li>
             <li className="flex items-start space-x-3">
              <Bot className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground"><strong className="text-foreground">Automated Reporting:</strong> Get customized, automated reports that deliver the most important metrics directly to you.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function ServicesPage() {
    return (
      <AnimatedPage>
        <PageHeader
          title="Our Services"
          breadcrumb="Home / Services"
          description="We provide a suite of AI-powered solutions designed to address your most complex challenges in talent management and business innovation."
        />
        <Services />
        <OurProcess />
        <AnalyticsSection />
      </AnimatedPage>
  );
}
