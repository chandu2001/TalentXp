import Image from 'next/image';
import { Award, Zap, Shield, CheckCircle, Target, Lightbulb, Users, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const StatCard = ({ icon: Icon, number, label }: { icon: React.ElementType, number: string, label: string }) => (
  <div className="text-center bg-card p-6 rounded-lg border">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-primary mx-auto mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-3xl font-bold text-foreground mb-2 font-headline">{number}</div>
    <div className="text-muted-foreground text-sm font-body">{label}</div>
  </div>
);

const ValueCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-lg border text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
    <div className="inline-block bg-gradient-to-br from-primary to-accent text-primary-foreground p-4 rounded-full mb-4">
      <Icon className="w-7 h-7" />
    </div>
    <h4 className="text-xl font-semibold text-foreground mb-2 font-headline">{title}</h4>
    <p className="text-muted-foreground font-body">{children}</p>
  </div>
);

const TimelineItem = ({ year, title, children }: { year: string, title: string, children: React.ReactNode }) => (
  <div className="relative pl-12">
     <div className="absolute left-0 top-1 h-full w-0.5 bg-border"></div>
     <div className="absolute left-[-9px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-primary">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
    </div>
    <div className="pt-0.5">
       <span className="text-sm font-semibold text-primary font-headline mb-1 block">{year}</span>
      <h4 className="text-xl font-semibold text-foreground font-headline mb-2">{title}</h4>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
);

const TeamMemberCard = ({ name, title, imageUrl, linkedinUrl }: { name: string, title: string, imageUrl: string, linkedinUrl: string }) => (
    <div className="text-center bg-card p-6 rounded-lg border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
        <div className="relative inline-block mb-4">
            <Image
                src={imageUrl}
                alt={name}
                width={128}
                height={128}
                data-ai-hint="person photo"
                className="rounded-full w-32 h-32 object-cover"
            />
        </div>
        <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">{name}</h4>
        <p className="text-primary font-body mb-3">{title}</p>
        <Button variant="outline" size="icon" asChild>
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
            </Link>
        </Button>
    </div>
);

const About = () => {
  const stats = [
    { number: "500+", label: "Successful AI Implementations", icon: Zap },
    { number: "95%", label: "Client Satisfaction Rate", icon: Award },
    { number: "50+", label: "Enterprise Clients", icon: Shield },
    { number: "200%", label: "Average ROI Improvement", icon: CheckCircle }
  ];
  
  const teamMembers = [
      { name: 'Dr. Evelyn Reed', title: 'Founder & CEO', imageUrl: 'https://picsum.photos/seed/person1/128/128', linkedinUrl: '#' },
      { name: 'Marcus Chen', title: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/seed/person2/128/128', linkedinUrl: '#' },
      { name: 'Aria Sharma', title: 'Head of Talent Strategy', imageUrl: 'https://picsum.photos/seed/person3/128/128', linkedinUrl: '#' },
  ];

  return (
    <>
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 font-headline">Our Mission & Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
                Our mission is to empower organizations to build future-ready workforces by harnessing the power of data-driven talent intelligence. We envision a world where every talent decision is smart, fair, and impactful, creating opportunities for individuals and sustainable growth for businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                We are a team of passionate technologists, data scientists, and HR experts dedicated to solving the most complex challenges in talent acquisition and management. We believe in the transformative power of AI to create more efficient, effective, and equitable workplaces.
              </p>
            </div>
            <div>
              <div className="relative">
                 <div className="absolute -inset-2">
                    <div className="w-full h-full max-w-md mx-auto opacity-20 blur-lg bg-gradient-to-r from-primary to-accent"></div>
                </div>
                <Image
                  src="https://picsum.photos/500/400"
                  alt="Team collaborating on a project"
                  width={500}
                  height={400}
                  data-ai-hint="team collaboration"
                  className="relative rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y">
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
            <ValueCard icon={Users} title="Customer Centricity">
              We build collaborative partnerships with our clients, acting as an extension of their team to achieve shared goals.
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
            <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                  <TeamMemberCard key={member.name} {...member} />
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50 border-y">
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

      <section className="py-20 bg-background">
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
