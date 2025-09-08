import Image from 'next/image';
import { Award, Zap, Shield, CheckCircle, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import AnimatedSection from '../ui/AnimatedSection';
import { ServiceIcon } from '../ui/ServiceIcon';

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-lg border transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
    <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-foreground mb-2 font-headline">{title}</h4>
    <p className="text-muted-foreground font-body">{children}</p>
  </div>
);

const TeamMemberCard = ({ name, title, imageUrl, linkedinUrl }: { name: string, title: string, imageUrl: string, linkedinUrl: string }) => (
    <div className="text-center bg-card p-6 rounded-lg border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
        <div className="relative inline-block mb-4 group overflow-hidden rounded-full">
            <Image
                src={imageUrl}
                alt={name}
                width={128}
                height={128}
                data-ai-hint="person photo"
                className="rounded-full w-32 h-32 object-cover transition-transform duration-300 group-hover:scale-105"
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
  const teamMembers = [
      { name: 'John Doe', title: 'Founder & CEO', imageUrl: 'https://picsum.photos/seed/man-ceo/128/128', linkedinUrl: '#' },
      { name: 'Jane Smith', title: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/seed/woman-cto/128/128', linkedinUrl: '#' },
      { name: 'Peter Jones', title: 'Head of Solutions', imageUrl: 'https://picsum.photos/seed/man-solutions/128/128', linkedinUrl: '#' },
  ];

  return (
    <>
      <AnimatedSection>
        <section id="about" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6 font-headline">Company Overview</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
                  TalentXP TECHNOLOGIES is one of the fastest growing IT Services and Solutions Company. We emphasize on acquiring an in-depth knowledge of the customer's context and needs, and design solutions fine-tuned to those needs.
                </p>
                <h4 className="text-2xl font-bold text-foreground mb-4 font-headline">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed font-body">
                  To provide innovative, high quality and best-in-class IT Consulting and IT Solutions & Services to our customers, enabling them to achieve their business objectives.
                </p>
              </div>
              <div>
                <div className="relative group">
                   <div className="absolute -inset-2">
                      <div className="w-full h-full max-w-md mx-auto opacity-20 blur-lg bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="https://picsum.photos/seed/corporate-mission/500/400"
                        alt="Team collaborating on a project"
                        width={500}
                        height={400}
                        data-ai-hint="team expertise diversity"
                        className="relative w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-secondary/50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                The principles that guide our work and define our culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard icon={<ServiceIcon variant="genai" className="w-7 h-7" />} title="Innovation">
                We relentlessly pursue cutting-edge solutions that push the boundaries of what's possible in technology.
              </ValueCard>
              <ValueCard icon={<ServiceIcon variant="acquisition" className="w-7 h-7" />} title="Customer Centricity">
                We build collaborative partnerships with our clients, acting as an extension of their team to achieve shared goals.
              </ValueCard>
              <ValueCard icon={<ServiceIcon variant="strategic" className="w-7 h-7" />} title="Integrity">
                We operate with transparency and ethical responsibility, ensuring our solutions are reliable and beneficial.
              </ValueCard>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
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
      </AnimatedSection>
    </>
  );
};

export default About;
