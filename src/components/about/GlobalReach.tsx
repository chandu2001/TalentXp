
import Image from 'next/image';

const industries = [
    'Banking & Financial Services', 'Insurance & Healthcare', 'Life Sciences', 
    'Manufacturing', 'Retail, Distribution & Logistics', 'Media & Entertainment', 
    'Leisure & Travel', 'Communication', 'Energy & Utilities', 'Federal Government'
];

const GlobalReach = () => (
  <section className="py-20 bg-secondary/50 border-y">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-headline">Global Reach & Industry Expertise</h2>
              <p className="text-muted-foreground mb-8">
                  Our excellent team of Technology Professionals work with enterprise clients in North America, Latin America, Australia, Europe, Middle East and Asia. We serve a wide range of verticals with specialized, end-to-end IT services.
              </p>
              <div className="flex flex-wrap gap-3">
                  {industries.map(industry => (
                      <div key={industry} className="bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground">
                          {industry}
                      </div>
                  ))}
              </div>
          </div>
          <div className="relative h-64 lg:h-80">
             <Image
                  src="/world-map.svg"
                  alt="World map showing global presence"
                  fill
                  className="object-contain"
              />
          </div>
      </div>
    </div>
  </section>
);

export default GlobalReach;
