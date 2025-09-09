
import { Card } from '@/components/ui/card';

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

export default OurProcess;
