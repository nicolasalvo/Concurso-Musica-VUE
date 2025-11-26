<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>
<script>
import { defineComponent } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
})
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>
