import { 
  Brain, 
  Users, 
  Sparkles, 
  BarChart3, 
  GraduationCap, 
  Target,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Consulting",
      description: "Leverage our expertise to build custom AI models, integrate machine learning, and unlock predictive analytics for your business.",
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Utilize our AI-powered platform for smart candidate matching, automated screening, and cultural fit analysis to find the best talent.",
    },
    {
      icon: Sparkles,
      title: "GenAI Solutions",
      description: "Implement custom generative AI for HR, including AI chatbots, automated job description creation, and interview summaries.",
    },
    {
      icon: BarChart3,
      title: "Talent Analytics",
      description: "Gain data-driven insights into workforce optimization, performance metrics, diversity tracking, and retention prediction.",
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Deploy AI-enhanced, personalized learning programs to assess skills, identify gaps, and define clear career paths for employees.",
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "Develop a comprehensive AI transformation strategy for your HR functions with a clear technology roadmap and ROI optimization plan.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 border hover:border-primary/50 group"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-headline">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
