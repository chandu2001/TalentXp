import Image from 'next/image';
import { Linkedin, Globe, ShieldCheck, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import AnimatedSection from '../ui/AnimatedSection';
import { siteImages } from '@/lib/images';

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-lg border transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg h-full">
    <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-foreground mb-2 font-headline">{title}</h4>
    <p className="text-muted-foreground font-body">{children}</p>
  </div>
);

const TeamMemberCard = ({ name, title, imageUrl, linkedinUrl, width, height, hint }: { name:string, title:string, imageUrl:string, linkedinUrl:string, width:number, height:number, hint:string }) => (
    <div className="text-center bg-card p-6 rounded-lg border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
        <div className="relative inline-block mb-4 group overflow-hidden rounded-full">
            <Image
                src={imageUrl}
                alt={name}
                width={width}
                height={height}
                data-ai-hint={hint}
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

const industries = [
    'Banking & Financial Services', 'Insurance & Healthcare', 'Life Sciences', 
    'Manufacturing', 'Retail, Distribution & Logistics', 'Media & Entertainment', 
    'Leisure & Travel', 'Communication', 'Energy & Utilities', 'Federal Government'
];

const About = () => {
  const teamMembers = [
      { name: 'John Doe', title: 'Founder & CEO', image: siteImages.teamMember1, linkedinUrl: '#' },
      { name: 'Jane Smith', title: 'Chief Technology Officer', image: siteImages.teamMember2, linkedinUrl: '#' },
      { name: 'Peter Jones', title: 'Head of Solutions', image: siteImages.teamMember3, linkedinUrl: '#' },
  ];

  return (
    <>
      <AnimatedSection>
        <section id="about" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">A Global Leader in IT Services & Solutions</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-body">
                  TalentXP is a global Information Technology (IT) Services and Solutions company. We provide cutting-edge IT Solutions for Enterprises to effectively utilize available resources and efficiently manage operations. Our solution-driven approach makes us a strategic partner to Fortune 1000 enterprises.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed font-body">
                  By complementing our comprehensive services with expert technology consultation, we optimize your IT initiatives and enable your organization to respond more quickly to market changes.
                </p>
              </div>
              <div>
                <div className="relative group">
                   <div className="absolute -inset-2">
                      <div className="w-full h-full max-w-md mx-auto opacity-20 blur-lg bg-gradient-to-r from-primary to-accent"></div>
                  </div>
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src={siteImages.aboutTeamCollaboration.src}
                        alt="Team collaborating on a project"
                        width={siteImages.aboutTeamCollaboration.width}
                        height={siteImages.aboutTeamCollaboration.height}
                        data-ai-hint={siteImages.aboutTeamCollaboration.hint}
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Global Reach & Industry Expertise</h2>
                    <p className="text-muted-foreground mb-8">
                        Our excellent team of Technology Professionals work with enterprise clients in North America, Latin America, Australia, Europe, Middle East and Asia. We serve a wide range of verticals with specialized, end-to-end IT services.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {industries.map(industry => (
                            <div key={industry} className="bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-64 lg:h-80">
                   <Image
                        src="/world-map.svg"
                        alt="World map showing global presence"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
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
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-secondary/50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                The brilliant minds behind our innovative solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <TeamMemberCard 
                        key={member.name} 
                        name={member.name}
                        title={member.title}
                        linkedinUrl={member.linkedinUrl}
                        imageUrl={member.image.src}
                        width={member.image.width}
                        height={member.image.height}
                        hint={member.image.hint}
                    />
                ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default About;
