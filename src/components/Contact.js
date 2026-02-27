import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { openWhatsApp } from '../utils/openWhatsApp';
import useScrollReveal from '../hooks/useScrollReveal';

// Imagen local descargada desde Figma
const imgFoto = "/images/contact-team.webp";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    telefono: '',
    servicio: '',
    urgencia: '',
    mensaje: ''
  });
  const utmRef = useRef({});
  const revealRef = useScrollReveal();

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, utm_data: utmRef.current, page_url: window.location.href });
  };

  return (
    <section className="contact" id="contacto" ref={revealRef}>
      <div className="contact-blue-section">
        <div className="contact-container">
          <div className="contact-info reveal-fade-up">
            <div className="emergency-badge">
              <span>Protocolo de Emergencia</span>
            </div>

            <h2 className="contact-title">
              ¿Necesitas resolver un<br />
              problema de calidad hoy?
            </h2>

            <p className="contact-description">
              Nuestro equipo está listo 24/7 para desplegar personal en tu planta.
              No permitas que el material defectuoso detenga tu crecimiento.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon-wrapper">
                  <img src="/images/contact-icon-circle.svg" alt="" className="method-circle" />
                  <img src="/images/icon-contact-phone.svg" alt="" className="method-icon" />
                </div>
                <div className="method-info">
                  <span className="method-label">Atención inmediata</span>
                  <a href="tel:+528183960949" className="method-value">81 8396 0949</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon-wrapper">
                  <img src="/images/contact-icon-circle.svg" alt="" className="method-circle" />
                  <img src="/images/icon-contact-email.svg" alt="" className="method-icon" />
                </div>
                <div className="method-info">
                  <span className="method-label">Cotizaciones</span>
                  <a href="mailto:ventas@neziak.com.mx" className="method-value">ventas@neziak.com.mx</a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon-wrapper">
                  <img src="/images/contact-icon-circle.svg" alt="" className="method-circle" />
                  <img src="/images/icon-location.svg" alt="" className="method-icon" />
                </div>
                <div className="method-info">
                  <span className="method-label">Ubicación</span>
                  <span className="method-value">Apodaca, Nuevo León, México</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-image reveal-fade-up stagger-2">
            <img src={imgFoto} alt="Equipo NEZIAK" />
          </div>
        </div>
      </div>

      <div className="capacity-section">
        <div className="capacity-container">
          <p className="capacity-title">Capacidad operativa inmediata:</p>
          <p className="capacity-text">Equipos listos para despacho en zona metropolitana de Monterrey.</p>
        </div>
      </div>

      <div className="contact-form-section reveal-fade-up">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Empresa</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Cargo</label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Tipo de Servicio</label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un servicio</option>
                <option value="sorteo">Sorteo de material</option>
                <option value="retrabajo">Retrabajo industrial</option>
                <option value="traspaleo">Traspaleo</option>
                <option value="inspeccion">Inspección</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label>¿Es una urgencia?</label>
              <select
                name="urgencia"
                value={formData.urgencia}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                <option value="si">Sí, necesito atención inmediata</option>
                <option value="no">No, puedo esperar</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="3"
              placeholder="Describe brevemente tu necesidad..."
            />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn-submit">
              Solicita Cotización Inmediata →
            </button>

            <p className="submit-note">
              Al enviar este formulario, aceptas que un ingeniero de NEZIAK te contacte prioritariamente.
            </p>
          </div>
        </form>
      </div>

      <div className="contact-accent-bar"></div>
    </section>
  );
}

export default Contact;
