import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from './Container';
import { fadeIn } from '../../utils/animation';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className = '',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn(0, 0.6)}
          className="w-full"
        >
          {(title || subtitle) && (
            <div className="mb-12 text-center">
              {title && (
                <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="max-w-2xl mx-auto text-lg text-neutral-600">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
};

export default Section;