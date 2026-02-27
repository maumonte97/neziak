import React from 'react';
import './WhyUs.css';

const features = [
  {
    icon: '/images/icon-personal.svg',
    title: 'Personal Certificado',
    description: 'Entrenamiento Riguroso'
  },
  {
    icon: '/images/icon-rotacion.svg',
    title: 'Baja Rotación',
    description: 'Estabilidad Operativa'
  },
  {
    icon: '/images/icon-respuesta.svg',
    title: 'Respuesta 24/7',
    description: 'Disponibilidad Total'
  },
  {
    icon: '/images/icon-medicion.svg',
    title: 'Medición Horaria',
    description: 'Productividad Real'
  },
  {
    icon: '/images/icon-mejora.svg',
    title: 'Mejora Continua',
    description: 'Propuestas de Valor'
  }
];

function WhyUs() {
  return (
    <section className="whyus">
      <div className="whyus-container">
        <div className="whyus-header">
          <h2 className="whyus-title">
            No solo enviamos personal.<br />
            Enviamos soluciones.
          </h2>
        </div>
        
        <div className="whyus-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                <div className="feature-icon-circle">
                  <img src={feature.icon} alt="" className="feature-icon-svg" />
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
