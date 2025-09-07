import { 
  Brain, 
  Users, 
  Sparkles, 
  BarChart3, 
  GraduationCap, 
  Target,
  Search,
  Check,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Consulting",
      description: "Leverage our expertise to build custom AI models, integrate machine learning, and unlock predictive analytics for your business.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Utilize our AI-powered platform for smart candidate matching, automated screening, and cultural fit analysis to find the best talent.",
      color: "text-purple-500",
       bgColor: "bg-purple-50"
    },
    {
      icon: Sparkles,
      title: "GenAI Solutions",
      description: "Implement custom generative AI for HR, including AI chatbots, automated job description creation, and interview summaries.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Talent Analytics",
      description: "Gain data-driven insights into workforce optimization, performance metrics, diversity tracking, and retention prediction.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Deploy AI-enhanced, personalized learning programs to assess skills, identify gaps, and define clear career paths for employees.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "Develop a comprehensive AI transformation strategy for your HR functions with a clear technology roadmap and ROI optimization plan.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50"
    }
  ];

  const processSteps = [
    {
      icon: Search,
      name: 'Discovery & Assessment',
      description: 'We start by understanding your unique challenges, goals, and existing infrastructure through in-depth workshops.',
    },
    {
      icon: Target,
      name: 'Strategy & Roadmap',
      description: 'We co-create a tailored AI strategy and a clear implementation roadmap with defined milestones and KPIs.',
    },
    {
      icon: Check,
      name: 'Implementation & Integration',
      description: 'Our expert team develops and seamlessly integrates the AI solutions into your existing workflows with minimal disruption.',
    },
    {
      icon: Rocket,
      name: 'Optimization & Support',
      description: 'We provide continuous monitoring, performance optimization, and ongoing support to ensure long-term success and ROI.',
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              We provide a suite of AI-powered solutions designed to address your most complex challenges in talent management and business innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col group border border-gray-200/80 hover:border-blue-300"
                >
                  <div className="flex-grow">
                    <div className={`inline-flex p-3 rounded-lg ${service.bgColor} ${service.color} mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-headline">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-6 group-hover:translate-x-1 transition-transform font-body"
                  >
                    Learn More
                    <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-headline">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
                We follow a structured and collaborative process to ensure our AI solutions deliver maximum value and align perfectly with your business objectives.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                   <div key={step.name} className="relative">
                     <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 h-full">
                       <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                         <Icon className="h-6 w-6" />
                       </div>
                       <h3 className="text-lg font-semibold text-gray-900 mb-2 font-headline">{step.name}</h3>
                       <p className="text-gray-600 text-sm font-body">{step.description}</p>
                     </div>
                   </div>
                );
              })}
            </div>
        </div>
      </section>
    </>
  );
};

export default Services;
