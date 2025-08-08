import React, { useState } from 'react';

const legalContent = {
  aviso: {
    title: 'Aviso Legal',
    text: `Este sitio pertenece a E-RRHH | IT & RRHH Solutions.
Toda la información aquí presentada tiene fines informativos.
El contenido no constituye asesoramiento legal, laboral ni contractual.
La empresa se reserva el derecho de modificar, actualizar o eliminar contenido sin previo aviso.`
  },
  privacidad: {
    title: 'Política de Privacidad',
    text: `Este sitio no recopila datos personales de forma activa.
No utilizamos cookies de seguimiento ni herramientas analíticas que identifiquen usuarios.
Si en el futuro se incorporan formularios o métricas, se informará y solicitará consentimiento explícito.`
  },
  terminos: {
    title: 'Términos de Uso',
    text: `El uso de este sitio implica la aceptación de los términos aquí expresados.
No está permitido reproducir ni distribuir el contenido sin autorización.
La navegación implica aceptación de los presentes términos y condiciones.`
  }
};

export default function LegalModal({
  type,
  onClose,
}: {
  type: 'legal' | 'privacy' | 'terms';
  onClose: () => void;
}) {
  const contentMap = {
    legal: {
      title: 'Aviso Legal',
      text: `Este sitio pertenece a E-RRHH | IT & RRHH Solutions.
Toda la información aquí presentada tiene fines informativos.
El contenido no constituye asesoramiento legal, laboral ni contractual.
La empresa se reserva el derecho de modificar, actualizar o eliminar contenido sin previo aviso.`
    },
    privacy: {
      title: 'Política de Privacidad',
      text: `Este sitio no recopila datos personales de forma activa.
No utilizamos cookies de seguimiento ni herramientas analíticas que identifiquen usuarios.
Si en el futuro se incorporan formularios o métricas, se informará y solicitará consentimiento explícito.`
    },
    terms: {
      title: 'Términos de Uso',
      text: `El uso de este sitio implica la aceptación de los términos aquí expresados.
No está permitido reproducir ni distribuir el contenido sin autorización.
La navegación implica aceptación de los presentes términos y condiciones.`
    }
  };

  const section = contentMap[type];

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
    <div
      className="rounded-lg shadow-2xl max-w-lg w-full p-6 relative"
      style={{
        backgroundColor: '#1C2942',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)'
      }}
    >
      <h2 className="text-xl font-semibold mb-4 text-white">{section.title}</h2>
      <pre className="whitespace-pre-wrap text-sm text-white opacity-90">{section.text}</pre>
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-white text-xl hover:opacity-70"
      >
        ×
      </button>
    </div>
  </div>
);
}

