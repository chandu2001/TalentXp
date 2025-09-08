import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { ServiceIcon } from '../ui/ServiceIcon';

const jobOpenings = [
  {
    title: "Technical Lead / Project Manager",
    experience: "6-10 years",
    category: "Technical Positions",
    requirements: [
      "Senior Java Developers with excellent experience in full lifecycle application development",
      "Experience with JAVA/J2EE, Hibernate (Servlets, Struts, JavaScript, JSP, HTML, XML, EJB, JMS, AJAX, etc.)",
      "Hands-on experience in Spring Framework and Struts",
      "Experience in packaging and build tools like Ant, JUnit and applications servers such as Web Sphere, Tomcat, or Web Logic"
    ]
  },
  {
    title: "Embedded System Multimedia Engineer",
    experience: "Minimum two years",
    category: "Embedded Systems",
    requirements: [
      "Experience working in Linux",
      "Expertize in C Programming Language and knowledge in C++ and Assembly programming is added advantage",
      "Hands on experience on design and development of video playback modules",
      "Hands on experience with multimedia and application development on Linux for embedded platforms",
    ]
  },
  {
    title: ".Net Developers",
    experience: "Minimum 1 year",
    category: "Development",
    requirements: [
      "Proficient in development in a Web environment",
      "Technical skills in Microsoft .Net 1.1/2.0 programming skills, JavaScript, MS SQL Server",
      "Experience in object oriented concepts and design is a must",
    ]
  },
  {
    title: "Microsoft SharePoint and Dynamics",
    experience: "2-6 years",
    category: "Microsoft Technologies",
    requirements: [
        "Commercial development experience within a Dynamics CRM environment",
        "Wider development experience with strong C#, Sharepoint (MOSS) and SQL Server experience",
    ]
  },
  {
    title: "PHP Developers",
    experience: "2-3 years",
    category: "Development",
    requirements: [
      "Strong track record in framework based development of workflow, enterprise and e-commerce applications using PHP-MY SQL technologies",
      "Proficient with PHP, MySQL, MVC Framework, Smarty, Ajax",
    ]
  },
  {
    title: "Testing Professionals",
    experience: "2-5 years",
    category: "Quality Assurance",
    requirements: [
      "Develop and execute software test plans",
      "Write test standards and procedures",
      "Maintain documentation of test results to assist in debugging and modification of software",
    ]
  },
];

const JobCard = ({ job }: { job: typeof jobOpenings[0] }) => (
    <Card className="hover:shadow-lg hover:border-primary/50 transition-all duration-300 w-full">
        <CardContent className="p-0">
            <Accordion type="single" collapsible>
                <AccordionItem value={job.title} className="border-none">
                    <AccordionTrigger className="p-6 text-left hover:no-underline">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold text-foreground mb-1 font-headline">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{job.experience}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{job.category}</span>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                                    {job.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                            <Button asChild className="mt-4">
                                <Link href="#">Mail your CV to Apply</Link>
                            </Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
    </Card>
);

const JobOpenings = () => {
  return (
    <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
            Current <span className="text-primary">Openings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            TalentXP is an equal opportunities employer. We value the diversity of the markets in which we operate. Diversity is central to our brand image and is an integral part of our people strategies.
            </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
            {jobOpenings.map((job) => (
                <JobCard key={job.title} job={job} />
            ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-muted-foreground">Freshers please apply only to [email protected]</p>
            </div>
        </div>
        </div>
    </section>
  );
};

export default JobOpenings;
