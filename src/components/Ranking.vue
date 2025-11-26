<template>
  <div class="tarjetaRanking">
    <div>
      <h2>Ranking de Clasificación</h2>
      <p>Las mejores puntuaciones hasta ahora</p>
    </div>
    <div>
      <h4 class="tituloJugadores">Mejores 10 Jugadores</h4>
    </div>
    <div class="lista-ranking">
      <div v-if="puntuaciones.length === 0" class="sin-puntuaciones">
        <p>¡Aún no hay puntuaciones!</p>
        <p>Sé el primero en jugar y aparece en el ranking.</p>
      </div>
      <div v-else class="tabla-ranking">
        <div class="fila-header">
          <span class="posicion">Pos</span>
          <span class="nombre">Nombre</span>
          <span class="puntos">Puntos</span>
        </div>
        <div 
          v-for="(puntuacion, index) in puntuaciones" 
          :key="index" 
          class="fila-jugador"
          :class="{ 'primer-lugar': index === 0, 'segundo-lugar': index === 1, 'tercer-lugar': index === 2 }"
        >
          <span class="posicion">
            <span v-if="index === 0">🥇</span>
            <span v-else-if="index === 1">🥈</span>
            <span v-else-if="index === 2">🥉</span>
            <span v-else>{{ index + 1 }}</span>
          </span>
          <span class="nombre">{{ puntuacion.nombre }}</span>
          <span class="puntos">{{ puntuacion.puntos }}</span>
        </div>
      </div>
    </div>
    <div class="botones">
      <router-link to="/" class="inicio">Volver al Inicio</router-link>
      <router-link to="/jugar" class="jugar">Jugar Ahora</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RankingComponent',
  data() {
    return {
      puntuaciones: []
    }
  },
  created() {
    this.cargarPuntuaciones()
  },
  methods: {
    cargarPuntuaciones() {
      const puntuacionesGuardadas = localStorage.getItem('puntuaciones')
      if (puntuacionesGuardadas) {
        this.puntuaciones = JSON.parse(puntuacionesGuardadas)
      }
    }
  }
}
</script>
<style scoped>
.tarjetaRanking {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid rgb(10, 6, 58);
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  background-color: #ffffff;
  color: rgb(10, 6, 58);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tituloJugadores {
    background-color: rgb(10, 6, 58);
    color: white;
    padding: 10px;
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 700px;
    text-align: center;
    height: 20px;
}

.botones {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.inicio {
    background-color: rgb(255, 255, 255);
    color: rgb(10, 6, 58);
    border: 1px solid rgb(10, 6, 58);
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
}

.inicio:hover {
    background-color: rgb(10, 6, 58);
    color: #ffffff;
    transition: all 0.2s ease-in-out;
}

.jugar {
    background-color: rgb(255, 255, 255);
    color: rgb(10, 6, 58);
    border: 1px solid rgb(10, 6, 58);
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
}

.jugar:hover {
    background-color: rgb(10, 6, 58);
    color: #ffffff;
    transition: all 0.2s ease-in-out;
}

.lista-ranking {
    width: 100%;
    max-width: 800px;
    margin: 20px 0;
}

.sin-puntuaciones {
    text-align: center;
    padding: 40px;
    color: #666;
}

.tabla-ranking {
    width: 100%;
}

.fila-header {
    display: grid;
    grid-template-columns: 80px 1fr 100px;
    gap: 15px;
    padding: 15px;
    background-color: rgb(10, 6, 58);
    color: white;
    font-weight: bold;
    border-radius: 8px 8px 0 0;
}

.fila-jugador {
    display: grid;
    grid-template-columns: 80px 1fr 100px;
    gap: 15px;
    padding: 15px;
    border-bottom: 1px solid #e0e0e0;
    align-items: center;
}

.fila-jugador:last-child {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
}

.fila-jugador:nth-child(even) {
    background-color: #f9f9f9;
}

.primer-lugar {
    background-color: #fff3e0 !important;
    border-left: 4px solid #FFD700;
}

.segundo-lugar {
    background-color: #f5f5f5 !important;
    border-left: 4px solid #C0C0C0;
}

.tercer-lugar {
    background-color: #ffeaa7 !important;
    border-left: 4px solid #CD7F32;
}

.posicion {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
}

.nombre {
    font-weight: 500;
}

.puntos {
    text-align: center;
    font-weight: bold;
    color: rgb(10, 6, 58);
}
</style>
