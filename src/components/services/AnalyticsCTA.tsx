
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { siteImages } from '@/lib/images';

const AnalyticsCTA = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="group overflow-hidden rounded-lg shadow-xl">
          <Image
            src={siteImages.analyticsCTA.src}
            alt="Data Analytics Dashboard"
            width={siteImages.analyticsCTA.width}
            height={siteImages.analyticsCTA.height}
            data-ai-hint={siteImages.analyticsCTA.hint}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground font-headline">AI-Driven Analytics & Insights</h2>
          <p className="text-muted-foreground">Unlock the power of your data. Our AI-driven analytics solutions provide deep insights into your operations, customers, and market trends, enabling you to make smarter, data-backed decisions.</p>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">Predictive modeling to forecast future trends.</p>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">Real-time dashboards for actionable insights.</p>
            </li>
             <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">Custom reporting tailored to your business needs.</p>
            </li>
          </ul>
           <Button asChild>
                <Link href="/contact">
                    Learn More
                </Link>
            </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AnalyticsCTA;
