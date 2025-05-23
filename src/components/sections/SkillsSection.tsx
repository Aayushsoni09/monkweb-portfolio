import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import Section from '../ui/Section';
import { slideUp, staggerChildren } from '../../utils/animation';
import Divider from '../ui/Divider';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, typeof skills>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  return (
    <Section id="skills" title="Skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerChildren(0.1)}
        className="flex flex-col items-center text-center mb-12"
      >
        <motion.p
          variants={slideUp()}
          className="text-xl text-neutral-900 max-w-2xl mb-3"
        >
          I have consistently pursued hands-on experience in multiple domains,
          fueled by a deep and ongoing curiosity.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200"
          >
            <h3 className="text-lg font-medium text-neutral-900 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill.id}
                  className="bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-800"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <Divider className="mt-20" />
    </Section>
  );
};

export default SkillsSection;
