'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const caseStudiesData = [
  {
    id: 1,
    title: "Fortune 500 IT Transformation",
    company: "Global Technology Corp",
    industry: "Technology",
    challenge: "A Fortune 500 tech giant was struggling with a legacy IT infrastructure that was slow and inefficient, hindering their ability to innovate and respond to market changes.",
    solution: "We deployed a comprehensive IT modernization strategy, including migrating their systems to Windows Azure, implementing a new SharePoint 2010 portal, and developing custom .NET applications.",
    results: "Reduced operational costs by 40%. Increased development velocity by 75%. Improved system reliability and security across the board.",
    image: { src: "https://picsum.photos/seed/business-tech/800/600", hint: "corporate office" },
  },
  {
    id: 2,
    title: "Startup Mobile App Launch",
    company: "Fintech Innovators Inc.",
    industry: "Financial Services",
    challenge: "A rapidly growing fintech startup needed to develop a secure and scalable iPhone application to serve its growing customer base, but lacked in-house mobile development expertise.",
    solution: "Our mobile development team designed and built a native iPhone application from the ground up, using Xcode and Cocoa Touch, with a focus on usability and performance.",
    results: "Successfully launched the app to the App Store, achieving 100,000 downloads in the first three months. The app received a 4.8-star rating from users.",
    image: { src: "https://picsum.photos/seed/startup-tech/800/600", hint: "startup collaboration" },
  },
];

const CaseStudies = () => {

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {caseStudiesData.map((study, index) => (
            <div key={study.id} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={cn("order-1 group overflow-hidden rounded-lg shadow-xl", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                 <Image
                  src={study.image.src}
                  alt={study.title}
                  width={800}
                  height={600}
                  data-ai-hint={study.image.hint}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className={cn("order-2", index % 2 === 0 ? "md:order-2" : "md:order-1")}>
                <Badge variant="secondary" className="mb-2">{study.industry}</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-headline">
                  {study.title}
                </h3>
                <div className="space-y-6 text-muted-foreground font-body">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">The Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                   <div>
                    <h4 className="font-semibold text-foreground mb-1">The Solution</h4>
                    <p>{study.solution}</p>
                  </div>
                   <div>
                    <h4 className="font-semibold text-foreground mb-1">The Results</h4>
                    <p>{study.results}</p>
                  </div>
                </div>
                 <div className="mt-6">
                    <Button asChild>
                      <Link href="/contact">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
