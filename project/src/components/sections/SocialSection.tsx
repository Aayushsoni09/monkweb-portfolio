import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import Divider from '../ui/Divider';

const SocialSection: React.FC = () => {
  return (
    <Section id="social" title="Follow My Journey">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Instagram Preview */}
        <motion.a
          href="https://www.instagram.com/monkweb/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src="https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/insta.png"
            alt="Instagram Profile Preview"
            className="w-full h-[600px] object-cover"
          />
        </motion.a>

        {/* YouTube Preview */}
        <motion.a
          href="https://www.youtube.com/@monkweb"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src="https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/youtube.png"
            alt="YouTube Channel Preview"
            className="w-full h-[600px] object-cover"
          />
        </motion.a>

        {/* Medium Preview */}
        <motion.a
          href="https://medium.com/@monkweb9"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="block bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src="https://s3.ap-south-1.amazonaws.com/monkweb.tech-bucket/medium.png"
            alt="Medium Blog Preview"
            className="w-full h-[600px] object-cover"
          />
        </motion.a>
      </div>
      <Divider className="mt-20" />
    </Section>
  );
};

export default SocialSection;
