import Services from '@/components/sections/Services';
import PageHeader from '@/components/sections/PageHeader';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const OurProcess = () => {
    const processSteps = [
    {
      name: '1. Discover & Analyze',
      description: 'We start by understanding your business goals and technical challenges to define a clear roadmap.',
    },
    {
      name: '2. Design & Prototype',
      description: 'Our team designs a comprehensive architecture and creates prototypes to visualize the solution.',
    },
    {
      name: '3. Develop & Integrate',
      description: 'We build and integrate the solution using agile methodologies for quality and speed.',
    },
    {
      name: '4. Deploy & Support',
      description: 'After rigorous testing, we deploy the solution and provide ongoing support to ensure success.',
    },
  ];

  return (
    <section className="py-20 bg-secondary/50 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground font-headline">Our Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology to ensure the successful delivery of our IT solutions, from initial discovery to final deployment and support.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <Card key={step.name} className="text-center p-8 border hover:border-primary/50 hover:shadow-lg transition-all transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-foreground font-headline">{step.name}</h3>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
};

const AnalyticsCTA = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="group overflow-hidden rounded-lg shadow-xl">
          <Image
            src="https://picsum.photos/seed/analytics/600/500"
            alt="Data Analytics Dashboard"
            width={600}
            height={500}
            data-ai-hint="data analytics"
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground font-headline">AI-Driven Analytics & Insights</h2>
          <p className="text-muted-foreground">Unlock the power of your data. Our AI-driven analytics solutions provide deep insights into your operations, customers, and market trends, enabling you to make smarter, data-backed decisions.</p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">Predictive modeling to forecast future trends.</p>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">Real-time dashboards for actionable insights.</p>
            </li>
             <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">Custom reporting tailored to your business needs.</p>
            </li>
          </ul>
           <Button asChild>
                <Link href="/contact">
                    Learn More
                </Link>
            </Button>
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
            <OurProcess />
        </AnimatedSection>
        <AnimatedSection>
            <AnalyticsCTA />
        </AnimatedSection>
      </>
  );
}
