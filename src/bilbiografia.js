export const canciones = [
    {
        "artista": "Anitta & J Balvin",
        "titulo": "Downtown",
        "url": "/songs/anitta_balvin_downtown.mp3",
        "opciones": [
            "Downtown", // Correcta
            "Mi Gente", 
            "El Baño",
            "Dakiti"
        ]
    },
    {
        "artista": "Anuel",
        "titulo": "¿Qué nos pasó?",
        "url": "/songs/anuel_¿quenospaso.mp3",
        "opciones": [
            "Mi Anamá",
            "¿Qué nos pasó?", // Correcta
            "La Forma en que Me Miras",
            "Lo que Necesitas"
        ]
    },
    {
        "artista": "J Balvin & Willy William",
        "titulo": "Mi Gente",
        "url": "/songs/balvin_willy_migente.mp3",
        "opciones": [
            "Mi Gente", // Correcta
            "Downtown", 
            "Remix",
            "Sunflower"
        ]
    },
    {
        "artista": "Charlie Puth",
        "titulo": "We Don't Talk Anymore",
        "url": "/songs/charlie_wedon'tanymore.mp3",
        "opciones": [
            "Save Your Tears",
            "We Don't Talk Anymore", // Correcta
            "Circles",
            "Love"
        ]
    },
    {
        "artista": "Clarent",
        "titulo": "Love",
        "url": "/songs/clarent_love.mp3",
        "opciones": [
            "Love", // Correcta
            "Circles",
            "Sunflower",
            "Save Your Tears"
        ]
    },
    {
        "artista": "Cris & Luar",
        "titulo": "Mi Anamá",
        "url": "/songs/cris_luar_mianamas.mp3",
        "opciones": [
            "Chuos",
            "¿Qué nos pasó?",
            "Mi Anamá", // Correcta
            "La Forma en que Me Miras"
        ]
    },
    {
        "artista": "El Efecto",
        "titulo": "Remix",
        "url": "/songs/elefectoremix.mp3",
        "opciones": [
            "Remix", // Correcta
            "Downtown",
            "Mi Gente",
            "Chuos"
        ]
    },
    {
        "artista": "Enrique Iglesias & Bad Bunny",
        "titulo": "El Baño",
        "url": "/songs/enrique_badbu_elbaño.mp3",
        "opciones": [
            "Dakiti", 
            "El Baño", // Correcta
            "Mi Gente",
            "Downtown"
        ]
    },
    {
        "artista": "Lady Gaga & Colby O'Donis",
        "titulo": "Just Dance",
        "url": "/songs/gaga_justdance.mp3",
        "opciones": [
            "Just Dance", // Correcta
            "Don't Stop the Music",
            "Love",
            "Circles"
        ]
    },
    {
        "artista": "Hades",
        "titulo": "Déjà Vu",
        "url": "/songs/hades_dejavu.mp3",
        "opciones": [
            "Moja Big Ghost",
            "Déjà Vu", // Correcta
            "WOAH",
            "Chuos"
        ]
    },
    {
        "artista": "Jhay Cortez & Bad Bunny",
        "titulo": "Dakiti",
        "url": "/songs/jhay_badbu_dakiti.mp3",
        "opciones": [
            "Dakiti", // Correcta
            "El Baño", 
            "Mi Gente",
            "Downtown"
        ]
    },
    {
        "artista": "Joseph & Quevedo",
        "titulo": "Chuos",
        "url": "/songs/juseph_quevedo_chuos.mp3",
        "opciones": [
            "Mi Anamá",
            "Chuos", // Correcta
            "¿Qué nos pasó?",
            "La Forma en que Me Miras"
        ]
    },
    {
        "artista": "Saiko",
        "titulo": "La Forma en que Me Miras",
        "url": "/songs/laformaenquememiras.mp3",
        "opciones": [
            "La Forma en que Me Miras", // Correcta
            "Lo que Necesitas", 
            "Mi Anamá",
            "¿Qué nos pasó?"
        ]
    },
    {
        "artista": "Saiko",
        "titulo": "Lo que Necesitas",
        "url": "/songs/loknecesitas_saiko.mp3",
        "opciones": [
            "Mi Anamá",
            "Lo que Necesitas", // Correcta
            "La Forma en que Me Miras", 
            "Chuos"
        ]
    },
    {
        "artista": "Post Malone",
        "titulo": "Circles",
        "url": "/songs/malone_circles.mp3",
        "opciones": [
            "Circles", // Correcta
            "Sunflower", 
            "Save Your Tears",
            "We Don't Talk Anymore"
        ]
    },
    {
        "artista": "Juice WRLD & Trippie Redd",
        "titulo": "Moja Big Ghost",
        "url": "/songs/mojabighost.mp3",
        "opciones": [
            "WOAH",
            "Moja Big Ghost", // Correcta
            "Déjà Vu",
            "Dakiti"
        ]
    },
    {
        "artista": "Rihanna",
        "titulo": "Don't Stop the Music",
        "url": "/songs/rihanna_dontstop.mp3",
        "opciones": [
            "Don't Stop the Music", // Correcta
            "Just Dance",
            "Love",
            "Remix"
        ]
    },
    {
        "artista": "The Weeknd",
        "titulo": "Save Your Tears",
        "url": "/songs/saveourtears.mp3",
        "opciones": [
            "Circles",
            "Save Your Tears", // Correcta
            "Sunflower",
            "We Don't Talk Anymore"
        ]
    },
    {
        "artista": "Post Malone & Swae Lee",
        "titulo": "Sunflower",
        "url": "/songs/sunflower.mp3",
        "opciones": [
            "Circles",
            "Sunflower", // Correcta
            "Save Your Tears",
            "Love"
        ]
    },
    {
        "artista": "Comethazine",
        "titulo": "WOAH",
        "url": "/songs/woah.mp3",
        "opciones": [
            "WOAH", // Correcta
            "Moja Big Ghost",
            "Déjà Vu",
            "Dakiti"
        ]
    }
]

export function obtenerCancionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    const cancionSeleccionada = canciones[indiceAleatorio];
    
    return {
        ...cancionSeleccionada,
        opciones: opcionAleatoria(cancionSeleccionada.opciones)
    };
}

function opcionAleatoria(array) {
    const opciones = [...array];
    for (let i = opciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
    return opciones;
}

export function obtenerCancionesAleatorias(cantidad = 10) {
    const cancionesDisponibles = [...canciones];
    const cancionesSeleccionadas = [];
    
    for (let i = 0; i < cantidad && cancionesDisponibles.length > 0; i++) {
        const indiceAleatorio = Math.floor(Math.random() * cancionesDisponibles.length);
        const cancionSeleccionada = cancionesDisponibles.splice(indiceAleatorio, 1)[0];
        
        cancionesSeleccionadas.push({
            ...cancionSeleccionada,
            opciones: opcionAleatoria(cancionSeleccionada.opciones)
        });
    }
    
    return cancionesSeleccionadas;
}