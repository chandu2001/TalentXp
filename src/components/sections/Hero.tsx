import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-headline leading-tight">
              Empowering Businesses with{' '}
              <span className="text-primary">
                AI-Driven Talent
              </span>{' '}
              Solutions
            </h1>
            <p className="mt-6 text-lg text-gray-600 font-body">
              Leading AI/ML consulting and talent acquisition platform. Transforming how businesses discover, develop, and deploy exceptional talent through intelligent technology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button asChild size="lg">
                <Link href="/services">
                  Discover Our Solutions
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://picsum.photos/600/500?grayscale"
              alt="AI and human collaboration"
              width={600}
              height={500}
              data-ai-hint="AI collaboration"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
             <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-gray-900 font-headline text-lg">95%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
