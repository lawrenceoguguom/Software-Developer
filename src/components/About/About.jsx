import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import { motion, useInView } from 'framer-motion';
import { FaAward, FaCode, FaGraduationCap, FaServer } from 'react-icons/fa';
import aboutImage from '../../assets/lawrence.jpeg';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { fadeUp, staggerContainer } from '../../utils/animations';

const stats = [
  { label: 'Technologies', value: 17, icon: FaCode },
  { label: 'Internships', value: 4, icon: FaServer },
  { label: 'Certifications', value: 6, icon: FaGraduationCap },
  { label: 'Global Awards', value: 3, icon: FaAward },
];

const highlights = [
  {
    title: 'Huawei ICT Competition',
    text: 'Grand Prize winner at the 2024 Global Finals as part of Team Nigeria.',
  },
  {
    title: 'Full Stack Developer',
    text: 'Building end-to-end web applications with React, Node.js, and MySQL.',
  },
  {
    title: 'Systems & Cloud',
    text: 'Experienced with Linux, Azure, networking fundamentals, and troubleshooting.',
  },
];

function AnimatedCounter({ target, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / target), 30);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}</span>;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      className="about__stat"
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <div className="about__stat-icon">
        <Icon aria-hidden="true" />
      </div>
      <p className="about__stat-value">
        <AnimatedCounter target={stat.value} inView={inView} />
        {stat.label === 'Technologies' ? '+' : ''}
      </p>
      <p className="about__stat-label">{stat.label}</p>
    </motion.div>
  );
}

const About = () => {
  return (
    <section className="about section" id="about" aria-label="About me">
      <ScrollReveal>
        <SectionHeading
          label="About Me"
          title="Software Developer with a passion for building"
          description="Computer Science graduate focused on engineering scalable, dependable software across the full stack."
        />
      </ScrollReveal>

      <div className="about__layout">
        <ScrollReveal direction="left" className="about__image-col">
          <div className="about__image-frame">
            <img
              src={aboutImage}
              alt="Oguguom Lawrence working as a software developer"
              className="about__image"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <motion.div
          className="about__content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.p className="about__text" variants={fadeUp}>
            I&apos;m a Computer Science graduate and software developer based in
            Ibadan, Nigeria. I build modern web applications with React,
            JavaScript, Node.js, and MySQL. I care about writing clean,
            maintainable code that solves real problems.
          </motion.p>

          <motion.p className="about__text" variants={fadeUp}>
            Through internships at CoopVest, Huawei, Flux Creative Technologies, and
            iTeMs UI, I&apos;ve gained hands-on experience in frontend and
            full-stack development, while also developing strong expertise
            in Linux systems, Windows administration, cloud technologies,
            and networking fundamentals.
          </motion.p>

          <motion.p className="about__text" variants={fadeUp}>
            A defining milestone in my journey was being part of the Nigerian team
            that won the Grand Prize at the Huawei ICT Competition 2024 Global
            Finals in China. An experience that sharpened my technical skills and
            teamwork under pressure.
          </motion.p>

          <motion.div className="about__highlights" variants={fadeUp}>
            {highlights.map((item) => (
              <div key={item.title} className="about__highlight-card">
                <h3 className="about__highlight-title">{item.title}</h3>
                <p className="about__highlight-text">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="about__stats">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
