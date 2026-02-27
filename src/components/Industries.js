import React, { useState } from 'react';
import './Industries.css';
import useScrollReveal from '../hooks/useScrollReveal';

// Imagen de fondo de la sección de industrias
const imgBackground = "/images/industries-automotriz.webp";

const industries = [
  { name: 'ALIMENTICIA', active: true },
  { name: 'AUTOMOTRIZ', active: true },
  { name: 'ACERERA', active: true }
];

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState('AUTOMOTRIZ');
  const revealRef = useScrollReveal();

  return (
    <section className="industries" id="industrias" ref={revealRef}>
      <div className="industries-background">
        <img src={imgBackground} alt="" className="industries-bg-image" />
        <div className="industries-overlay"></div>
      </div>
      <div className="industries-container">
        <div className="industries-content reveal-fade-in">
          <h2 className="industries-title">
            INDUSTRIAS QUE<br />
            ATENDEMOS
          </h2>
          <p className="industries-description">
            Trabajamos con empresas de más de <strong>300 empleados</strong> que requieren
            proveedores certificados y confiables en la región.
          </p>
        </div>

        <div className="industries-list">
          {industries.map((industry, index) => (
            <button
              key={index}
              className={`industry-item ${industry.active ? 'active' : ''} reveal-slide-left stagger-${index + 1}`}
              onClick={() => setActiveIndustry(industry.name)}
            >
              <span>{industry.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
