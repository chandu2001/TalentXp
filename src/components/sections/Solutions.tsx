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
                  Smarter Talent Acquisition
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our AI-powered platform streamlines your entire recruitment process. From intelligent sourcing to automated screening and predictive analytics, we help you find and hire the best-fit candidates faster and more effectively than ever before.
                </p>
                <div className="space-y-6">
                  <SolutionFeature
                    icon={<ServiceIcon variant="acquisition" className="w-6 h-6" />}
                    title="Intelligent Candidate Matching"
                  >
                    AI algorithms that go beyond keywords to match candidates based on skills, experience, and cultural fit.
                  </SolutionFeature>
                  <SolutionFeature
                    icon={<ServiceIcon variant="genai" className="w-6 h-6" />}
                    title="Automated Screening"
                  >
                    Save hundreds of hours by automating resume screening and initial candidate vetting.
                  </SolutionFeature>
                   <SolutionFeature
                    icon={<ServiceIcon variant="strategic" className="w-6 h-6" />}
                    title="Predictive Success Modeling"
                  >
                    Identify candidates with the highest potential for long-term success in your organization.
                  </SolutionFeature>
                </div>
              </div>
               <div className="group overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://picsum.photos/seed/recruitment-tech/600/500"
                  alt="AI helping with recruitment"
                  width={600}
                  height={500}
                  data-ai-hint="AI recruitment"
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
                  src="https://picsum.photos/seed/analytics-dashboard/600/500"
                  alt="Data analytics dashboard"
                  width={600}
                  height={500}
                  data-ai-hint="data dashboard"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="md:order-first">
                <h2 className="text-3xl font-bold text-foreground font-headline mb-4">
                  AI-Driven Analytics & Insights
                </h2>
                <p className="text-muted-foreground mb-8">
                  Unlock the full potential of your workforce data. Our analytics platform provides deep, actionable insights into performance, engagement, and retention, empowering you to make strategic talent decisions with confidence.
                </p>
                <div className="space-y-6">
                  <SolutionFeature
                    icon={<ServiceIcon variant="analytics" className="w-6 h-6" />}
                    title="Workforce Optimization"
                  >
                    Identify skill gaps, optimize team structures, and plan for future talent needs.
                  </SolutionFeature>
                  <SolutionFeature
                     icon={<ServiceIcon variant="training" className="w-6 h-6" />}
                    title="Performance & Engagement Tracking"
                  >
                    Visualize performance trends and understand the key drivers of employee engagement.
                  </SolutionFeature>
                   <SolutionFeature
                    icon={<ServiceIcon variant="consulting" className="w-6 h-6" />}
                    title="Diversity & Inclusion Analytics"
                  >
                    Track D&I metrics to build a more equitable and inclusive workplace.
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
