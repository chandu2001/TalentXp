import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Briefcase, BrainCircuit, Zap, Users, Heart } from 'lucide-react';
import Link from 'next/link';

const jobOpenings = [
  {
    title: 'Senior AI/ML Engineer',
    location: 'Remote, USA',
    department: 'Engineering',
    url: '#',
  },
  {
    title: 'Data Scientist, Talent Analytics',
    location: 'New York, NY',
    department: 'Data Science',
    url: '#',
  },
  {
    title: 'Product Manager, AI Solutions',
    location: 'San Francisco, CA',
    department: 'Product',
    url: '#',
  },
  {
    title: 'Enterprise Account Executive',
    location: 'Remote, USA',
    department: 'Sales',
    url: '#',
  },
];

const benefits = [
    {
        icon: BrainCircuit,
        title: 'Innovative Projects',
        description: 'Work on cutting-edge AI that solves real-world problems for top-tier clients.'
    },
    {
        icon: Zap,
        title: 'Growth Opportunities',
        description: 'We invest in your professional development with continuous learning resources.'
    },
    {
        icon: Users,
        title: 'Collaborative Culture',
        description: 'Join a diverse and inclusive team that values every voice and idea.'
    },
    {
        icon: Heart,
        title: 'Comprehensive Benefits',
        description: 'Enjoy competitive salary, health insurance, and flexible work arrangements.'
    }
]

const JobOpenings = () => {
  return (
    <>
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
                Current <span className="text-primary">Openings</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                Find where you fit in. We're always looking for talented individuals to join our mission.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                {jobOpenings.map((job) => (
                    <Card key={job.title} className="hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center">
                        <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1 font-headline">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
                            <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                            </div>
                            <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                            </div>
                        </div>
                        </div>
                        <Button asChild className="mt-4 md:mt-0">
                        <Link href={job.url}>Apply Now</Link>
                        </Button>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="py-20 bg-secondary/50 border-y">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
                    Why Join <span className="text-primary">TalentXp</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                    We're not just building a product; we're building a culture of innovation and excellence.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <div key={benefit.title} className="text-center bg-card p-6 rounded-lg border">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </div>
                        )
                    })}
                </div>
             </div>
        </section>
    </>
  );
};

export default JobOpenings;
