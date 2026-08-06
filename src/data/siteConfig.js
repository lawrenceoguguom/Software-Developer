/**
 * Central site configuration.
 * Update social links, contact info, and resume path here —
 * no need to hunt through individual components.
 */

import resumePdf from '../assets/Oguguom Lawrence_Resume.pdf';

export const siteConfig = {
  name: 'Oguguom Lawrence',
  firstName: 'Lawrence',
  initials: 'OL',
  location: 'Ibadan, Oyo State, Nigeria',
  email: 'lawrenceoguguom@gmail.com',
  resume: resumePdf,

  /* Update your GitHub URL here when ready */
  github: '',

  social: {
    linkedin: 'https://www.linkedin.com/in/lawrence-oguguom',
    twitter: 'https://x.com/lawrence94',
    instagram: 'https://www.instagram.com/wrence94',
  },

  /* Developer roles shown in the hero typewriter */
  roles: [
    'Software Developer',
    'Full Stack Developer',
    'React Developer',
    'JavaScript Developer',
    'Problem Solver',
    'Linux Enthusiast',
  ],

  /* Navigation — add or remove items as sections are built */
  navLinks: [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Tech Stack', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Certifications', to: 'certificate' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Contact', to: 'contact' },
  ],
};
