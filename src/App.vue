<template>
  <div>
    <usuario v-on:click="this.selecionarUsuario(usuario)"></usuario>
  </div>
</template>

<script>
import usuario from './components/usuario.vue'
export default {
  name: 'app',
  components: {
    usuario
  },
  methods:{
    selecionarUsuario() {
      alert("aaaaaaaaa");
      console.log(usuario.id);
    }
  }
}
</script>

<style>
body {
  background: #141414;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
