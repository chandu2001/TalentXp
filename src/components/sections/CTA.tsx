// src/components/sections/CTA.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-secondary/50 border-y">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
          Ready to Revolutionize Your Talent Strategy?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Let's talk about how TalentXp can help you build a smarter, faster, and more effective workforce. Schedule a free consultation with our experts today.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
