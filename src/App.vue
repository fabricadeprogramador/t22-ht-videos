<template>
  <div>
    <usuario v-on:click="this.selecionarUsuario(usuario)"></usuario>
  </div>
</template>

<script>
import Usuario from './components/Usuario.vue'
export default {
  name: 'App',
  components: {
    Usuario
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
