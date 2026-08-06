/**
 * Project data — edit this file to add or update projects.
 * No JSX changes needed when adding new entries.
 */

import placeholderImage from '../assets/law3.png';

export const projects = [
  {
    id: 'project-one',
    title: 'E-Commerce Platform',
    description:
      'A full-stack web application with user authentication, product catalog, and secure checkout flow.',
    image: placeholderImage,
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Prisma'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Task Management App',
    description:
      'A responsive productivity tool for organizing tasks with real-time updates and team collaboration.',
    image: placeholderImage,
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'project-three',
    title: 'API Dashboard',
    description:
      'An admin dashboard for monitoring API endpoints, usage metrics, and system health in real time.',
    image: placeholderImage,
    technologies: ['React', 'Node.js', 'Express', 'Supabase'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
  {
    id: 'project-four',
    title: 'Portfolio Website',
    description:
      'A modern, responsive developer portfolio showcasing projects, skills, and professional experience.',
    image: placeholderImage,
    technologies: ['React', 'Vite', 'Framer Motion', 'CSS'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
];
