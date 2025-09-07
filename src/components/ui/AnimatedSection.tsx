// src/components/ui/AnimatedSection.tsx
'use client';
import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

const AnimatedSection = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
