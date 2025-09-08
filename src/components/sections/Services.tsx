import { ServiceIcon } from '../ui/ServiceIcon';

const Services = () => {
  const services = [
    {
      icon: <ServiceIcon variant="consulting" className="w-6 h-6" />,
      title: "IT Services",
      description: "IT Services provide global organizations competitive edge by leveraging the right mix of technology, people, and processes.",
    },
    {
      icon: <ServiceIcon variant="analytics" className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "The survival of organizations depends on the availability, reliability, timeliness, accessibility and security.",
    },
    {
      icon: <ServiceIcon variant="strategic" className="w-6 h-6" />,
      title: "Usability Consulting",
      description: "We provide design and usability consulting services that help organizations to ensure that their products, applications, services and web sites work well in the hands of users.",
    },
    {
      icon: <ServiceIcon variant="genai" className="w-6 h-6" />,
      title: "Windows Azure",
      description: "A Microsoft Cloud Computing Platform offering to help its customers realize the benefits of cloud computing. Azure provides a range of functionality to build powerful applications.",
    },
    {
      icon: <ServiceIcon variant="acquisition" className="w-6 h-6" />,
      title: "IT Infrastructure & Mgnt",
      description: "IT Organizations are increasingly being asked to provide improved levels of Service to the business.",
    },
    {
      icon: <ServiceIcon variant="training" className="w-6 h-6" />,
      title: "Embedded Systems",
      description: "We provide innovative product design services including complete system design, software and hardware implementation.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 border hover:border-primary/50 group transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-headline">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
