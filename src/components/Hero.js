import React, { useState } from 'react';
import './Hero.css';
import { openWhatsApp } from '../utils/openWhatsApp';

const neziakLogo = "/images/logo-neziak.png";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero">
      {/* Blue gradient background */}
      <div className="hero-bg-gradient"></div>
      {/* Dot pattern overlay */}
      <div className="hero-dots-pattern">
        <img src="/images/hero-dots-pattern.webp" alt="" />
      </div>

      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <img src="/images/icon-phone.svg" alt="" className="top-bar-icon" />
              <a href="tel:+528183960949">81 8396 0949</a>
            </div>
            <div className="top-bar-item">
              <img src="/images/icon-email.svg" alt="" className="top-bar-icon" />
              <a href="mailto:ventas@neziak.com.mx">ventas@neziak.com.mx</a>
            </div>
          </div>
          <div className="top-bar-right">
            <span>Atención 24/7 en Nuevo León</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="hero-nav">
        <div className="logo">
          <img src={neziakLogo} alt="Neziak" className="logo-image" />
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <a href="#servicios" className="nav-link" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#proceso" className="nav-link" onClick={() => setMenuOpen(false)}>Proceso</a>
          <a href="#industrias" className="nav-link" onClick={() => setMenuOpen(false)}>Industrias</a>
          <a href="#contacto" className="nav-link" onClick={() => setMenuOpen(false)}>Contacto</a>
          <button className="btn-urgent nav-urgent" onClick={() => { setMenuOpen(false); openWhatsApp(); }}>Cotización Urgente</button>
        </div>
        <button className="btn-urgent desktop-urgent" onClick={openWhatsApp}>Cotización Urgente</button>
      </nav>

      {/* Hero content */}
      <div className="hero-main">
        <div className="hero-text">
          <div className="hero-badge">
            <span>Atención 24/7 Nuevo León</span>
          </div>

          <h1 className="hero-title">
            ¿Tu línea de producción
            esta en riesgo por material
            defectuoso?
          </h1>

          <p className="hero-subtitle">
            Inspección, sorteo y retrabajo industrial 24/7 en Nuevo León.
            Resolvemos tus urgencias de calidad hoy mismo.
          </p>

          <a href="#contacto" className="btn-primary">
            <span>Solicitar atención inmediata</span>
            <span className="btn-arrow">→</span>
          </a>

          <p className="hero-coverage">
            Cobertura: Monterrey, Apodaca, Escobedo, Santa Catarina, Pesquería, Juárez, García, Ciénega de Flores y Ramos Arizpe.
          </p>
        </div>

        <div className="hero-image-panel">
          <img src="/images/hero-industrial.webp" alt="Material industrial" />
        </div>
      </div>

    </section>
  );
}

export default Hero;
