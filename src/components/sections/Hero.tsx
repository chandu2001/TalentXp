'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-secondary/50 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center animated-grid [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground font-headline tracking-tight leading-tight"
          >
            Empowering Businesses with{' '}
            <span className="text-primary">
              AI-Driven Talent
            </span>{' '}
            Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground font-body"
          >
            Leading AI/ML consulting and talent acquisition platform. Transforming how businesses discover, develop, and deploy exceptional talent through intelligent technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="/services">
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="relative group">
            <div className="absolute -inset-2">
                <div className="w-full h-full max-w-7xl mx-auto opacity-20 blur-lg bg-gradient-to-r from-primary to-accent"></div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="https://picsum.photos/seed/ai-tech/1200/600"
                alt="AI and human collaboration dashboard"
                width={1200}
                height={600}
                data-ai-hint="AI neural network"
                className="relative w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
