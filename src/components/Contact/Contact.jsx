import React, { useRef, useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { siteConfig } from '../../data/siteConfig';
import { fadeUp } from '../../utils/animations';

/*
 * EmailJS Configuration
 * Replace these placeholders with your own credentials from https://www.emailjs.com/
 *
 * SERVICE_ID   — your EmailJS service ID   (e.g. 'service_xxxxxxx')
 * TEMPLATE_ID  — your EmailJS template ID  (e.g. 'template_xxxxxxx')
 * PUBLIC_KEY   — your EmailJS public key    (e.g. 'your_public_key_here')
 */
const EMAILJS_SERVICE_ID = 'service_7ho08bf';
const EMAILJS_TEMPLATE_ID = 'template_qyf21zf';
const EMAILJS_PUBLIC_KEY = '3yV6Lr9hBYsyXX_Oz';

const isEmailJsConfigured =
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const maxChars = 500;
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const form = useRef(null);

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=Hiring Inquiry&body=Hello Lawrence,`;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isEmailJsConfigured) {
      setFormStatus(
        'Email service is not configured yet. Please use the email link or configure EmailJS credentials in Contact.jsx.'
      );
      return;
    }

    setLoading(true);
    setFormStatus('');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormStatus('Message sent successfully!');
        form.current.reset();
        setMessage('');
        setLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setFormStatus('Something went wrong. Please try again or email directly.');
        setLoading(false);
      });
  };

  return (
    <section className="contact section" id="contact" aria-label="Contact">
      <ScrollReveal>
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
        />
      </ScrollReveal>

      <div className="contact__layout">
        <ScrollReveal direction="left" className="contact__info">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="contact__intro">
              I&apos;m open to software development roles, freelance projects, and
              collaborations. Whether you need a full-stack developer or someone
              who understands both code and systems. Let&apos;s connect.
            </p>

            <ul className="contact__details">
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>

            <div className="contact__social">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="contact__social-link"
              >
                <FaLinkedin />
              </a>

              {siteConfig.github ? (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="contact__social-link"
                >
                  <FaGithub />
                </a>
              ) : (
                <span
                  className="contact__social-link contact__social-link--disabled"
                  title="GitHub link coming soon"
                  aria-label="GitHub profile coming soon"
                >
                  <FaGithub />
                </span>
              )}

              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
                className="contact__social-link"
              >
                <FaTwitter />
              </a>
            </div>

            <div className="contact__quick-actions">
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-btn"
              >
                <AiOutlineDownload aria-hidden="true" /> Download Resume
              </a>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-btn contact__action-btn--outline"
              >
                <FaEnvelope aria-hidden="true" /> Send Email
              </a>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="contact__form-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
            aria-label="Contact form"
          >
            <div className="contact__field">
              <label htmlFor="from_name">Your Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="from_email">Your Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                value={message}
                onChange={(e) => {
                  if (e.target.value.length <= maxChars) {
                    setMessage(e.target.value);
                  }
                }}
                required
              />
              <span className="contact__char-count">
                {message.length}/{maxChars}
              </span>
            </div>

            {!isEmailJsConfigured && (
              <p className="contact__config-notice">
                EmailJS is not configured. Add your credentials at the top of
                Contact.jsx to enable form submission.
              </p>
            )}

            {formStatus && (
              <p
                className={`contact__status ${
                  formStatus.includes('successfully')
                    ? 'contact__status--success'
                    : 'contact__status--error'
                }`}
                role="status"
              >
                {formStatus}
              </p>
            )}

            <button
              type="submit"
              className="contact__submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
