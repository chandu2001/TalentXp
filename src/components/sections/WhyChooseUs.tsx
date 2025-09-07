// src/components/sections/WhyChooseUs.tsx
import { Target, Lightbulb, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-card p-8 rounded-lg border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
     <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-violet-500/20 to-teal-500/20 text-violet-400 mb-6">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3 font-headline">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed font-body">
      {children}
    </p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
            Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-teal-400">TalentXp</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            We're more than a technology provider; we're your strategic partner in building the future of your workforce.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={Target} title="Bespoke Solutions">
            We don't believe in one-size-fits-all. Our solutions are tailored to your unique business challenges and goals.
          </FeatureCard>
          <FeatureCard icon={Lightbulb} title="Expert Team">
            Our team consists of leading experts in AI, machine learning, and human resources, ensuring you get the best of both worlds.
          </FeatureCard>
          <FeatureCard icon={Users} title="Ethical AI">
            We are committed to fairness and transparency. Our AI is designed to reduce bias and create equitable opportunities for all.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
