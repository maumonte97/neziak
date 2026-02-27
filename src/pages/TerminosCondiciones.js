import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';
import useDocumentMeta from '../hooks/useDocumentMeta';

function TerminosCondiciones() {
  useDocumentMeta(
    'Términos y Condiciones | NEZIAK',
    'Términos y condiciones de uso del sitio web y servicios industriales de NEZIAK. Cotizaciones, contratación y legislación aplicable en Monterrey, Nuevo León.'
  );

  return (
    <div className="legal-page">
      <div className="legal-header">
        <Link to="/" className="legal-back">← Volver al inicio</Link>
        <h1>Términos y Condiciones</h1>
      </div>
      <div className="legal-content">
        <p className="legal-date">Última actualización: Febrero 2026</p>

        <h2>1. Aceptación de los Términos</h2>
        <p>
          Al acceder y utilizar este sitio web de NEZIAK, usted acepta cumplir con estos términos
          y condiciones de uso. Si no está de acuerdo con alguno de estos términos, le solicitamos
          no utilizar el sitio.
        </p>

        <h2>2. Servicios</h2>
        <p>
          NEZIAK ofrece servicios industriales especializados que incluyen, pero no se limitan a:
        </p>
        <ul>
          <li>Sorteo de material</li>
          <li>Retrabajo industrial</li>
          <li>Traspaleo</li>
          <li>Inspección de calidad</li>
        </ul>
        <p>
          Las condiciones específicas de cada servicio serán acordadas mediante cotización formal
          y contrato entre las partes.
        </p>

        <h2>3. Cotizaciones y Contratación</h2>
        <p>
          Las solicitudes de cotización realizadas a través del formulario de contacto no
          constituyen un compromiso contractual. La relación comercial se formaliza únicamente
          mediante la firma de un contrato de servicios.
        </p>

        <h2>4. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseño,
          es propiedad de NEZIAK y está protegido por las leyes de propiedad intelectual de México.
        </p>

        <h2>5. Limitación de Responsabilidad</h2>
        <p>
          NEZIAK no será responsable por daños indirectos derivados del uso de este sitio web.
          La información proporcionada es de carácter informativo y no constituye una oferta
          vinculante.
        </p>

        <h2>6. Disponibilidad del Servicio</h2>
        <p>
          La disponibilidad de personal y tiempos de respuesta están sujetos a la demanda y
          capacidad operativa al momento de la solicitud. NEZIAK se compromete a informar
          oportunamente sobre la disponibilidad real.
        </p>

        <h2>7. Legislación Aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier
          controversia será sometida a los tribunales competentes de Monterrey, Nuevo León.
        </p>

        <h2>8. Contacto</h2>
        <p>
          Para cualquier duda sobre estos términos y condiciones:{' '}
          <a href="mailto:ventas@neziak.com.mx"><strong>ventas@neziak.com.mx</strong></a>
        </p>
      </div>
    </div>
  );
}

export default TerminosCondiciones;
