<template>
  <div class="primeraSeccion">
    <img src="../images/imagenPrimeraSeccion.png" alt="Logo" class="imagenSeccion1" />
    <h3>¿Cuánto sabes de música?</h3>
    <p>
      Pon a prueba tu conocimiento musical. Te saldran 10 fragmentos de 5 segundos cada una y
      tendrás que adivinar la canción correcta entre 4 opciones. Compite por las mejores
      puntuaciones!
    </p>
    <div class="botones-container">
      <router-link to="/jugar" class="botonJugar">¡Jugar Ahora!</router-link>
      <router-link to="/ranking" class="botonRanking">Ver Ranking</router-link>
    </div>
  </div>
  <div class="segundaSeccion">
    <div class="entradaSegundaSeccion">
      <h3>¿Cómo funciona?</h3>
      <br />
      <h4>Esto consta de 3 sencillos pasos:</h4>
    </div>
    <div class="tarjetas-container">
      <div class="tarjeta">
        <img src="../images/auriculares.png" alt="Paso 1" class="imagenTarjeta1" />
        <h4>Escucha</h4>
        <br />
        <p>Escucharás un fragmento de 5 segundos de una canción popular.</p>
      </div>
      <div class="tarjeta">
        <img src="../images/imagenSegundaSeccion.png" alt="Paso 2" class="imagenTarjeta2" />
        <h4>Adivina</h4>
        <br />
        <p>Elige la respuesta correcta entre 4 opciones posibles.</p>
      </div>
      <div class="tarjeta">
        <img src="../images/imagenTerceraSeccion.png" alt="Paso 3" class="imagenTarjeta3" />
        <h4>Compite</h4>
        <br />
        <p>Adivina el máximo de canciones posibles para aparecer en el <b>ranking</b>.</p>
      </div>
    </div>
    <div class="terceraSeccion">
      <h2>¿Listo para el desafio?</h2>
      <div class="tarjetaDesafio">
        <img src="../images/imagenDesafio.png" alt="Desafío" style="width: 70px; margin: 10px;"/>
        <h3>¡Acepta el reto y demuestra tus conocimientos musicales!</h3>
        <br />
        <p>Demuestra todo lo que sabes sobre las canciones del momento!</p>
        <br />
        <router-link to="/jugar" class="botonDesafio">Jugar <FontAwesomeIcon icon="fas fa-play" /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default {
  name: 'InicioComponent',
  components: {
    FontAwesomeIcon,
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

html {
  margin: 0;
  padding: 0;
}

.primeraSeccion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #7497f8, #999bfc);
  height: 50vh;
  text-align: center;
  padding: 0 2rem;
}

.terceraSeccion {
  margin-top: 50px;
  margin-bottom: 50px;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.primeraSeccion p {
  margin: 1rem 0 1.5rem 0;
  max-width: 700px;
}

.imagenTarjeta1 {
  width: 120px;
  margin-bottom: 1rem;
  background-color: rgba(5, 26, 116, 0.219);
  border-radius: 100px;
}

.imagenTarjeta2 {
  width: 120px;
  margin-bottom: 1rem;
  background-color: rgba(228, 69, 69, 0.219);
  border-radius: 100px;
}

.imagenTarjeta3 {
  width: 120px;
  margin-bottom: 1rem;
  background-color: rgba(247, 243, 60, 0.219);
  border-radius: 100px;
}

.botones-container {
  display: flex;
  gap: 1rem;
}

.botonJugar {
  background-color: rgb(29, 113, 238);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
}

.botonDesafio {
  background-color: rgb(29, 113, 238);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
}

.botonDesafio:hover {
  background-color: rgba(29, 113, 238, 0.76);
}

.botonRanking {
  background-color: white;
  color: rgb(0, 0, 0);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
}

.botonJugar:hover {
  background-color: rgba(29, 113, 238, 0.76);
}

.botonRanking:hover {
  background-color: rgb(230, 230, 230);
}

.imagenSeccion1 {
  width: 250px;
  margin-bottom: 1rem;
}


.tarjetaDesafio {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid rgb(10, 6, 58);
  border-radius: 10px;
  width: 900px;
  height: 310px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.1);
  background-color: rgba(4, 0, 228, 0.144);
}

.tarjeta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 400px;
  height: 300px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.1);
}

.tarjeta:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

.tarjetas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.entradaSegundaSeccion {
  text-align: center;
  margin-top: 2rem;
}
</style>
