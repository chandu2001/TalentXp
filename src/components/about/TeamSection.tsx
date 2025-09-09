
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { teamMembers } from '@/lib/data';
import type { TeamMember } from '@/lib/types';

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <div className="text-center bg-card p-6 rounded-lg border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
        <div className="relative inline-block mb-4 group overflow-hidden rounded-full">
            <Image
                src={member.image.src}
                alt={member.name}
                width={member.image.width}
                height={member.image.height}
                data-ai-hint={member.image.hint}
                className="rounded-full w-32 h-32 object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        <h4 className="text-xl font-semibold text-foreground mb-1 font-headline">{member.name}</h4>
        <p className="text-primary font-body mb-3">{member.title}</p>
        <Button variant="outline" size="icon" asChild>
            <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
            </Link>
        </Button>
    </div>
);

const TeamSection = () => (
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
                  member={member}
              />
          ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
