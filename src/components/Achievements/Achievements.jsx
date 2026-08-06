import React from 'react';
import './Achievements.css';
import { motion } from 'framer-motion';
import { FaTrophy, FaGlobe, FaFlag, FaGraduationCap } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { achievements } from '../../data/achievements';
import { fadeUp, staggerContainer } from '../../utils/animations';

const iconMap = {
  'global-finals': FaTrophy,
  'national-winner': FaFlag,
  'regional-winner': FaGlobe,
  'cs-graduate': FaGraduationCap,
};

const Achievements = () => {
  const featured = achievements.find((a) => a.highlight);
  const others = achievements.filter((a) => !a.highlight);

  return (
    <section className="achievements section" id="achievements" aria-label="Achievements">
      <ScrollReveal>
        <SectionHeading
          label="Achievements"
          title="Milestones that define my journey"
          description="From academic excellence to international competition — results earned through dedication and teamwork."
        />
      </ScrollReveal>

      {featured && (
        <ScrollReveal delay={0.1}>
          <motion.div
            className="achievements__featured"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="achievements__featured-glow" aria-hidden="true" />
            <FaTrophy className="achievements__featured-icon" aria-hidden="true" />
            <div className="achievements__featured-content">
              <span className="achievements__featured-label">Highlight Achievement</span>
              <h3 className="achievements__featured-title">{featured.title}</h3>
              <p className="achievements__featured-subtitle">{featured.subtitle}</p>
              <p className="achievements__featured-text">{featured.description}</p>
            </div>
          </motion.div>
        </ScrollReveal>
      )}

      <motion.div
        className="achievements__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {others.map((item) => {
          const Icon = iconMap[item.id] || FaTrophy;

          return (
            <motion.article
              key={item.id}
              className="achievements__card"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="achievements__card-icon">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="achievements__card-title">{item.title}</h3>
              <p className="achievements__card-subtitle">{item.subtitle}</p>
              <p className="achievements__card-text">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Achievements;
