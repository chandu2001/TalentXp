'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { getCaseStudySummary } from '@/app/actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const caseStudiesData = [
  {
    id: 1,
    title: "Fortune 500 Talent Transformation",
    company: "Global Technology Corp",
    industry: "Technology",
    challenge: "A Fortune 500 tech giant was struggling with a lengthy and inefficient recruitment process. Their average time-to-hire was 45 days, leading to the loss of top candidates and increased hiring costs. They needed to significantly accelerate hiring without compromising on the quality of talent.",
    solution: "We deployed our flagship AI-powered talent acquisition platform, customizing its matching algorithms to their specific job taxonomies. The system automated resume screening, identified best-fit candidates from a pool of over 50,000 applicants, and provided predictive analytics on candidate success.",
    results: "Reduced average time-to-hire by 60% (from 45 to 18 days). Increased new hire quality score by 85% based on 6-month performance reviews. Saved an estimated $1.2M in annual recruitment costs.",
    image: { src: "https://picsum.photos/800/600", hint: "corporate office building" },
  },
  {
    id: 2,
    title: "Startup Scale-up Success",
    company: "Fintech Innovators Inc.",
    industry: "Financial Services",
    challenge: "A rapidly growing fintech startup needed to scale its team from 50 to over 200 employees within a year. Their primary challenge was maintaining their unique company culture and ensuring that new hires were not only skilled but also aligned with their values of innovation and collaboration.",
    solution: "We developed and implemented a custom AI-driven cultural fit assessment tool. This platform analyzed candidate responses to situational questions and compared them against the company's core value profile, providing recruiters with a 'cultural alignment score' for each applicant.",
    results: "Enabled a 4x team growth in one year while maintaining a 92% employee retention rate. The cultural fit assessment tool achieved a 95% accuracy in predicting strong team integration. New hire engagement scores were 25% higher than the industry average.",
    image: { src: "https://picsum.photos/seed/fintech/800/600", hint: "modern startup office" },
  },
  {
    id: 3,
    title: "Enterprise Analytics Implementation",
    company: "Global Manufacturing Co.",
    industry: "Manufacturing",
    challenge: "A global manufacturing conglomerate with over 15 locations worldwide faced challenges in workforce optimization and high employee turnover, which was impacting production efficiency. They lacked the tools to gain deep insights into performance and retention drivers across their diverse workforce.",
    solution: "We deployed a comprehensive, AI-driven workforce analytics platform that integrated data from their existing HRIS, payroll, and performance management systems. The platform provided predictive insights on turnover risk, identified key drivers of performance, and visualized operational efficiency metrics in real-time.",
    results: "Reduced employee turnover by 55% within the first 18 months, leading to significant cost savings. Boosted overall operational efficiency by 45% through data-driven staffing and development decisions. Provided leadership with actionable insights, improving strategic workforce planning.",
    image: { src: "https://picsum.photos/seed/mfg/800/600", hint: "industrial manufacturing facility" },
  },
  {
    id: 4,
    title: "Healthcare Hiring Accuracy",
    company: "MediCare Hospital Network",
    industry: "Healthcare",
    challenge: "A large hospital network needed to improve the accuracy and efficiency of hiring specialized medical staff, from nurses to surgeons. The high stakes of the roles required a rigorous vetting process that was slow and resource-intensive, causing delays in staffing critical positions.",
    solution: "We implemented an AI-powered credential verification and skill-matching system. The tool automatically cross-referenced candidate qualifications with role requirements and professional databases, flagging the most suitable candidates and reducing manual review time.",
    results: "Improved hiring accuracy for critical medical roles by 98%. Reduced credential verification time by 75%, allowing for faster onboarding of essential staff. Decreased administrative workload on HR by 50%, freeing them to focus on candidate engagement.",
    image: { src: "https://picsum.photos/seed/healthcare/800/600", hint: "hospital interior" },
  }
];

const CaseStudies = () => {
  const [summaries, setSummaries] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const handleGenerateSummary = async (study: typeof caseStudiesData[0]) => {
    if (summaries[study.id]) return;
    setLoading(prev => ({ ...prev, [study.id]: true }));
    const textToSummarize = `Challenge: ${study.challenge}\nSolution: ${study.solution}\nResults: ${study.results}`;
    const summary = await getCaseStudySummary(textToSummarize);
    setSummaries(prev => ({ ...prev, [study.id]: summary }));
    setLoading(prev => ({ ...prev, [study.id]: false }));
  };

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {caseStudiesData.map((study, index) => (
            <div key={study.id} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={cn("order-1", index % 2 === 0 ? "md:order-1" : "md:order-2")}>
                 <Image
                  src={study.image.src}
                  alt={study.title}
                  width={800}
                  height={600}
                  data-ai-hint={study.image.hint}
                  className="w-full h-auto object-cover rounded-lg shadow-xl"
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
                 <div className="mt-6 p-4 bg-secondary/50 rounded-lg border">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
