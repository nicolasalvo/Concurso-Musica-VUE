<template>
  <div>
    <!-- Pantalla de juego terminado -->
    <div v-if="juegoTerminado" class="pantalla-final">
      <div class="tarjeta-final">
        <h2>¡Juego Terminado!</h2>
        <div class="resultado">
          <FontAwesomeIcon icon="fa-solid fa-trophy" class="icono-trofeo" />
          <h3>{{ playerName }}</h3>
          <p class="puntos-final">{{ puntos }} puntos</p>
          <p class="mensaje-final">{{ puntos >= 70 ? '¡Excelente!' : puntos >= 50 ? '¡Bien hecho!' : '¡Sigue practicando!' }}</p>
        </div>
        <router-link to="/ranking" class="boton-ranking-final">Ver Ranking</router-link>
      </div>
    </div>
    
    <div v-else class="estructuraInformacion">
      <div class="cancionSeleccionada">
        <div class="nombre">
          <div>
            <h2>Adivina la Canción</h2>
            <p>{{ playerName }}</p>
          </div>
          <div class="puntos">
            <p><FontAwesomeIcon icon="fa-solid fa-trophy"></FontAwesomeIcon> {{ puntos }} Puntos</p>
          </div>
        </div>
        <div class="contenedorPregunta">
          <p>Pregunta {{ index + 1 }} de 10</p>
        </div>
      </div>
      <div class="tarjetaCancion">
        <div class="contenedor-barra-progreso">
          <div class="barra-progreso-fondo">
            <div 
              class="barra-progreso" 
              :style="{ width: tiempoRestante + '%' }"
              :class="{ 'reproduciendo': reproduciendo }"
            ></div>
          </div>
          <span class="texto-tiempo" v-if="reproduciendo">
            {{ Math.ceil((tiempoRestante / 100) * 5) }}s restantes
          </span>
          <span class="texto-tiempo" v-else>
            Presiona para escuchar el fragmento
          </span>
        </div>
        <img src="../images/imagenLogo.png" style="width: 60%" class="logo" /><br />
        <button 
          @click="reproducirFragmentoAleatorio" 
          class="boton-reproducir"
          :disabled="reproduciendo || fragmentoReproducido"
        >
          {{ 
            fragmentoReproducido ? 'Reproducido...' : 
            'Reproducir Fragmento' 
          }}
        </button>
        <h3>¿Qué canción es esta?</h3>
        <div v-if="respuestaSeleccionada" class="mensaje-respuesta">
          <p v-if="respuestaSeleccionada === cancion.titulo" class="mensaje-correcto">
            ¡Correcto! La canción es "{{ cancion.titulo }}" de {{ cancion.artista }}
          </p>
          <p v-else class="mensaje-incorrecto">
            Incorrecto. La canción es "{{ cancion.titulo }}" de {{ cancion.artista }}
          </p>
        </div>
        <div class="opciones">
          <button 
            v-for="(opcion, opcionIndex) in opciones" 
            :key="opcionIndex" 
            @click="seleccionarOpcion(opcion)"
            :class="{ 
              'opcionBoton': true,
              'correcta': respuestaSeleccionada && opcion === cancion.titulo,
              'incorrecta': respuestaSeleccionada && opcion === respuestaSeleccionada && opcion !== cancion.titulo,
              'deshabilitada': respuestaSeleccionada
            }"
            :disabled="respuestaSeleccionada"
          >
            {{ opcion }}
          </button>
        </div>
        <div v-if="respuestaSeleccionada" class="botonSiguiente">
          <button @click="siguientePregunta" class="siguiente">
            {{ index < 9 ? 'Siguiente pregunta' : 'Finalizar juego' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { obtenerCancionesAleatorias } from '../bilbiografia.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default {
  name: 'JuegoComponent',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      playerName: '',
      cancionesJuego: [],
      index: 0,
      cancion: null,
      puntos: 0,
      opciones: [],
      audioPlayer: null,
      temporizador: null,
      respuestaSeleccionada: null,
      juegoTerminado: false,
      tiempoRestante: 100,
      reproduciendo: false,
      intervaloBarra: null,
      fragmentoReproducido: false,
    }
  },
  created() {
    const storedPlayerName = localStorage.getItem('playerName')
    if (storedPlayerName) {
      this.playerName = storedPlayerName
    }
    
    this.cancionesJuego = obtenerCancionesAleatorias(10)
    this.cancion = this.cancionesJuego[0]
    this.opciones = this.cancion.opciones
    this.fragmentoReproducido = false
  },
  methods: {
    reproducirFragmentoAleatorio() {
      if (this.fragmentoReproducido) {
        return; // No repetir
      }
      if (this.temporizador) {
        clearTimeout(this.temporizador)
      }
      if (this.intervaloBarra) {
        clearInterval(this.intervaloBarra)
      }
      
      this.reproduciendo = true
      this.fragmentoReproducido = true
      this.tiempoRestante = 100
      
      this.audioPlayer = new Audio(this.cancion.url)

      this.audioPlayer.addEventListener('loadedmetadata', () => {
        const duracionTotal = this.audioPlayer.duration

        if (duracionTotal > 5) {
          const maxStartTime = duracionTotal - 5
          const startTime = Math.random() * maxStartTime
          this.audioPlayer.currentTime = startTime
          
          const iniciarFragmento = this.audioPlayer.play()
          
          if (iniciarFragmento !== undefined) {
            iniciarFragmento
              .then(() => {
                this.iniciarBarraProgreso()
                
                this.temporizador = setTimeout(() => {
                  this.audioPlayer.pause()
                  this.detenerBarraProgreso()
                }, 5000)
              })
              .catch((error) => {
                console.error('Error al reproducir:', error)
              })
          }
        } 
      })

      this.audioPlayer.load()
    },
    
    seleccionarOpcion(opcion) {
      if (this.respuestaSeleccionada) return
      
      this.respuestaSeleccionada = opcion
      
      if (opcion === this.cancion.titulo) {
        this.puntos += 10
      }
    },
    
    iniciarBarraProgreso() {
      const duracion = 5000 
      const intervalo = 50 
      const decremento = (100 / duracion) * intervalo
      
      this.intervaloBarra = setInterval(() => {
        this.tiempoRestante -= decremento
        if (this.tiempoRestante <= 0) {
          this.tiempoRestante = 0
          this.detenerBarraProgreso()
        }
      }, intervalo)
    },
    
    detenerBarraProgreso() {
      if (this.intervaloBarra) {
        clearInterval(this.intervaloBarra)
        this.intervaloBarra = null
      }
      this.reproduciendo = false
      this.tiempoRestante = 100
    },
    
    siguientePregunta() {
      if (this.index < 9) {
        this.index++
        this.cancion = this.cancionesJuego[this.index]
        this.opciones = this.cancion.opciones
        this.respuestaSeleccionada = null
        this.fragmentoReproducido = false 
        
        if (this.audioPlayer) {
          this.audioPlayer.pause()
        }
        if (this.temporizador) {
          clearTimeout(this.temporizador)
        }
        this.detenerBarraProgreso()
      } else {
        this.finalizarJuego()
      }
    },
    
    finalizarJuego() {
      this.juegoTerminado = true
      if (this.audioPlayer) {
        this.audioPlayer.pause()
      }
      if (this.temporizador) {
        clearTimeout(this.temporizador)
      }
      this.detenerBarraProgreso()
      
      const puntuacionFinal = {
        nombre: this.playerName,
        puntos: this.puntos
      }
      
      const puntuaciones = JSON.parse(localStorage.getItem('puntuaciones') || '[]')
      puntuaciones.push(puntuacionFinal)
      
      puntuaciones.sort((a, b) => b.puntos - a.puntos)
      localStorage.setItem('puntuaciones', JSON.stringify(puntuaciones.slice(0, 10)))
      
    }
  },
}
</script>
<style scoped>
.estructuraInformacion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  background-color: #f0f4f8;
}
.cancionSeleccionada {
  width: 700px;
}

.nombre {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.puntos {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.puntos p {
  margin: 0;
}

.tarjetaCancion {
  border: 2px solid rgb(10, 6, 58);
  border-radius: 15px;
  padding: 2rem;
  max-width: 650px;
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.boton-reproducir {
  background-color: rgba(10, 6, 58, 0.61);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 1rem;
}
.boton-reproducir:hover:not(:disabled) {
  background-color: rgba(10, 6, 58, 0.808);
  transition: all 0.2s ease-in-out;
}

.boton-reproducir:disabled {
  background-color: rgba(10, 6, 58, 0.4);
  cursor: not-allowed;
}

.contenedor-barra-progreso {
  margin: 20px 0;
  text-align: center;
}

.barra-progreso-fondo {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.barra-progreso {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  border-radius: 10px;
  transition: width 0.05s linear;
  position: relative;
}

.barra-progreso.reproduciendo {
  background: linear-gradient(90deg, #FF9800, #FFC107);
}

.texto-tiempo {
  font-size: 14px;
  color: rgb(10, 6, 58);
  font-weight: 500;
}

.opcionBoton {
  display: block;
  width: 100%;
  background-color: rgb(230, 230, 230);
  color: black;
  border: 1px solid rgb(10, 6, 58);
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
}

.opcionBoton:hover:not(.deshabilitada) {
  background-color: rgba(10, 6, 58, 0.712);
  color: white;
  transition: all 0.2s ease-in-out;
}

.opcionBoton.correcta {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.opcionBoton.incorrecta {
  background-color: #f44336;
  color: white;
  border-color: #f44336;
}

.opcionBoton.deshabilitada {
  cursor: not-allowed;
  opacity: 0.7;
}

.siguiente {
  width: 100%;
  background-color: rgb(10, 6, 58);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
}

.siguiente:hover {
  background-color: rgba(10, 6, 58, 0.925);
  transition: all 0.2s ease-in-out;
}

/* Estilos para pantalla final */
.pantalla-final {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: #f0f4f8;
}

.tarjeta-final {
  border: 2px solid rgb(10, 6, 58);
  border-radius: 15px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  text-align: center;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.resultado {
  margin: 2rem 0;
}

.icono-trofeo {
  font-size: 3rem;
  color: #FFD700;
  margin-bottom: 1rem;
}

.puntos-final {
  font-size: 2rem;
  font-weight: bold;
  color: rgb(10, 6, 58);
  margin: 1rem 0;
}

.mensaje-final {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
}

.boton-ranking-final {
  background-color: rgb(10, 6, 58);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
}

.boton-ranking-final:hover {
  background-color: rgba(10, 6, 58, 0.8);
  transition: all 0.2s ease-in-out;
}

/* Estilos para mensajes de respuesta */
.mensaje-respuesta {
  margin: 15px 0;
  padding: 10px;
  border-radius: 8px;
  font-weight: 500;
}

.mensaje-correcto {
  color: #155724;
}

.mensaje-incorrecto {
  color: #721c24;
}
</style>
