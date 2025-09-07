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
      description: "We leverage cutting-edge AI technology to solve complex talent challenges, pushing the boundaries of what's possible."
    },
    {
      title: "Data-Driven Results",
      description: "Every decision is backed by comprehensive analytics and measurable outcomes, ensuring a clear return on investment."
    },
    {
      title: "Ethical AI",
      description: "Committed to responsible AI practices that promote fairness, transparency, and eliminate bias in talent processes."
    },
    {
      title: "Client Success",
      description: "Your success is our mission. We are dedicated partners in your transformation journey, providing continuous support."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">TalentXp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            We are pioneers in AI-driven talent solutions, transforming how organizations discover, develop, and deploy exceptional talent through intelligent technology. Our mission is to build the future of work.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 font-headline">{stat.number}</div>
                <div className="text-gray-600 text-sm font-body">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-headline">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-body">
              At TalentXp, we believe that the future of work is intelligent, inclusive, and infinitely more effective. Our mission is to revolutionize talent management through advanced AI technologies that not only streamline processes but also unlock human potential at an unprecedented scale.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 font-body">
              We combine deep expertise in artificial intelligence, machine learning, and human resources to deliver solutions that drive measurable business outcomes while creating better, more equitable experiences for both employers and candidates.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3 font-headline text-lg">Our Strategic Approach</h4>
              <div className="space-y-3 font-body">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive needs assessment and strategic planning sessions.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom AI model development, fine-tuning, and seamless implementation.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Continuous optimization and performance monitoring to ensure ROI.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing strategic support and guidance to adapt to market changes.</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-headline">Our Core Values</h3>
            <div className="space-y-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2 font-headline text-lg">{value.title}</h4>
                  <p className="text-gray-600 font-body">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
