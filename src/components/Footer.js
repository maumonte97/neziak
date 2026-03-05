import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/images/logo-neziak.png" alt="NEZIAK" className="footer-logo" />
          <div className="footer-info">
            <p className="footer-description">Especialistas en inspección, sorteo, retrabajo y logística industrial. Personal certificado 24/7 en Monterrey y zona metropolitana.</p>
            <div className="footer-contact-row">
              <a href="mailto:ventas@neziak.com.mx" className="footer-contact">ventas@neziak.com.mx</a>
              <span className="footer-separator">|</span>
              <a href="tel:+528128848971" className="footer-contact">81 2884 8971</a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
          <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
