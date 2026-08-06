import React, { useState } from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { techStack } from '../../data/techStack';
import { fadeUp, staggerContainer } from '../../utils/animations';

const categories = ['All', ...new Set(techStack.map((t) => t.category))];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStack =
    activeCategory === 'All'
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section className="skills section" id="skills" aria-label="Tech stack">
      <ScrollReveal>
        <SectionHeading
          label="Tech Stack"
          title="Technologies I work with"
          description="A toolkit built through academic training, internships, certifications, and hands-on project work."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="skills__filters" role="tablist" aria-label="Filter technologies by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`skills__filter-btn ${
                activeCategory === category ? 'skills__filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <motion.div
        className="skills__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        key={activeCategory}
      >
        {filteredStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="skills__card"
            variants={fadeUp}
            whileHover={{ y: -4 }}
          >
            <div className="skills__card-header">
              <h3 className="skills__card-name">{tech.name}</h3>
              <span className="skills__card-category">{tech.category}</span>
            </div>
            <div className="skills__bar-track">
              <motion.div
                className="skills__bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="skills__level">{tech.level}% proficiency</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
