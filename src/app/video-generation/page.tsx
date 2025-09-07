'use client';

import { useState } from 'react';
import { generateVideo } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Clapperboard, Sparkles } from 'lucide-react';
import PageHeader from '@/components/sections/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function VideoGenerationPage() {
  const [prompt, setPrompt] = useState('A majestic dragon soaring over a mystical forest at dawn.');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const result = await generateVideo(prompt);
      if (result.error) {
        setError(result.error);
      } else if (result.videoDataUri) {
        setVideoUrl(result.videoDataUri);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title="AI Video Generation"
        breadcrumb="Home / Video Generation"
        description="Bring your ideas to life. Describe a scene and let our AI generate a unique video for you."
      />
      <AnimatedSection>
        <div className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <Clapperboard className="w-6 h-6 mr-2 text-primary" />
                  Video Generation Studio
                </CardTitle>
                <CardDescription>Enter a prompt to generate a 5-second video clip using AI.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., A futuristic city with flying cars"
                      className="text-base"
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Video (this may take a minute)...
                      </>
                    ) : (
                      'Generate Video'
                    )}
                  </Button>
                </form>

                {error && (
                  <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                  </div>
                )}

                <div className="mt-8">
                  {isLoading && (
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg text-muted-foreground">
                      <Loader2 className="w-12 h-12 animate-spin mb-4" />
                      <p className="text-center font-body">AI is creating your video... Please be patient.</p>
                    </div>
                  )}
                  {videoUrl && (
                    <div className="aspect-video w-full">
                      <video
                        src={videoUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-full rounded-lg shadow-xl"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {!isLoading && !videoUrl && (
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg text-muted-foreground bg-secondary/30">
                        <Sparkles className="w-12 h-12 mb-4 text-muted-foreground/50" />
                        <h3 className="font-headline text-lg text-foreground">Your Generated Video Will Appear Here</h3>
                        <p className="font-body mt-2 text-center">Enter a prompt and click generate to see the magic!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
