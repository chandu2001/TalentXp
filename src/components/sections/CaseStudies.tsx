'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { getCaseStudySummary } from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudiesData = [
  {
    id: 1,
    title: "Fortune 500 Talent Transformation",
    company: "Global Technology Corp",
    industry: "Technology",
    challenge: "Reducing time-to-hire from 45 days to 18 days while improving candidate quality.",
    solution: "AI-powered candidate matching and automated screening system.",
    image: { src: "https://picsum.photos/seed/1/800/600", hint: "corporate office" },
    summary: "Implemented an AI-powered recruitment platform, reducing time-to-hire by 60% and increasing candidate quality score by 85% for a Fortune 500 tech giant."
  },
  {
    id: 2,
    title: "Startup Scale-up Success",
    company: "Fintech Innovators Inc.",
    industry: "Financial Services",
    challenge: "Scaling the team from 50 to over 200 employees in one year while maintaining cultural alignment.",
    solution: "Custom AI talent analytics and cultural fit assessment platform.",
    image: { src: "https://picsum.photos/seed/2/800/600", hint: "startup meeting" },
    summary: "Developed a custom AI talent analytics platform for a fintech startup, enabling a 4x team growth in one year with a 92% cultural fit accuracy."
  },
  {
    id: 3,
    title: "Enterprise Analytics Implementation",
    company: "Global Manufacturing Co.",
    industry: "Manufacturing",
    challenge: "Optimizing workforce performance and reducing turnover across 15+ global locations.",
    solution: "Comprehensive AI-driven workforce analytics and optimization platform.",
    image: { src: "https://picsum.photos/seed/3/800/600", hint: "factory technology" },
    summary: "Deployed a global workforce analytics solution for a manufacturing conglomerate, boosting operational efficiency by 45% and reducing employee turnover by 55%."
  }
];

const CaseStudies = () => {
  const [summaries, setSummaries] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const handleGenerateSummary = async (study: typeof caseStudiesData[0]) => {
    if (summaries[study.id]) return; 
    setLoading(prev => ({ ...prev, [study.id]: true }));
    const textToSummarize = `Challenge: ${study.challenge}\nSolution: ${study.solution}\nSummary: ${study.summary}`;
    const summary = await getCaseStudySummary(textToSummarize);
    setSummaries(prev => ({ ...prev, [study.id]: summary }));
    setLoading(prev => ({ ...prev, [study.id]: false }));
  };

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <Card key={study.id} className="overflow-hidden bg-card hover:bg-secondary/50 transition-colors duration-300 group">
              <div className="overflow-hidden">
              <Image
                src={study.image.src}
                alt={study.title}
                width={800}
                height={600}
                data-ai-hint={study.image.hint}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{study.industry}</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2 font-headline">
                  {study.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">{study.summary}</p>
                 <div className="mt-4 p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center text-sm">
                    <Sparkles className="w-4 h-4 mr-2 text-primary" />
                    AI-Generated Summary
                  </h4>
                  {summaries[study.id] && (
                    <p className="text-primary/90 text-sm italic font-body">{summaries[study.id]}</p>
                  )}
                  {loading[study.id] && (
                     <div className="flex items-center text-sm text-muted-foreground">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </div>
                  )}
                  {!summaries[study.id] && !loading[study.id] && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleGenerateSummary(study)}
                    >
                      Generate with AI
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
