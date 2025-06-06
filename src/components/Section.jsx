import React from 'react';
import './Section.css';
function Section({ title, children, background }) {
  return (
    <section className="section" style={{ backgroundColor: background || 'black' }}>
      <div className="section-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
export default Section;