'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Zap, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Successful AI Implementations", icon: Zap },
    { number: "95%", label: "Client Satisfaction Rate", icon: Award },
    { number: "50+", label: "Enterprise Clients", icon: Shield },
    { number: "200%", label: "Average ROI Improvement", icon: CheckCircle }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to solve complex talent challenges."
    },
    {
      title: "Data-Driven Results",
      description: "Every decision backed by comprehensive analytics and measurable outcomes."
    },
    {
      title: "Ethical AI",
      description: "Committed to responsible AI practices that promote fairness and transparency."
    },
    {
      title: "Client Success",
      description: "Your success is our mission. We're partners in your transformation journey."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">TalentXp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We're pioneers in AI-driven talent solutions, transforming how organizations discover, develop, and deploy exceptional talent through intelligent technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 font-headline">{stat.number}</div>
                <div className="text-gray-600 text-sm font-body">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-headline">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-body">
              At TalentXp, we believe that the future of work is intelligent, inclusive, and infinitely more effective. Our mission is to revolutionize talent management through advanced AI technologies that not only streamline processes but also unlock human potential.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              We combine deep expertise in artificial intelligence, machine learning, and talent acquisition to deliver solutions that drive measurable business outcomes while creating better experiences for both employers and candidates.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3 font-headline text-lg">Our Approach</h4>
              <div className="space-y-3 font-body">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive needs assessment and strategic planning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom AI model development and implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Continuous optimization and performance monitoring</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing support and strategic guidance</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-headline">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 font-headline text-lg">{value.title}</h4>
                  <p className="text-gray-600 font-body">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
