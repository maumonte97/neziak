import React, { useState, useEffect, useRef } from 'react';
import './WhatsAppWidget.css';

const WA_PHONE = '528183960949';

function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState('welcome'); // welcome, form, loading, success
  const [message, setMessage] = useState('Hola, me interesa solicitar una cotización de servicios industriales.');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [phone, setPhone] = useState('');
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const utmRef = useRef({});
  const nameInputRef = useRef(null);

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

    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const handleOpenWa = () => {
      open();
    };
    document.addEventListener('keydown', handleEsc);
    window.addEventListener('open-whatsapp', handleOpenWa);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      window.removeEventListener('open-whatsapp', handleOpenWa);
    };
  }, []);

  const open = () => {
    setIsOpen(true);
    setStep('welcome');
    setMessage('Hola, me interesa solicitar una cotización de servicios industriales.');
    setBubbleVisible(false);
    setTimeout(() => setBubbleVisible(true), 300);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    isOpen ? close() : open();
  };

  const showForm = () => {
    if (!message.trim()) return;
    setStep('form');
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 300);
  };

  const send = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !empresa.trim()) return;

    setStep('loading');

    // Construir mensaje con UTMs
    let waMessage = `Hola, soy ${name} de ${empresa}.\n\nCorreo: ${email}\nTel: ${phone}`;
    const utms = utmRef.current;
    if (utms.utm_source) {
      waMessage += `\n\n[${utms.utm_source}/${utms.utm_medium || ''}/${utms.utm_campaign || ''}]`;
    }

    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        window.open(waUrl, '_blank');
        setTimeout(() => close(), 2000);
      }, 1000);
    }, 800);
  };

  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  return (
    <>
      {/* FAB Button */}
      <button className="wa-fab" onClick={toggle} aria-label="Contactar por WhatsApp">
        <svg className="wa-fab-icon" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>

      {/* Overlay */}
      <div
        className={`wa-overlay ${isOpen ? 'wa-open' : ''}`}
        onClick={close}
      />

      {/* Modal */}
      <div className={`wa-modal ${isOpen ? 'wa-open' : ''}`}>
        <div className="wa-modal-inner">
          {/* Header */}
          <div className="wa-header">
            <div className="wa-header-left">
              <div className="wa-avatar">
                <img src="/images/logo-neziak.png" alt="NEZIAK" />
                <span className="wa-online" />
              </div>
              <div>
                <p className="wa-header-name">NEZIAK</p>
                <p className="wa-header-status">Disponible</p>
              </div>
            </div>
            <button className="wa-close" onClick={close} aria-label="Cerrar">
              &times;
            </button>
          </div>

          {/* Chat area */}
          <div className="wa-chat-area">

            {/* Step 1: Welcome */}
            {step === 'welcome' && (
              <div className="wa-step wa-show">
                <div className={`wa-bubble ${bubbleVisible ? 'wa-show' : ''}`}>
                  <div className="wa-message-bubble">
                    <p>¡Hola! Soy del equipo de NEZIAK. ¿En qué te puedo ayudar?</p>
                    <span className="wa-time">{timeStr}</span>
                  </div>
                </div>
                <div className="wa-input-area">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="1"
                  />
                  <button className="wa-send-btn" onClick={showForm} aria-label="Enviar">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Form */}
            {step === 'form' && (
              <div className="wa-step wa-show">
                <div className="wa-form-card">
                  <p className="wa-form-instruction">Completa tus datos para contactarte por WhatsApp</p>
                  <form onSubmit={send}>
                    <input
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Nombre completo *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      name="organization"
                      autoComplete="organization"
                      placeholder="Empresa *"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Correo electrónico *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Teléfono *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <button type="submit" className="wa-submit-btn">
                      Enviar a WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Step 3: Loading */}
            {step === 'loading' && (
              <div className="wa-step wa-show wa-center">
                <div className="wa-spinner" />
                <p className="wa-loading-text">Enviando...</p>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 'success' && (
              <div className="wa-step wa-show wa-center">
                <div className="wa-success-icon">&#10003;</div>
                <p className="wa-success-title">¡Datos enviados!</p>
                <p className="wa-success-sub">Abriendo WhatsApp...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatsAppWidget;
