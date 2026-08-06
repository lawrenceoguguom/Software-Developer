import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowUp, FaHeart } from 'react-icons/fa';
import { siteConfig } from '../../data/siteConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <motion.div
          className="footer__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="footer__brand">
            <span className="footer__initials">{siteConfig.initials}</span>
            {siteConfig.name}
          </p>

          <p className="footer__tagline">
            Software Developer · Full Stack · React
          </p>

          <p className="footer__copyright">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>

        </motion.div>

        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-80}
          className="footer__back-top"
          aria-label="Back to top"
        >
          <FaArrowUp aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
