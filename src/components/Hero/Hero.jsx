import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaDownload,
  FaArrowRight,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import profileImage from '../../assets/lawrence.jpeg';
import { siteConfig } from '../../data/siteConfig';
import { fadeUp, staggerContainer, slideInRight } from '../../utils/animations';

const Hero = () => {
  const githubUrl = siteConfig.github;

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero__bg">
        <div className="hero__gradient hero__gradient--one" />
        <div className="hero__gradient hero__gradient--two" />
        <div className="hero__grid" aria-hidden="true" />
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__greeting" variants={fadeUp}>
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className="hero__name" variants={fadeUp}>
            {siteConfig.name}
          </motion.h1>

          <motion.div className="hero__role" variants={fadeUp}>
            <span className="hero__role-prefix">A </span>
            <span className="hero__role-text">
              <Typewriter
                words={siteConfig.roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          <motion.p className="hero__description" variants={fadeUp}>
            Computer Science graduate and software developer building modern web
            applications with React, Node.js, and cloud technologies. Passionate
            about clean code, Linux systems, and solving real-world problems.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
              aria-label="Download resume"
            >
              <FaDownload aria-hidden="true" />
              Download Resume
            </a>

            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="hero__btn hero__btn--secondary"
              aria-label="View projects section"
            >
              View Projects
              <FaArrowRight aria-hidden="true" />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="hero__btn hero__btn--ghost"
              aria-label="Go to contact section"
            >
              <HiOutlineMail aria-hidden="true" />
              Contact Me
            </Link>
          </motion.div>

          <motion.div className="hero__social" variants={fadeUp}>
            <span className="hero__social-label">Connect with me</span>
            <div className="hero__social-links">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hero__social-link"
              >
                <FaLinkedin />
              </a>

              {siteConfig.social.github ? (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="hero__social-link"
                >
                  <FaGithub />
                </a>
              ) : (
                <span
                  className="hero__social-link hero__social-link--disabled"
                  aria-label="GitHub profile coming soon"
                  title="GitHub link coming soon"
                >
                  <FaGithub />
                </span>
              )}

              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="hero__social-link"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__image-glow" aria-hidden="true" />
          <motion.div
            className="hero__image-ring"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={profileImage}
              alt="Portrait of Oguguom Lawrence, Software Developer"
              className="hero__image"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
