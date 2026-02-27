import { useEffect } from 'react';

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    }

    return () => {
      document.title = 'NEZIAK | Inspección, Sorteo y Retrabajo Industrial 24/7 en Monterrey';
      if (meta) {
        meta.setAttribute(
          'content',
          'Servicio de inspección, sorteo de material, retrabajo industrial y traspaleo 24/7 en Monterrey y zona metropolitana. Personal certificado, respuesta en menos de 4 horas. REPSE, IMSS y SAT al corriente.'
        );
      }
    };
  }, [title, description]);
}
