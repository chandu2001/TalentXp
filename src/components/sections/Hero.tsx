'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-background py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline leading-tight">
              Empowering Businesses with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                AI-Driven Talent
              </span>{' '}
              Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-body">
              Leading AI/ML consulting and talent acquisition platform. Transforming how businesses discover, develop, and deploy exceptional talent through intelligent technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground">
                <Link href="/services">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://picsum.photos/600/500?grayscale"
              alt="AI and human collaboration"
              width={600}
              height={500}
              data-ai-hint="AI collaboration"
              className="rounded-xl shadow-2xl w-full h-auto object-cover opacity-80"
            />
             <div className="absolute -bottom-8 -left-8 bg-card p-4 rounded-lg shadow-lg border hidden md:block">
              <p className="font-bold text-foreground font-headline text-lg">95%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
