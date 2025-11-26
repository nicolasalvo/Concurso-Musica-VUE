<template>
  <header>
    <div class="logo-titulo">
      <img src="../images/imagenLogo.png" alt="Imagen del logo" />
      <h2>Adivina la Canción</h2>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/jugar">Jugar</router-link></li>
        <li><router-link to="/ranking">Ranking</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
}
</script>
<style scoped>
img {
  position: relative;
  width: 70px;
  margin-right: 15px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 10px 20px;
  color: white;
  border-bottom: 2px solid rgb(10, 6, 58);
}

.logo-titulo {
  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
}

h2 {
  color: rgb(10, 6, 58);
}

a {
  font-size: 18px;
  border: 1px solid rgb(10, 6, 58);
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  margin-left: 20px;
  color: rgb(10, 6, 58);
}

a:hover {
  background-color: rgb(10, 6, 58);
  color: #ffffff;
}

li:last-child a {
  margin-right: 0;
}
</style>
