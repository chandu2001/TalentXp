import { ServiceIcon } from '../ui/ServiceIcon';
import FeatureCard from '@/components/common/FeatureCard';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">
            Why Partner with <span className="text-primary">TalentXp</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            TalentXP TECHNOLOGIES is one of the fastest growing IT Services and Solutions Company. We emphasize on acquiring an in-depth knowledge of the customer's context and needs, and design solutions fine-tuned to those needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<ServiceIcon variant="acquisition" className="w-6 h-6" />} title="Customer Relationship Mgmt">
            Customer Relationship Management (CRM) provides a business with a well-rounded view of its customer as well as insights into customer behavior.
          </FeatureCard>
          <FeatureCard icon={<ServiceIcon variant="strategic" className="w-6 h-6" />} title="Enterprise Portal & Content Mgmt">
            Enterprise Content and Portal Management (EPCM) is the strategies, methods and tools used to capture, manage, store, preserve, and deliver information and documents related to organizational processes.
          </FeatureCard>
          <FeatureCard icon={<ServiceIcon variant="genai" className="w-6 h-6" />} title="Enterprise Mobility Solutions">
             TalentXP provides mobile application development solutions that enable enterprises to realize the true benefits of mobile applications.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
