'use client';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Sparkles, 
  BarChart3, 
  GraduationCap, 
  Target,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Consulting",
      description: "Leverage our expertise to build custom AI models, integrate machine learning, and unlock predictive analytics for your business.",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Utilize our AI-powered platform for smart candidate matching, automated screening, and cultural fit analysis.",
      color: "text-purple-500"
    },
    {
      icon: Sparkles,
      title: "GenAI Solutions",
      description: "Implement custom generative AI for HR, including AI chatbots, content generation, and interview automation.",
      color: "text-green-500"
    },
    {
      icon: BarChart3,
      title: "Talent Analytics",
      description: "Gain data-driven insights into workforce optimization, performance metrics, and retention prediction.",
      color: "text-orange-500"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Deploy AI-enhanced, personalized learning programs to assess skills and define clear career paths.",
      color: "text-indigo-500"
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "Develop a comprehensive AI transformation strategy with a clear technology roadmap and ROI optimization.",
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We provide a suite of AI-powered solutions designed to address your most complex challenges in talent management and business innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col group border border-transparent hover:border-blue-200"
              >
                <div className="flex-grow">
                  <div className={`inline-flex p-3 rounded-lg bg-gray-100 ${service.color} mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-headline">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-6 group-hover:translate-x-1 transition-transform font-body"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
