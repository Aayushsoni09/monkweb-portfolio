import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Divider from '../ui/Divider';

const LifeUpdateSection: React.FC = () => {
  return (
    <Section id="life-update" title="Life Update">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-2xl">
          <div className="bg-white rounded-2xl p-8">
            <Award size={48} className="mx-auto mb-6 text-blue-500" />
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Preparing for AWS Solutions Architect Associate
            </h3>
            <p className="text-neutral-700 text-lg">
              Currently dedicating my time to mastering AWS services and best practices. 
              Follow my certification journey as I prepare to become an AWS Certified Solutions Architect Associate.
              Stay tuned for insights and learning resources!
            </p>
          </div>
        </div>
      </motion.div>
      <Divider className="mt-20" />
    </Section>
  );
};

export default LifeUpdateSection;