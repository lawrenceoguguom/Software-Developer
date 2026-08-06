import React, { useState, useMemo } from 'react';
import './Project.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaTimes } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import ScrollReveal from '../shared/ScrollReveal';
import { projects } from '../../data/projects';
import { fadeUp, staggerContainer } from '../../utils/animations';

const Project = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        activeFilter === 'All' ||
        project.technologies.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="project section" id="projects" aria-label="Projects">
      <ScrollReveal>
        <SectionHeading
          label="Projects"
          title="Things I've built"
          description="A selection of projects showcasing my full-stack development skills. Replace placeholders with your real projects in projects.js."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="project__controls">
          <input
            type="search"
            className="project__search"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />

          <div className="project__filters" role="tablist" aria-label="Filter projects by technology">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                type="button"
                role="tab"
                aria-selected={activeFilter === tech}
                className={`project__filter-btn ${
                  activeFilter === tech ? 'project__filter-btn--active' : ''
                }`}
                onClick={() => setActiveFilter(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <motion.div
        className="project__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        key={`${activeFilter}-${searchQuery}`}
      >
        {filteredProjects.length === 0 ? (
          <p className="project__empty">No projects match your search.</p>
        ) : (
          filteredProjects.map((item) => (
            <motion.article
              key={item.id}
              className="project__card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <div className="project__image-wrap">
                <img
                  src={item.image}
                  alt={`Preview of ${item.title}`}
                  className="project__image"
                  loading="lazy"
                />
                {item.featured && (
                  <span className="project__badge">
                    <FaStar aria-hidden="true" /> Featured
                  </span>
                )}
              </div>

              <div className="project__body">
                <h3 className="project__title">{item.title}</h3>
                <p className="project__description">{item.description}</p>

                <div className="project__tech-list">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="project__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project__actions">
                  {item.githubUrl ? (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__btn project__btn--outline"
                      aria-label={`View ${item.title} on GitHub`}
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  ) : (
                    <span className="project__btn project__btn--disabled">
                      <FaGithub aria-hidden="true" /> GitHub
                    </span>
                  )}

                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__btn project__btn--primary"
                      aria-label={`View live demo of ${item.title}`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                    </a>
                  ) : (
                    <span className="project__btn project__btn--disabled">
                      <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                    </span>
                  )}

                  <button
                    type="button"
                    className="project__btn project__btn--ghost"
                    onClick={() => openModal(item)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.article>
          ))
        )}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              className="project__modal-close"
              onClick={closeModal}
              aria-label="Close project details"
            >
              <FaTimes />
            </button>

            <img
              src={selectedProject.image}
              alt={`Preview of ${selectedProject.title}`}
              className="project__modal-image"
            />

            <h3 id="project-modal-title" className="project__modal-title">
              {selectedProject.title}
            </h3>
            <p className="project__modal-description">
              {selectedProject.description}
            </p>

            <div className="project__tech-list">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="project__tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project__actions">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__btn project__btn--outline"
                >
                  <FaGithub aria-hidden="true" /> GitHub
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__btn project__btn--primary"
                >
                  <FaExternalLinkAlt aria-hidden="true" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
