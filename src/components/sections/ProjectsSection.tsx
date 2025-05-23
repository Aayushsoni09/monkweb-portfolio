import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import Section from '../ui/Section';
import { staggerChildren, fadeIn } from '../../utils/animation';
import Divider from '../ui/Divider';

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="AWS Projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren(0.1)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn(0, 0.5)}
            className="group relative overflow-hidden rounded-2xl bg-card-gradient p-[1px] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative h-full bg-white rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-neutral-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-neutral-100 px-2 py-1 rounded-md text-xs text-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-accent-600 hover:text-accent-700 font-medium transition-colors inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Divider className="mt-20" />
    </Section>
  );
};

export default ProjectsSection;
