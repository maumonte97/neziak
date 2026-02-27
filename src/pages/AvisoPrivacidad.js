import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';
import useDocumentMeta from '../hooks/useDocumentMeta';

function AvisoPrivacidad() {
  useDocumentMeta(
    'Aviso de Privacidad | NEZIAK',
    'Conoce cómo NEZIAK protege y utiliza tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.'
  );

  return (
    <div className="legal-page">
      <div className="legal-header">
        <Link to="/" className="legal-back">← Volver al inicio</Link>
        <h1>Aviso de Privacidad</h1>
      </div>
      <div className="legal-content">
        <p className="legal-date">Última actualización: Febrero 2026</p>

        <h2>1. Identidad del Responsable</h2>
        <p>
          NEZIAK, con domicilio en Monterrey, Nuevo León, México, es responsable del tratamiento
          de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares (LFPDPPP).
        </p>

        <h2>2. Datos Personales Recabados</h2>
        <p>Recabamos los siguientes datos personales:</p>
        <ul>
          <li>Nombre completo</li>
          <li>Empresa</li>
          <li>Cargo</li>
          <li>Número de teléfono</li>
          <li>Tipo de servicio requerido</li>
        </ul>

        <h2>3. Finalidad del Tratamiento</h2>
        <p>Sus datos personales serán utilizados para:</p>
        <ul>
          <li>Dar seguimiento a solicitudes de cotización</li>
          <li>Contactarle para ofrecer nuestros servicios industriales</li>
          <li>Elaborar propuestas comerciales personalizadas</li>
          <li>Cumplir con obligaciones legales y contractuales</li>
        </ul>

        <h2>4. Transferencia de Datos</h2>
        <p>
          NEZIAK no transferirá sus datos personales a terceros sin su consentimiento, salvo las
          excepciones previstas en la LFPDPPP.
        </p>

        <h2>5. Derechos ARCO</h2>
        <p>
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus
          datos personales (derechos ARCO). Para ejercer estos derechos, envíe un correo a{' '}
          <a href="mailto:ventas@neziak.com.mx"><strong>ventas@neziak.com.mx</strong></a>.
        </p>

        <h2>6. Cambios al Aviso de Privacidad</h2>
        <p>
          NEZIAK se reserva el derecho de modificar este aviso de privacidad. Cualquier cambio
          será publicado en este sitio web.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Para cualquier duda o aclaración sobre este aviso de privacidad, puede contactarnos en:{' '}
          <a href="mailto:ventas@neziak.com.mx"><strong>ventas@neziak.com.mx</strong></a>
        </p>
      </div>
    </div>
  );
}

export default AvisoPrivacidad;
