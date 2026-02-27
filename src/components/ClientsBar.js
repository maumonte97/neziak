import React from 'react';
import './ClientsBar.css';

function ClientsBar() {
  return (
    <div className="clients-bar-wrapper">
    <div className="clients-bar">
      <p className="clients-label">Empresas que han confiado en NEZIAK</p>
      <div className="clients-logos-wrapper">
        <div className="clients-logos-track">
          <img src="/images/logo-metalsa.svg" alt="Metalsa" className="client-logo" />
          <img src="/images/logo-twb.svg" alt="TWB" className="client-logo" />
          <img src="/images/logo-rodafacil.webp" alt="Roda Fácil" className="client-logo client-logo-xl" />
          <img src="/images/logo-cuprum.webp" alt="Cuprum" className="client-logo client-logo-wide" />
          <img src="/images/logo-ternium.webp" alt="Ternium" className="client-logo" />
          {/* Duplicado para loop infinito */}
          <img src="/images/logo-metalsa.svg" alt="Metalsa" className="client-logo" />
          <img src="/images/logo-twb.svg" alt="TWB" className="client-logo" />
          <img src="/images/logo-rodafacil.webp" alt="Roda Fácil" className="client-logo client-logo-xl" />
          <img src="/images/logo-cuprum.webp" alt="Cuprum" className="client-logo client-logo-wide" />
          <img src="/images/logo-ternium.webp" alt="Ternium" className="client-logo" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default ClientsBar;
