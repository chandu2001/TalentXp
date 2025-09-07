'use client';
import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  breadcrumb: string;
  description: string;
};

const PageHeader = ({ title, breadcrumb, description }: PageHeaderProps) => {
  return (
    <section className="py-20 md:py-28 bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-primary font-semibold mb-2 font-body">{breadcrumb}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-headline">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
