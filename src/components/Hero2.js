import React, { useState, useEffect, useRef } from 'react';
import './Hero2.css';
import { openWhatsApp } from '../utils/openWhatsApp';

const neziakLogo = "/images/logo-neziak.png";

function Hero2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'sending' | 'success'
  const utmRef = useRef({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    utmRef.current = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      gclid: params.get('gclid') || ''
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitState !== 'idle') return;

    setSubmitState('sending');

    try {
      const API_URL = process.env.REACT_APP_CONTACT_API || 'https://neziak.com.mx/api/contact.php';

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'hero_cotizacion',
          ...formData,
          ...utmRef.current,
          page_url: window.location.href
        })
      });

      if (!res.ok) throw new Error('Error al enviar');

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        form_name: 'hero_cotizacion',
        form_service: formData.servicio
      });

      setSubmitState('success');

      setTimeout(() => {
        setSubmitState('idle');
        setFormData({
          nombre: '',
          empresa: '',
          cargo: '',
          telefono: '',
          servicio: '',
          mensaje: ''
        });
      }, 4000);
    } catch (err) {
      console.error('Error enviando form:', err);
      setSubmitState('idle');
      alert('Hubo un error al enviar tu solicitud. Intenta de nuevo o llámanos al 81 2884 8971.');
    }
  };

  return (
    <section className="hero2">
      {/* Background image */}
      <div className="hero2-bg">
        <img src="/images/hero2-retrabajo.webp" alt="" />
      </div>
      {/* Blue gradient overlay */}
      <div className="hero2-gradient"></div>
      {/* Dot pattern */}
      <div className="hero2-dots">
        <img src="/images/hero-dots-pattern.webp" alt="" />
      </div>

      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <img src="/images/icon-phone.svg" alt="" className="top-bar-icon" />
              <a href="tel:+528128848971">81 2884 8971</a>
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
      <div className="hero2-main">
        <div className="hero2-text">
          <div className="hero-badge">
            <span>Atención 24/7 Nuevo León</span>
          </div>
          <h1 className="hero2-title">
            ¿Tu línea de producción
            esta en riesgo por material
            defectuoso?
          </h1>
          <p className="hero2-subtitle">
            Inspección, sorteo y retrabajo industrial 24/7 en Nuevo León.
            Resolvemos tus urgencias de calidad hoy mismo.
          </p>
          <p className="hero2-coverage">
            Cobertura: Monterrey, Apodaca, Escobedo, Santa Catarina, Pesquería, Juárez, García, Ciénega de Flores y Ramos Arizpe.
          </p>
        </div>

        <div className="hero2-form-panel">
          <form className="hero2-form" onSubmit={handleSubmit}>
            <div className="hero2-form-row">
              <div className="hero2-form-group">
                <label>Nombre Completo</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} autoComplete="name" required />
              </div>
              <div className="hero2-form-group">
                <label>Empresa</label>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} autoComplete="organization" required />
              </div>
            </div>
            <div className="hero2-form-row">
              <div className="hero2-form-group">
                <label>Cargo</label>
                <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} />
              </div>
              <div className="hero2-form-group">
                <label>Teléfono</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} autoComplete="tel" required />
              </div>
            </div>
            <div className="hero2-form-group hero2-full">
              <label>Tipo de Servicio</label>
              <select name="servicio" value={formData.servicio} onChange={handleChange} required>
                <option value="">Selecciona un servicio</option>
                <option value="sorteo">Sorteo de material</option>
                <option value="retrabajo">Retrabajo industrial</option>
                <option value="traspaleo">Traspaleo</option>
                <option value="inspeccion">Inspección</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="hero2-form-group hero2-full">
              <label>Mensaje</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="2" placeholder="Describe brevemente tu necesidad..." />
            </div>
            {submitState === 'success' ? (
              <p className="hero2-submit-success" style={{ color: '#22c55e', fontWeight: 600, fontSize: '1.05rem', textAlign: 'center', padding: '1rem 0' }}>
                ¡Solicitud enviada! Un ingeniero te contactará a la brevedad.
              </p>
            ) : (
              <>
                <button type="submit" className="hero2-submit" disabled={submitState === 'sending'}>
                  {submitState === 'sending' ? 'Enviando...' : 'Solicita Cotización Inmediata →'}
                </button>
                <p className="hero2-form-note">
                  Al enviar este formulario, aceptas que un ingeniero de NEZIAK te contacte prioritariamente.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
