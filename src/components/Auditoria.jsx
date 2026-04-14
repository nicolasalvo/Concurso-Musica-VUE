import jsPDF from 'jspdf'

const Auditoria = () => {
  const descargarPDF = () => {
    const doc = new jsPDF()
    let y = 20
    const margin = 14
    const pageHeight = doc.internal.pageSize.height

    const addText = (text, size, isBold = false) => {
      doc.setFontSize(size)
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      const lines = doc.splitTextToSize(text, 180)

      for (let i = 0; i < lines.length; i++) {
        if (y > pageHeight - 20) {
          doc.addPage()
          y = 20
        }
        doc.text(lines[i], margin, y)
        y += size === 16 ? 10 : 7
      }
      y += 2
    }

    addText('Informe de Auditoría de Accesibilidad Web', 18, true)
    addText('Proyecto desarrollado en React', 12, false)
    addText('Autor: Nicolas Oxovi', 12, true)
    addText(`Fecha: ${new Date().toLocaleDateString()}`, 12, false)
    addText('URL del proyecto: https://reactgametecniques.netlify.app/auditoria', 12, false)
    y += 5

    addText('Introducción', 16, true)
    addText(
      'Este documento presenta la auditoría de accesibilidad realizada sobre la web desarrollada con React. El objetivo del análisis ha sido verificar el cumplimiento de los criterios WCAG 2.2 nivel AA y aplicar las correcciones necesarias para mejorar la accesibilidad de la interfaz.',
      11,
    )
    addText(
      'WCAG (Web Content Accessibility Guidelines) son las pautas internacionales que establecen cómo debe construirse una web para que sea accesible. Estas pautas están organizadas en principios técnicos y niveles de conformidad. Nivel AA es el nivel estándar exigido en la mayoría de proyectos profesionales y entornos institucionales.',
      11,
    )
    y += 5

    addText('Marco conceptual aplicado', 16, true)
    addText(
      'La accesibilidad web se basa en cuatro principios fundamentales conocidos como POUR.',
      11,
    )
    addText('Perceptible', 12, true)
    addText(
      'El contenido debe poder percibirse por todos los usuarios. Esto implica que las imágenes deben tener texto alternativo (atributo alt) que los lectores de pantalla puedan leer. También implica que el contraste entre texto y fondo sea suficiente para evitar que el texto sea ilegible para personas con baja visión.',
      11,
    )
    addText('Operable', 12, true)
    addText(
      'La interfaz debe poder utilizarse. Toda la web debe poder navegarse con teclado, utilizando la tecla Tab para recorrer todos los elementos interactivos. Cuando se navega con teclado, el elemento activo recibe foco, el cual es un estado visual que indica qué elemento está seleccionado.',
      11,
    )
    addText('Comprensible', 12, true)
    addText(
      'El contenido debe ser claro y entendible. Un formulario no debe mostrar errores únicamente mediante color, debe incluir un mensaje explicativo.',
      11,
    )
    addText('Robusto', 12, true)
    addText(
      'El código debe estar estructurado correctamente para funcionar con tecnologías de asistencia. Aquí es fundamental el uso de HTML semántico (header, main, nav, section) en lugar de etiquetas genéricas.',
      11,
    )
    y += 5

    addText('Auditoría inicial', 16, true)
    addText(
      'La auditoría inicial se realizó utilizando Lighthouse (herramienta integrada en Chrome), WAVE y Axe DevTools.',
      11,
    )
    addText('Resultados iniciales:', 12, true)
    addText('Puntuación de accesibilidad Lighthouse: 72/100', 11, true)
    addText('Principales problemas detectados:', 11)
    addText(
      '• Imágenes sin atributo alt.\n• Contraste insuficiente en botones secundarios.\n• Inputs de formulario sin label asociado.\n• Falta de enlace "Saltar al contenido".\n• Foco no visible en navegación por teclado.',
      11,
    )
    y += 5

    addText('Correcciones implementadas', 16, true)
    addText(
      'Se reorganizó la estructura utilizando header, nav, main y footer correctamente. Se revisó la jerarquía de encabezados para asegurar un único h1 por página. Se añadieron atributos alt descriptivos a todas las imágenes informativas y alt vacío en imágenes decorativas.',
      11,
    )
    addText(
      'Se implementó una página de contacto con formulario accesible. Cada campo tiene su label asociado correctamente a su respectivo input, y se añadió validación accesible indicando los errores textualmente sin depender del color. Se implementó aria-live para anunciar mensajes dinámicos.',
      11,
    )
    addText(
      'Se añadió un enlace "Saltar al contenido" para omitir el menú con teclado y se ajustaron los colores para cumplir contraste mínimo 4.5:1.',
      11,
    )
    y += 5

    addText('Mejoras adicionales realizadas', 16, true)
    addText('Se implementó prefers-reduced-motion', 12, true)
    addText(
      'Las animaciones mejoran la experiencia visual, pero pueden provocar molestias en personas con sensibilidad al movimiento y/o trastornos vestibulares. Cuando el usuario activa la opción de reducir movimiento en su sistema operativo, esta media query de CSS detecta la preferencia para cancelar y eliminar todas las animaciones y transiciones de la web, respetando su configuración personal.',
      11,
    )
    addText('Botones con texto descriptivo', 12, true)
    addText(
      'Se aseguró que los botones no dependan únicamente de iconos SVG, combinando el icono con texto visible ("Jugar Ahora", "Descargar informe PDF"). Esto evita ambigüedad para los lectores de pantalla.',
      11,
    )
    y += 5

    addText('Validación final', 16, true)
    addText(
      'Después de aplicar todas las mejoras, se volvió a ejecutar la auditoría con Lighthouse. La nueva puntuación obtenida fue de 96/100 en accesibilidad.',
      11,
    )
    addText(
      'La mejora se observa visualmente en la Estructura semántica, los Formularios debidamente etiquetados, controles con ratios de alto Contraste superados, y una idónea Navegación por teclado que rastrea fácilmente los saltos de tabulación marcados por el anillo naranja perimetral.',
      11,
    )
    y += 5

    addText('Conclusión', 16, true)
    addText(
      'La web cumple el nivel AA requerido. Se ha mejorado la accesibilidad estructural, funcional y visual drásticamente, garantizando que todo usuario pueda interactuar con la interfaz sin impedimentos operacionales.',
      11,
    )

    // Save
    doc.save('informe-accesibilidad.pdf')
  }

  return (
    <main
      id="main"
      tabIndex="-1"
      className="focus:outline-none flex justify-center items-center min-h-[80vh] p-8 bg-[#f0f4f8]"
    >
      <div className="border-2 border-brand-blue rounded-[15px] p-8 max-w-[600px] w-full mx-auto text-center bg-white shadow-lg">
        <h1 className="text-brand-blue mb-4 text-3xl font-bold">Auditoría Completa WCAG</h1>
        <p className="text-gray-800 leading-relaxed mb-6 font-medium">
          Obtén el resumen detallado de las conformidades y modificaciones que se aplicaron a la
          plataforma bajo las normas estándar de Accesibilidad Web Nivel AA.
        </p>
        <div>
          <button
            onClick={descargarPDF}
            className="bg-brand-blue-light hover:bg-brand-blue-light-hover text-white border-none py-4 px-8 rounded cursor-pointer text-lg font-bold transition-colors"
          >
            Descargar informe en PDF
          </button>
        </div>
      </div>
    </main>
  )
}

export default Auditoria
