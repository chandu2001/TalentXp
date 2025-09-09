
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
  <div className="bg-card p-8 rounded-lg border transform transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-2">
     <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-3 font-headline">
      {title}
    </h3>
    <p className="text-muted-foreground leading-relaxed font-body">
      {children}
    </p>
  </div>
);

export default FeatureCard;
