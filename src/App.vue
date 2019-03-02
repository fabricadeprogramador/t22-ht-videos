<template>
  <div>
    <usuario v-on:click="this.selecionarUsuario(usuario)"></usuario>
  </div>
</template>

<script>
import Usuario from './components/Usuario.vue'
import Video from './components/Video.vue'
export default {
  name: 'App',
  components: {
    Usuario,
    Video
  },
  methods:{
    selecionarUsuario() {
    }
  }
}
</script>

<style>
body {
  background: #141414;
}

#app {
  
}
</style>
