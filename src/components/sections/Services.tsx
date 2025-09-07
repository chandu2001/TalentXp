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
      description: "Intelligent technology transformation and cutting-edge AI solutions tailored to your business needs.",
      features: ["Custom AI Models", "Machine Learning Integration", "Predictive Analytics", "Automation Solutions"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "AI-powered recruitment and talent matching that finds the perfect candidates faster than ever.",
      features: ["Smart Candidate Matching", "Automated Screening", "Cultural Fit Analysis", "Diversity Optimization"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "GenAI Solutions",
      description: "Custom generative AI implementations for HR and talent management processes.",
      features: ["AI Chatbots", "Content Generation", "Interview Automation", "Personalized Training"],
      color: "from-green-600 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Talent Analytics",
      description: "Data-driven insights for workforce optimization and strategic talent decisions.",
      features: ["Performance Metrics", "Retention Prediction", "Skill Gap Analysis", "ROI Tracking"],
      color: "from-orange-600 to-red-600"
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "AI-enhanced learning and skill development programs that adapt to individual needs.",
      features: ["Personalized Learning", "Skill Assessment", "Career Pathing", "Micro-learning"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "End-to-end AI transformation strategy and implementation for enterprise success.",
      features: ["Digital Transformation", "Change Management", "Technology Roadmap", "ROI Optimization"],
      color: "from-cyan-600 to-blue-600"
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Comprehensive AI-powered solutions designed to transform your talent management and drive exceptional business results.
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
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-headline">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-body">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 font-body">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform font-body"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
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
