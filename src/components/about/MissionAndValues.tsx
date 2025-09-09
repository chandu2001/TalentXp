
import { ShieldCheck, Users, Zap } from 'lucide-react';

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-lg border transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg h-full">
    <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-foreground mb-2 font-headline">{title}</h4>
    <p className="text-muted-foreground font-body">{children}</p>
  </div>
);

const MissionAndValues = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Our Mission and Values</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
          Our mission is to provide innovative, high quality and best-in-class IT Consulting and IT Solutions & Services to our customers, enabling them to achieve their business objectives. Our strong domain expertise, global work culture, and technical excellence help companies get ahead and be ready for the future.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ValueCard icon={<Zap className="w-7 h-7" />} title="Innovation-Driven">
          At TalentXP, we see Innovation as a clear differentiator. We lead the way in powering next-generation enterprises with Cloud, Mobility, Big Data and Social Media solutions.
        </ValueCard>
        <ValueCard icon={<Users className="w-7 h-7" />} title="Client Partnership">
          We partner with our clients to create transformational value that provides a sustainable competitive advantage. Our customized solutions provide enhanced visibility and project control.
        </ValueCard>
        <ValueCard icon={<ShieldCheck className="w-7 h-7" />} title="Solution-Oriented">
           Our delivery processes and expertise assist you to solve your business' most complex problems, help you reduce risk, and attain a competitive advantage for long-term success.
        </ValueCard>
      </div>
    </div>
  </section>
);

export default MissionAndValues;
