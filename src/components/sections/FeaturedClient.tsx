// src/components/sections/FeaturedClient.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedClient = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary font-semibold font-body">Featured Success Story</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-headline">
              Global Technology Corp's Talent Transformation
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We partnered with a Fortune 500 tech giant to overhaul their recruitment process. By implementing our AI-powered platform, we reduced their time-to-hire by an incredible 60% and boosted their candidate quality score by 85%.
            </p>
            <Button asChild>
              <Link href="/case-studies">
                Read The Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="https://picsum.photos/seed/1/600/500"
              alt="Featured Client"
              width={600}
              height={500}
              data-ai-hint="corporate office"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClient;
