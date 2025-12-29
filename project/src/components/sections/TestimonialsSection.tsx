import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import Section from '../ui/Section';
import { staggerChildren, fadeIn } from '../../utils/animation';
import Divider from '../ui/Divider';

const TestimonialsSection: React.FC = () => {
  return (
    <Section id="testimonials" title="Testimonials">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xl text-neutral-700 max-w-3xl mx-auto mb-12"
      >
        Although I haven’t yet held a formal corporate position, I’ve had the
        opportunity to collaborate with clients and industry professionals on
        real-world projects
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.1)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeIn(0, 0.5)}
            className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-neutral-200"
          >
            <div className="mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent-400"
              >
                <path
                  d="M10.667 13.333H5.33366V8.00001H10.667V13.333ZM26.667 13.333H21.3337V8.00001H26.667V13.333ZM10.667 29.3333H5.33366V24H10.667V29.3333ZM26.667 29.3333H21.3337V24H26.667V29.3333ZM10.667 21.3333H5.33366V16H10.667V21.3333ZM26.667 21.3333H21.3337V16H26.667V21.3333Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="text-neutral-700 mb-6 flex-grow italic">
              {testimonial.quote}
            </p>
            <div className="flex items-center mt-auto">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <a
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-purple-600 hover:underline"
                >
                  {testimonial.name}
                </a>
                <p className="text-sm text-neutral-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Divider className="mt-20" />
    </Section>
  );
};

export default TestimonialsSection;
