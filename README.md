# Práctica RA5: Desarrollo de una Web Accesible en React

## Introducción

Este proyecto consiste en el desarrollo y adaptación de una aplicación web real utilizando **React**, con el objetivo principal de cumplir con los criterios de accesibilidad **WCAG 2.2 nivel AA**. Más allá de simplemente obtener una buena puntuación en herramientas automáticas, esta práctica busca entender el porqué de las barreras digitales y cómo solucionarlas para que cualquier persona, independientemente de sus capacidades, pueda navegar de forma autónoma.

La aplicación es un concurso musical donde los usuarios deben adivinar canciones, e incluye una auditoría completa que se puede descargar en formato PDF.

## Enlace Netlify

https://react-audio-tecniques.netlify.app/

## Tecnologías Utilizadas

Para este proyecto se han empleado herramientas modernas de desarrollo frontend:

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Vite**: Herramienta de compilación para una experiencia de desarrollo rápida.
- **Tailwind CSS**: Framework de CSS para el diseño visual y la responsividad.
- **React Router**: Para gestionar la navegación entre las diferentes páginas (Inicio, Juego, Contacto, Auditoría).
- **jsPDF**: Librería utilizada para generar el informe de accesibilidad de forma dinámica.

## Estructura de la Web

La web se organiza de manera lógica siguiendo los estándares semánticos:

1.  **Página Principal**: Presentación del concurso y cómo funciona.
2.  **Página de Contenido (Juego)**: El núcleo de la aplicación donde se interactúa con contenido multimedia.
3.  **Página de Contacto**: Un formulario real para evaluar la accesibilidad en la entrada de datos.
4.  **Página de Auditoría**: Espacio donde se analiza el cumplimiento de las normas y se genera el informe.

---

## Implementación de Accesibilidad

### 1. Estructura Semántica y Jerarquía

Se ha evitado el uso excesivo de etiquetas genéricas como `<div>`. En su lugar, se han utilizado etiquetas con significado estructural:

- `<header>` para la cabecera, `<nav>` para la navegación y `<main>` para el contenido principal.
- **Encabezados coherentes**: Cada página tiene un único `<h1>` y las secciones se organizan mediante `<h2>` y `<h3>` sin saltar niveles, facilitando la lectura a los usuarios de lectores de pantalla.

### 2. Navegación por Teclado y Foco Visible

La web es totalmente funcional sin necesidad de usar el ratón:

- Se puede recorrer toda la interfaz usando la tecla **Tab** y activar elementos con **Enter**.
- Se ha implementado un **anillo de foco visible** (generalmente naranja o azul) para que el usuario sepa siempre dónde está posicionado.
- **Salto al contenido**: Existe un enlace oculto que aparece al pulsar Tab al inicio de la página, permitiendo saltar directamente al contenido principal omitiendo el menú.

### 3. Imágenes y Contenido Multimedia

- **Atributos Alt**: Todas las imágenes incluyen el atributo `alt`. Las imágenes informativas tienen una descripción clara, mientras que las decorativas tienen un `alt=""` para que los lectores de pantalla las ignoren.
- **Audio**: En la parte del concurso, los fragmentos musicales están pensados para ser accesibles, y el reproductor se puede controlar mediante el teclado.

### 4. Formularios Accesibles

La página de contacto es un punto clave de la práctica:

- **Labels asociados**: Cada campo de texto tiene una etiqueta `<label>` vinculada técnicamente a su `<input>`, permitiendo que los lectores de pantalla anuncien qué se debe escribir.
- **Validación dinámica**: Si hay errores (como un email mal escrito), aparecen mensajes de texto claros. No se usa solo el color rojo para indicar el error, cumpliendo con el principio de que la información no dependa solo de la vista.
- **Aria-live**: Se utiliza el atributo `aria-live="polite"` para que cuando aparezca un mensaje de error o de éxito, el lector de pantalla lo anuncie automáticamente sin que el usuario tenga que buscarlo.

### 5. Contraste y Mejoras de Nivel Superior

- **Contraste AA**: Se han seleccionado colores que aseguran una relación de contraste mínima de **4.5:1**, asegurando que el texto sea legible para personas con baja visión.
- **Prefers-reduced-motion**: Se ha implementado una regla de CSS que detecta si el usuario prefiere reducir el movimiento en su sistema operativo. En ese caso, la web elimina animaciones y transiciones que podrían causar molestias o mareos.

---

## Auditoría y Generación de Informe PDF

Como cierre del proyecto, se ha desarrollado un componente de **Auditoría**. Este realiza una comparación entre el estado inicial de la web y el estado final tras las correcciones.

Lo más destacado es la integración de la librería **jsPDF**, que permite al usuario pulsar un botón y **descargar automáticamente un informe técnico en formato PDF**. Este informe detalla todos los criterios cumplidos y las herramientas de verificación utilizadas.
