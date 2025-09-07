import Image from 'next/image';
import { Award, Zap, Shield, CheckCircle, Target, Lightbulb, Users, Milestone } from 'lucide-react';

const StatCard = ({ icon: Icon, number, label }: { icon: React.ElementType, number: string, label: string }) => (
  <div className="text-center bg-card p-6 rounded-lg border border-white/10">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-violet-500/20 to-teal-500/20 text-violet-400 mx-auto mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-3xl font-bold text-foreground mb-2 font-headline">{number}</div>
    <div className="text-muted-foreground text-sm font-body">{label}</div>
  </div>
);

const ValueCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-lg border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="inline-block bg-gradient-to-br from-violet-500 to-teal-400 text-primary-foreground p-4 rounded-full mb-4">
      <Icon className="w-7 h-7" />
    </div>
    <h4 className="text-xl font-semibold text-foreground mb-2 font-headline">{title}</h4>
    <p className="text-muted-foreground font-body">{children}</p>
  </div>
);

const TimelineItem = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
  <div className="relative pl-12">
     <div className="absolute left-0 top-1 h-full w-0.5 bg-border"></div>
     <div className="absolute left-[-9px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-violet-500">
        <div className="w-2 h-2 rounded-full bg-violet-500"></div>
    </div>
    <div className="pt-0.5">
       <span className="text-sm font-semibold text-violet-400 font-headline mb-1 block">{year}</span>
      <h4 className="text-xl font-semibold text-foreground font-headline mb-2">{title}</h4>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
);

const About = () => {
  const stats = [
    { number: "500+", label: "Successful AI Implementations", icon: Zap },
    { number: "95%", label: "Client Satisfaction Rate", icon: Award },
    { number: "50+", label: "Enterprise Clients", icon: Shield },
    { number: "200%", label: "Average ROI Improvement", icon: CheckCircle }
  ];

  return (
    <>
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 font-headline">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
                At TalentXp, we believe that the future of work is intelligent, inclusive, and infinitely more effective. Our mission is to revolutionize talent management through advanced AI technologies that not only streamline processes but also unlock human potential at an unprecedented scale.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                We combine deep expertise in artificial intelligence, machine learning, and human resources to deliver solutions that drive measurable business outcomes while creating better, more equitable experiences for both employers and candidates.
              </p>
            </div>
            <div>
              <div className="relative">
                 <div className="absolute -inset-2">
                    <div className="w-full h-full max-w-md mx-auto opacity-20 blur-lg bg-gradient-to-r from-violet-600 to-teal-500"></div>
                </div>
                <Image
                  src="https://picsum.photos/500/400"
                  alt="Team discussing strategy"
                  width={500}
                  height={400}
                  data-ai-hint="team strategy"
                  className="relative rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={Lightbulb} title="Innovation">
              We relentlessly pursue cutting-edge solutions that push the boundaries of what's possible in talent technology.
            </ValueCard>
            <ValueCard icon={Users} title="Partnership">
              We build collaborative relationships with our clients, acting as an extension of their team to achieve shared goals.
            </ValueCard>
            <ValueCard icon={Target} title="Integrity">
              We operate with transparency and ethical responsibility, ensuring our AI is fair, unbiased, and beneficial.
            </ValueCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Tracing our path from a bold idea to an industry leader.
            </p>
          </div>
          <div className="space-y-12 max-w-3xl mx-auto">
            <TimelineItem year="2020" title="The Idea is Born">
              TalentXp was founded with the vision of transforming HR with artificial intelligence, starting with a small team of passionate engineers and HR experts.
            </TimelineItem>
             <TimelineItem year="2022" title="First Enterprise Client">
              We partnered with our first Fortune 500 company, deploying a customized AI recruitment platform that reduced their time-to-hire by 40%.
            </TimelineItem>
             <TimelineItem year="2024" title="Expanding Our Solutions">
              Launched our advanced talent analytics suite and GenAI tools, empowering organizations with deeper insights and content creation capabilities.
            </TimelineItem>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
