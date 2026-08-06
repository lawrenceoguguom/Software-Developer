import React from 'react';
import './Certificate.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { certifications } from '../../data/certifications';
import { fadeUp, staggerContainer } from '../../utils/animations';

const Certificate = () => {
  return (
    <section className="certificates section" id="certificate" aria-label="Certifications">
      <ScrollReveal>
        <SectionHeading
          label="Certifications"
          title="Continuous learning & credentials"
          description="Professional certifications that validate my skills in development, cloud, and systems."
        />
      </ScrollReveal>

      <motion.div
        className="certificates__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.id}
            className="certificates__card"
            variants={fadeUp}
            whileHover={{ y: -4 }}
          >
            <div className="certificates__image-wrap">
              <img
                src={cert.image}
                alt={`${cert.title} certification`}
                className="certificates__image"
                loading="lazy"
              />
            </div>

            <div className="certificates__body">
              <span className="certificates__issuer">{cert.issuer}</span>
              <h3 className="certificates__title">{cert.title}</h3>
              <p className="certificates__description">{cert.description}</p>

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificates__link"
                >
                  View Credential <FaExternalLinkAlt aria-hidden="true" />
                </a>
              ) : (
                <span className="certificates__link certificates__link--disabled">
                  Credential link coming soon
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificate;
