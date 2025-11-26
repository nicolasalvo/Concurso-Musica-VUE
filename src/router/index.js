import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../components/Inicio.vue'
import Ranking from '../components/Ranking.vue'
import Concurso from '../components/Concurso.vue'
import Juego from '../components/Juego.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/jugar',
      name: 'Concurso',
      component: Concurso
    },
    {
      path: '/juego',
      name: 'Juego',
      component: Juego
    }
  ],
})

export default router
