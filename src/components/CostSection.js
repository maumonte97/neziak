import React from 'react';
import './CostSection.css';
import { openWhatsApp } from '../utils/openWhatsApp';
import useScrollReveal from '../hooks/useScrollReveal';

const costCards = [
  {
    icon: '/images/icon-paro.svg',
    title: 'Paro de línea',
    description: 'Cada minuto sin producción significa pérdidas directas en costos fijos, mano de obra y retrasos de entrega que escalan rápidamente.',
    cost: 'Impacto crítico inmediato'
  },
  {
    icon: '/images/icon-penalizaciones.svg',
    title: 'Penalizaciones',
    description: 'Los acuerdos con OEMs y Tier 1 incluyen cláusulas de penalización severas por incumplimiento de entregas o calidad.',
    cost: 'Cláusulas severas de incumplimiento'
  },
  {
    icon: '/images/icon-scrap.svg',
    title: 'Scrap innecesario',
    description: 'Sin contención inmediata, el material defectuoso se mezcla con el bueno. El costo de scrap no detectado puede multiplicarse.',
    cost: 'Pérdida directa de material'
  },
  {
    icon: '/images/icon-contratos.svg',
    title: 'Pérdida de contratos',
    description: 'Un fallo crítico sin respuesta rápida puede costar la relación comercial con tu cliente por años, o de forma permanente.',
    cost: 'Riesgo de negocio total'
  }
];

function CostSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="cost-section" ref={revealRef}>
      <div className="cost-container">
        <div className="cost-header reveal-fade-up">
          <div className="cost-header-left">
            <h2 className="cost-title">
              Cada hora detenida<br />
              puede costar miles.
            </h2>
          </div>
          <div className="cost-divider"></div>
          <div className="cost-header-right">
            <p className="cost-description">
              Los problemas de calidad sin atención inmediata se multiplican.
              Actuar rápido no es opcional — es la diferencia entre un incidente y una crisis.
            </p>
          </div>
        </div>

        <div className="cost-cards">
          {costCards.map((card, index) => (
            <div key={index} className={`cost-card reveal-fade-up stagger-${index + 1}`}>
              <div className="card-icon-wrapper">
                <div className="card-icon-circle">
                  <img src={card.icon} alt="" className="card-icon-svg" />
                </div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <p className="card-cost">{card.cost}</p>
            </div>
          ))}
        </div>

        <div className="cost-cta reveal-fade-up">
          <a href="#contacto" className="btn-resolve">Resolver Ahora →</a>
          <p className="cta-note">Respuesta en menos de 4 horas. Sin Burocracia.</p>
        </div>
      </div>
    </section>
  );
}

export default CostSection;
