import PageHeader from '@/components/sections/PageHeader';
import Solutions from '@/components/sections/Solutions';
import Careers from '@/components/sections/Careers';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="AI-Powered Solutions"
        breadcrumb="Home / Solutions"
        description="Leverage our generative AI to craft compelling job descriptions, employee stories, and culture highlights to attract top talent, faster."
      />
      <Solutions />
      <AnimatedSection>
        <section className="py-20 bg-background border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
                Experience Our GenAI <span className="text-primary">in Action</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
                Use our interactive tool to see how our generative AI can create compelling content for your talent acquisition needs.
              </p>
            </div>
            <Careers />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
