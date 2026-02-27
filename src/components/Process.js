import React from 'react';
import './Process.css';
import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Recibimos tu Solicitud',
    subtitle: 'Respuesta en menos de 60 minutos'
  },
  {
    number: '02',
    title: 'Evaluamos Requerimiento',
    subtitle: 'Visita técnica a planta si es necesario.'
  },
  {
    number: '03',
    title: 'Asignamos equipo certificado',
    subtitle: 'Personal calificado y listo.'
  },
  {
    number: '04',
    title: 'Iniciamos operación',
    subtitle: 'Despliegue inmediato 24/7.'
  },
  {
    number: '05',
    title: 'Medimos productividad',
    subtitle: 'Reportes hora x hora.'
  }
];

const certifications = [
  { label: 'REGISTRO', value: 'REPSE', color: 'green', logo: '/images/logo-repse.png', wide: true },
  { label: 'ESTATUS', value: 'IMSS', color: 'blue', logo: '/images/logo-imss.svg', wide: false },
  { label: 'OPINIÓN', value: 'SAT POSITIVA', color: 'gray', logo: '/images/logo-sat.svg', wide: true }
];

function Process() {
  const revealRef = useScrollReveal();

  return (
    <section className="process" id="proceso" ref={revealRef}>
      <div className="process-container">
        <div className="process-header reveal-fade-up">
          <h2 className="process-title">Así Trabajamos Contigo</h2>
        </div>

        <div className="process-timeline">
          <div className="timeline-line"></div>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className={`step-item reveal-fade-up stagger-${index + 1}`}>
                <div className="step-circle">
                  <span className="step-number">{step.number}</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-subtitle">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="compliance-section reveal-fade-up">
          <div className="compliance-content">
            <h3 className="compliance-title">CUMPLIMIENTO LEGAL TOTAL</h3>
            <p className="compliance-description">
              Cumplimos con todos los requisitos para ser proveedor industrial estratégico de primer nivel.
            </p>
          </div>
          <div className="compliance-badges">
            {certifications.map((cert, index) => (
              <div key={index} className={`cert-badge cert-${cert.color} reveal-scale stagger-${index + 1}`}>
                <img src={cert.logo} alt={cert.value} className={`cert-logo${cert.wide ? ' cert-logo-wide' : ''}`} />
                <span className="cert-label">{cert.label}</span>
                <span className="cert-value">{cert.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
