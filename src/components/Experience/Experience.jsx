import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { experience } from '../../data/experience';
import { fadeUp, staggerContainer } from '../../utils/animations';

const typeLabels = {
  work: 'Work',
  volunteer: 'Volunteering',
  achievement: 'Achievement',
};

const Experience = () => {
  return (
    <section className="experience section" id="experience" aria-label="Experience">
      <ScrollReveal>
        <SectionHeading
          label="Experience"
          title="Where I've grown as a developer"
          description="Internships, volunteering, and competitive experience that shaped my technical journey."
        />
      </ScrollReveal>

      <motion.div
        className="experience__timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="experience__line" aria-hidden="true" />

        {experience.map((item, index) => (
          <motion.article
            key={item.id}
            className={`experience__item ${
              index % 2 === 0 ? 'experience__item--left' : 'experience__item--right'
            }`}
            variants={fadeUp}
          >
            <div className="experience__dot" aria-hidden="true" />

            <div className="experience__card">
              <div className="experience__card-header">
                <span className={`experience__type experience__type--${item.type}`}>
                  {typeLabels[item.type]}
                </span>
                <span className="experience__period">{item.period}</span>
              </div>

              <h3 className="experience__title">{item.title}</h3>
              <p className="experience__company">{item.company}</p>
              <p className="experience__description">{item.description}</p>

              <ul className="experience__highlights">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
