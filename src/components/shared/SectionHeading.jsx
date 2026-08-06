import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({ label, title, description }) => {
  return (
    <div className="section-heading">
      {label && <span className="section-heading__label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
