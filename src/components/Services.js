import React from 'react';
import './Services.css';
import { openWhatsApp } from '../utils/openWhatsApp';
import useScrollReveal from '../hooks/useScrollReveal';

// Imágenes locales descargadas desde Figma
const imgSorteo = "/images/service-sorteo.webp";
const imgRetrabajo = "/images/service-retrabajo.jpg";
const imgTraspaleo = "/images/service-traspaleo.webp";
const imgKits = "/images/service-kits.webp";

function Services() {
  const revealRef = useScrollReveal();

  return (
    <section className="services" id="servicios" ref={revealRef}>
      <div className="services-container">
        <div className="services-header reveal-fade-up">
          <h2 className="services-title">Servicios Especializados</h2>
          <p className="services-subtitle">
            Los problemas de calidad sin atención inmediata se multiplican. Actuar rápido no es opcional
            — es la diferencia entre un incidente y una crisis.
          </p>
        </div>

        <div className="services-grid">
          {/* Sorteo de material — row 1: slide from left */}
          <div className="service-row reveal-slide-left stagger-1">
            <div className="service-card blue">
              <h3 className="service-title">Sorteo de material</h3>
              <p className="service-description">
                Separación exhaustiva de piezas conformes y no conformes bajo estándares de calidad.
              </p>
              <ul className="service-tags">
                <li>Inspección visual</li>
                <li>Inspección dimensional</li>
                <li>CS1 y CS2</li>
              </ul>
              <a href="#contacto" className="service-cta">
                <span>Solicitar cotización</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="service-image">
              <img src={imgSorteo} alt="Sorteo de material" />
            </div>
          </div>

          {/* Retrabajo industrial — row 2: slide from right */}
          <div className="service-row reveal-slide-right stagger-2">
            <div className="service-image img-top">
              <img src={imgRetrabajo} alt="Retrabajo industrial" />
            </div>
            <div className="service-card green">
              <h3 className="service-title">Retrabajo industrial</h3>
              <p className="service-description">
                Recuperación de material defectuoso mediante procesos técnicos certificados.
              </p>
              <a href="#contacto" className="service-cta">
                <span>Solicitar cotización</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>

          {/* Traspaleo — row 3: slide from left */}
          <div className="service-row reveal-slide-left stagger-3">
            <div className="service-card blue">
              <h3 className="service-title">Traspaleo</h3>
              <p className="service-description">
                Maniobras de carga y descarga eficientes para optimizar tu logística interna.
              </p>
              <a href="#contacto" className="service-cta">
                <span>Solicitar cotización</span>
                <span className="arrow">→</span>
              </a>
            </div>
            <div className="service-image">
              <img src={imgTraspaleo} alt="Traspaleo" />
            </div>
          </div>

          {/* Armado de kits promocionales — row 4: slide from right */}
          <div className="service-row reveal-slide-right stagger-4">
            <div className="service-image">
              <img src={imgKits} alt="Armado de kits promocionales" />
            </div>
            <div className="service-card green">
              <h3 className="service-title">Armado de kits promocionales</h3>
              <p className="service-description">
                Ensamble y empaque de kits promocionales con personal capacitado y control de calidad.
              </p>
              <a href="#contacto" className="service-cta">
                <span>Solicitar cotización</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
