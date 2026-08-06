import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { services } from '../../data/services';
import { fadeUp, staggerContainer } from '../../utils/animations';

const Services = () => {
  return (
    <section className="services section" id="services" aria-label="Services">
      <ScrollReveal>
        <SectionHeading
          label="Services"
          title="What I can help you build"
          description="From frontend interfaces to backend APIs and system administration — focused, reliable delivery."
        />
      </ScrollReveal>

      <motion.div
        className="services__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.id}
              className="services__card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <div className="services__icon">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__description">{service.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
