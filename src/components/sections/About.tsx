import Image from 'next/image';
import { Award, Zap, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Successful AI Implementations", icon: Zap },
    { number: "95%", label: "Client Satisfaction Rate", icon: Award },
    { number: "50+", label: "Enterprise Clients", icon: Shield },
    { number: "200%", label: "Average ROI Improvement", icon: CheckCircle }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            About <span className="text-primary">TalentXp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We are pioneers in AI-driven talent solutions, transforming how organizations discover, develop, and deploy exceptional talent through intelligent technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-headline">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-body">
              At TalentXp, we believe that the future of work is intelligent, inclusive, and infinitely more effective. Our mission is to revolutionize talent management through advanced AI technologies that not only streamline processes but also unlock human potential at an unprecedented scale.
            </p>
             <p className="text-gray-600 leading-relaxed font-body">
              We combine deep expertise in artificial intelligence, machine learning, and human resources to deliver solutions that drive measurable business outcomes while creating better, more equitable experiences for both employers and candidates.
            </p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/500/400"
              alt="Team discussing strategy"
              width={500}
              height={400}
              data-ai-hint="team strategy"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center bg-card p-6 rounded-lg border">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 font-headline">{stat.number}</div>
                <div className="text-gray-600 text-sm font-body">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
