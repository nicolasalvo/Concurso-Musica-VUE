<template>
  <div class="concurso-container">
    <div class="tarjetaConcurso">
      <h2>Adivina la Canción</h2>
      <p>
        Pon a prueba tu conocimiento musical. <br />
        Te saldrán 10 fragmentos de 5 segundos cada uno y tendrás que adivinar la canción correcta
        entre 4 opciones.
      </p>
      <div class="pasos">
        <h4>¿Cómo se juega?</h4>
        <ol>
          <li>Escucha el fragmento de la canción.</li>
          <li>Elige la respuesta correcta entre 4 opciones.</li>
          <li>¡Compite por las mejores puntuaciones!</li>
        </ol>
      </div>
      <form class="form-jugar">
        <label for="nombre-jugador"><b>Tu nombre</b></label>
        <input id="nombre-jugador" type="text" placeholder="Ingresa tu nombre" v-model="nombre" required />
        <div class="botones-container">
          <button @click="guardarNombre" class="boton-jugar" :disabled="!nombre.trim()">Jugar</button>
          <router-link to="/ranking" class="boton-ranking">Ver Ranking</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConcursoComponent',
  data() {
    return {
      nombre: '',
    }
  },
  methods: {
    guardarNombre() {
      localStorage.setItem('playerName', this.nombre.trim())
      this.$router.push('/juego')
    },
  },
}
</script>
<style scoped>
.concurso-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: #f0f4f8;
}

.tarjetaConcurso {
  border: 2px solid rgb(10, 6, 58);
  border-radius: 15px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  margin: auto;
  text-align: center;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.logo-concurso {
  width: 100px;
  margin-bottom: 1rem;
}

.tarjetaConcurso h2 {
  color: rgb(10, 6, 58);
  margin-bottom: 1rem;
}

.tarjetaConcurso p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.pasos {
  text-align: left;
  margin: 1.5rem auto;
  padding: 1rem;
  background-color: rgba(99, 167, 245, 0.1);
  border-left: 4px solid rgb(29, 113, 238);
  border-radius: 5px;
}

.pasos h4 {
  margin-top: 0;
  color: rgb(10, 6, 58);
}

.pasos ol {
  padding-left: 1.5rem;
  margin-bottom: 0;
}

.form-jugar label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgb(10, 6, 58);
}

.form-jugar input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

.botones-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.boton-jugar,
.boton-ranking {
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.boton-jugar {
  background-color: rgb(29, 113, 238);
}

.boton-jugar:hover {
  background-color: rgba(29, 113, 238, 0.8);
}

.boton-ranking {
  background-color: rgb(10, 6, 58);
}

.boton-ranking:hover {
  background-color: rgba(10, 6, 58, 0.8);
}
</style>
