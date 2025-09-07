'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getCareersContent } from '@/app/actions';
import type { GenerateCareersContentOutput } from '@/ai/flows/ai-careers-content-generation';
import { Briefcase, Feather, Building, Loader2, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Careers = () => {
  const [jobTitle, setJobTitle] = useState('AI/ML Engineer');
  const [companyCulture, setCompanyCulture] = useState('A fast-paced, innovative environment where collaboration and continuous learning are highly valued. We encourage creative problem-solving and offer opportunities for professional growth.');
  const [employeeStoryIdea, setEmployeeStoryIdea] = useState('A day in the life of a remote data scientist, highlighting work-life balance and impact on a major project.');

  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GenerateCareersContentOutput | null>(null);

  const handleGenerateContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedContent(null);
    const content = await getCareersContent({
      jobTitle,
      companyCulture,
      employeeStoryIdea
    });
    setGeneratedContent(content);
    setIsLoading(false);
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Careers Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Use our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-blue-500" />
                  Content Generation Tool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGenerateContent} className="space-y-6">
                  <div>
                    <Label htmlFor="jobTitle" className="font-headline">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder="e.g., Senior AI Engineer"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyCulture" className="font-headline">Company Culture</Label>
                    <Textarea
                      id="companyCulture"
                      value={companyCulture}
                      onChange={(e) => setCompanyCulture(e.target.value)}
                      placeholder="Describe your company culture..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="employeeStoryIdea" className="font-headline">Employee Story Idea</Label>
                    <Textarea
                      id="employeeStoryIdea"
                      value={employeeStoryIdea}
                      onChange={(e) => setEmployeeStoryIdea(e.target.value)}
                      placeholder="e.g., A day in the life of..."
                      rows={3}
                      className="mt-2"
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Generate Content
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {isLoading && (
               <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <Loader2 className="w-12 h-12 animate-spin mb-4" />
                <p className="font-body">Generating content with AI...</p>
              </div>
            )}
            
            {generatedContent && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-xl">
                      <Briefcase className="w-5 h-5 mr-2 text-blue-500" /> Job Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap font-body">{generatedContent.jobDescription}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-xl">
                      <Feather className="w-5 h-5 mr-2 text-green-500" /> Employee Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap font-body">{generatedContent.employeeStory}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-xl">
                      <Building className="w-5 h-5 mr-2 text-purple-500" /> Culture Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-wrap font-body">{generatedContent.companyCultureHighlights}</p>
                  </CardContent>
                </Card>
              </>
            )}

            {!generatedContent && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 bg-gray-50 rounded-lg p-8">
                <Sparkles className="w-12 h-12 mb-4 text-gray-400" />
                <h3 className="font-headline text-lg text-gray-700">AI-Generated Content Will Appear Here</h3>
                <p className="font-body mt-2">Fill out the form and click "Generate Content" to see the magic happen!</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
