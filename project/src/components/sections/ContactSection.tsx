import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Let's Connect">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h3 className="text-xl font-medium text-neutral-900 mb-4">
              Schedule an interview
            </h3>
            <p className="text-neutral-700 mb-6">
              Interested in bringing me on board? Let’s connect and discuss how
              I can contribute to your team and goals.
            </p>
            <a
              href="https://calendar.app.google/SFch7zTkiP62JEnw5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="inline-flex items-center">
                <Calendar size={18} className="mr-2" />
                Book a Time Now
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-xl font-medium text-neutral-900 mb-4">
              Feedback
            </h3>
            <p className="text-neutral-700 mb-6">
              If I’m not the right fit at the moment, I’d appreciate any
              feedback on areas where I can improve.
            </p>
            <form action="https://formspree.io/f/xnngblle" method='POST'>
              <div className="mb-4">
                <textarea
                  name="feedback"
                  rows={4}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-accent-500 focus:ring focus:ring-accent-500/20 focus:outline-none"
                  placeholder="Your feedback..."
                  required
                />
              </div>
              <Button type="submit">Submit Feedback</Button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection;
