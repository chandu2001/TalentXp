'use client';
import { useState } from 'react';
import { getCareersContent } from '@/app/actions';
import type { GenerateCareersContentOutput } from '@/ai/flows/ai-careers-content-generation';
import { Briefcase, Feather, Building, Loader2, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Note: This component is currently not used in the application,
// but is kept for potential future use if GenAI features are re-introduced.

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
    // The getCareersContent function is currently disabled.
    // const content = await getCareersContent({
    //   jobTitle,
    //   companyCulture,
    //   employeeStoryIdea
    // });
    // setGeneratedContent(content);
    setIsLoading(false);
  };

  return (
    <section id="careers" className="bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-lg bg-card border">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <Sparkles className="w-6 h-6 mr-2 text-primary" />
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
                  <Button type="submit" disabled={true} className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Generate Content (Disabled)
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div
            className="space-y-6"
          >
            {isLoading && (
               <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Loader2 className="w-12 h-12 animate-spin mb-4" />
                <p className="font-body">Generating content with AI...</p>
              </div>
            )}
            
            {generatedContent && (
              <>
                <Card className="bg-card border">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-xl">
                      <Briefcase className="w-5 h-5 mr-2 text-primary" /> Job Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-wrap font-body">{generatedContent.jobDescription}</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-xl">
                      <Feather className="w-5 h-5 mr-2 text-accent" /> Employee Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-wrap font-body">{generatedContent.employeeStory}</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border">
                  <CardHeader>
                    <CardTitle className="font-headline flex items-center text-xl">
                      <Building className="w-5 h-5 mr-2 text-primary" /> Culture Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-wrap font-body">{generatedContent.companyCultureHighlights}</p>
                  </CardContent>
                </Card>
              </>
            )}

            {!generatedContent && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground bg-card border border-dashed rounded-lg p-8">
                <Sparkles className="w-12 h-12 mb-4 text-muted-foreground/50" />
                <h3 className="font-headline text-lg text-foreground">AI-Generated Content Will Appear Here</h3>
                <p className="font-body mt-2">The AI content generation tool is currently disabled.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
