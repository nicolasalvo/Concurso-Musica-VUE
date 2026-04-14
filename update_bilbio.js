import fs from 'fs';
let data = fs.readFileSync('./src/bilbiografia.js', 'utf8');

const transcriptions = {
  "Downtown": "Ritmo de reguetón lento. Voz femenina entonando suavemente las estrofas iniciales.",
  "¿Qué nos pasó?": "Pista de trap triste. Letra melancólica sobre una relación rota cantada en tono grave.",
  "Mi Gente": "Ritmo de reguetón animado. Voz masculina cantando al ritmo de la base urbana rápida.",
  "We Don't Talk Anymore": "Balada pop suave con guitarra acústica. Voz masculina cantando en tono nostálgico.",
  "Love": "Composición rítmica de R&B con líneas vocales melódicas y bajos profundos.",
  "Mi Anamá": "Base de trap urbano con voces rápidas narrando eventos.",
  "Remix": "Pista urbana con múltiples capas de voces y efectos de sonido enérgicos.",
  "El Baño": "Reguetón de medio tempo. Voz masculina acompañada de percusión caribeña.",
  "Just Dance": "Tema electropop enérgico. Voz femenina potente con sintetizadores.",
  "Déjà Vu": "Base rítmica lenta con sintetizadores ambientales. Letra cantada en tono reflexivo.",
  "Dakiti": "Reguetón futurista con sintetizadores persistentes. Voces masculinas rítmicas.",
  "Chuos": "Trap latino con tempo rápido, bajos pesados y barras de rap fluidas.",
  "La Forma en que Me Miras": "Reguetón romántico. Voz masculina cantando de forma suave y apasionada.",
  "Lo que Necesitas": "Melodía urbana pegadiza con ritmos de reguetón suave y coros armonizados.",
  "Circles": "Pop rock con un riff de bajo distintivo y guitarra acústica constante.",
  "Moja Big Ghost": "Rap de trap melancólico. Melodías de voz sobre una base con cajas de ritmos.",
  "Don't Stop the Music": "Música dance-pop impulsada por un bajo potente y un ritmo constante.",
  "Save Your Tears": "Synth-pop ochentero. Voz clara cantando sobre un tempo animado.",
  "Sunflower": "Pop ligero y soleado. Voces dulces cantadas sobre una base relajante.",
  "WOAH": "Pista de rap con bajos muy saturados, baterías rápidas y vocales agresivos."
};

for (const [title, trans] of Object.entries(transcriptions)) {
  const searchPattern = `"titulo": "${title}",`;
  data = data.replace(searchPattern, `"titulo": "${title}",\n        "transcripcion": "${trans}",`);
}

fs.writeFileSync('./src/bilbiografia.js', data);
console.log("Fixed!");
