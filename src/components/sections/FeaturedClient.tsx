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
            <span className="text-primary font-semibold font-body">Featured Case Study</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4 font-headline">
              Global Tech Corp's Digital Transformation
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We partnered with a Fortune 500 tech giant to overhaul their IT infrastructure. By implementing our custom enterprise solutions, we reduced their operational costs by 40% and boosted their development efficiency by 75%. This strategic move not only saved them over $2.2M annually but also positioned them as a leader in digital innovation.
            </p>
            <Button asChild>
              <Link href="/case-studies">
                Read The Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 group overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://picsum.photos/seed/corporate-success/600/500"
              alt="Team discussing project on a whiteboard"
              width={600}
              height={500}
              data-ai-hint="corporate success"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClient;
