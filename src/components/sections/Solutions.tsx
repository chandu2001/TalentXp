import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import AnimatedSection from '../ui/AnimatedSection';

const SolutionFeature = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-foreground">{title}</h4>
      <p className="text-muted-foreground mt-1">{children}</p>
    </div>
  </div>
);

const Solutions = () => {
  return (
    <>
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-headline mb-4">
                  Enterprise Solutions
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team of professionals are recognized experts and experienced consultants on Microsoft's SharePoint Products and Enterprise Portal & Content Management.
                </p>
                <div className="space-y-6">
                  <SolutionFeature
                    icon={<ServiceIcon variant="strategic" className="w-6 h-6" />}
                    title="SharePoint 2010"
                  >
                    We provide expert consulting and development for Microsoft SharePoint to enhance collaboration and content management.
                  </SolutionFeature>
                  <SolutionFeature
                    icon={<ServiceIcon variant="consulting" className="w-6 h-6" />}
                    title="Enterprise Portal & Content Mgmt"
                  >
                    Strategies, methods and tools to capture, manage, store, preserve, and deliver information across the organization.
                  </SolutionFeature>
                </div>
              </div>
               <div className="group overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://picsum.photos/seed/enterprise-solution/600/500"
                  alt="Enterprise portal management"
                  width={600}
                  height={500}
                  data-ai-hint="enterprise tech"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-secondary/50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="group overflow-hidden rounded-lg shadow-xl md:order-last">
                <Image
                  src="https://picsum.photos/seed/mobile-dev/600/500"
                  alt="Mobile application development"
                  width={600}
                  height={500}
                  data-ai-hint="mobile development"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="md:order-first">
                <h2 className="text-3xl font-bold text-foreground font-headline mb-4">
                  Business & Mobile Solutions
                </h2>
                <p className="text-muted-foreground mb-8">
                  From lead management to custom iPhone application development, we build solutions that drive business growth and efficiency.
                </p>
                <div className="space-y-6">
                  <SolutionFeature
                    icon={<ServiceIcon variant="acquisition" className="w-6 h-6" />}
                    title="Lead Management"
                  >
                    The more knowledge you have about your leads, the easier it is to convert them to customers. Integrated lead management is key.
                  </SolutionFeature>
                  <SolutionFeature
                     icon={<ServiceIcon variant="genai" className="w-6 h-6" />}
                    title="iPhone App Development"
                  >
                    Our iPhone application developers are experienced in Apple's developer tools like Xcode, Cocoa Touch framework and Objective C.
                  </SolutionFeature>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Solutions;
