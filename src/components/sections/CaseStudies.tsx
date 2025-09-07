'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Users, Clock, Award, Sparkles, Loader2 } from 'lucide-react';
import { getCaseStudySummary } from '@/app/actions';

const caseStudiesData = [
  {
    id: 1,
    title: "Fortune 500 Talent Transformation",
    company: "Global Technology Corporation",
    industry: "Technology",
    challenge: "Reducing time-to-hire from 45 days to 18 days while improving candidate quality",
    solution: "AI-powered candidate matching and automated screening system",
    results: [
      { metric: "Time to Hire", improvement: "60% reduction", icon: Clock },
      { metric: "Candidate Quality", improvement: "85% increase", icon: Award },
      { metric: "Hiring Costs", improvement: "40% savings", icon: TrendingUp },
      { metric: "Team Satisfaction", improvement: "95% approval", icon: Users }
    ],
    image: { src: "https://picsum.photos/seed/corporate-office/800/600", hint: "corporate office" },
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 2,
    title: "Startup Scale-up Success",
    company: "Fast-Growing Fintech Startup",
    industry: "Financial Services",
    challenge: "Scaling team from 50 to 200+ employees while maintaining culture fit",
    solution: "Custom AI talent analytics and cultural fit assessment platform",
    results: [
      { metric: "Scaling Speed", improvement: "3x faster", icon: TrendingUp },
      { metric: "Cultural Fit", improvement: "92% accuracy", icon: Users },
      { metric: "Retention Rate", improvement: "88% increase", icon: Award },
      { metric: "Productivity", improvement: "150% boost", icon: Clock }
    ],
    image: { src: "https://picsum.photos/seed/startup-meeting/800/600", hint: "startup meeting" },
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 3,
    title: "Enterprise Analytics Implementation",
    company: "Manufacturing Conglomerate",
    industry: "Manufacturing",
    challenge: "Optimizing workforce performance across 15+ global locations",
    solution: "Comprehensive AI-driven workforce analytics and optimization platform",
    results: [
      { metric: "Operational Efficiency", improvement: "45% increase", icon: TrendingUp },
      { metric: "Employee Engagement", improvement: "70% improvement", icon: Users },
      { metric: "Training Effectiveness", improvement: "200% ROI", icon: Award },
      { metric: "Turnover Reduction", improvement: "55% decrease", icon: Clock }
    ],
    image: { src: "https://picsum.photos/seed/factory-technology/800/600", hint: "factory technology" },
    color: "from-green-600 to-teal-600"
  }
];

const CaseStudies = () => {
  const [summaries, setSummaries] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const handleGenerateSummary = async (study: typeof caseStudiesData[0]) => {
    if (summaries[study.id]) return; // Don't regenerate
    setLoading(prev => ({ ...prev, [study.id]: true }));
    const textToSummarize = `Challenge: ${study.challenge}\nSolution: ${study.solution}`;
    const summary = await getCaseStudySummary(textToSummarize);
    setSummaries(prev => ({ ...prev, [study.id]: summary }));
    setLoading(prev => ({ ...prev, [study.id]: false }));
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Real results from real clients. See how TalentXp has transformed talent management for leading organizations.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudiesData.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 font-body">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-headline">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 font-medium font-body">{study.company}</p>
                </div>

                <div className="mb-6 font-body">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-8 font-body">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {study.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow"
                      >
                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${study.color} text-white mb-2`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-lg font-bold text-gray-900 mb-1 font-headline">
                          {result.improvement}
                        </div>
                        <div className="text-sm text-gray-600 font-body">{result.metric}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-4 bg-blue-50/70 rounded-lg border border-blue-200/50">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
                    AI-Generated Summary
                  </h4>
                  {summaries[study.id] && (
                    <p className="text-gray-700 text-sm italic font-body">{summaries[study.id]}</p>
                  )}
                  {loading[study.id] && (
                     <div className="flex items-center text-sm text-gray-500">
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating summary...
                      </div>
                  )}
                  {!summaries[study.id] && !loading[study.id] && (
                    <button
                      onClick={() => handleGenerateSummary(study)}
                      className="inline-flex items-center text-sm text-blue-600 font-medium hover:text-blue-800"
                    >
                      Generate with AI
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={study.image.src}
                      alt={study.title}
                      width={800}
                      height={600}
                      data-ai-hint={study.image.hint}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200/50"
                  >
                    <div className="text-2xl font-bold text-gray-900 font-headline">
                      {study.results[0].improvement}
                    </div>
                    <div className="text-sm text-gray-600 font-body">{study.results[0].metric}</div>
                  </div>
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
