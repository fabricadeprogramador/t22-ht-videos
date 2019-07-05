<template>
  <div class="div-main flex">
    <div class="div-second flex">
    <v-flex xs12>
      <v-layout  align-center justify-center row >
      <span id="span-texto">Quem está assistindo?</span>
      </v-layout>
    </v-flex>

    <v-flex xs8 sm12 class="mt-4">
      <v-layout wrap align-center row justify-center>
        <div class="div-usuario mx-2" v-for="usuario in getUsuarios" :key="usuario.id" @click="selecionarUsuario(usuario)">
          <img class="icon-usuario" :src="usuario.imagem">
          <span class="nome-usuario">{{ usuario.nome }}</span>
        </div>
      </v-layout>
    </v-flex>
  </div>
  
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'usuario',
  computed:{
    ...mapGetters([
      'getUsuarios'
    ])
  },
  mounted(){
    this.logarUsuario();
  },
  methods:{
    ...mapMutations([
      'setUsuario'
    ]),
    ...mapActions([
      'logarUsuario'
    ]),
    selecionarUsuario(usuario) {
      this.setUsuario(usuario);
      this.$router.push('/categorias');
    }
  }
}
</script>

<style>
  body {
    font-family: 'Helvetica';
  }
  .div-main{
    height: calc(100% - 64px);
  }
  .icon-usuario {
    border: rgb(37, 37, 37) 4px solid;
    border-radius: 5px;
    height: 10vw;
    width: 10vw;
    min-height: 84px;
    min-width: 84px;
    position: relative; 
  }

  /* .div-usuario{
    width: 140px
  } */

  .div-usuario:hover span {
    color: white;
    cursor: pointer;
  }

  .div-usuario:hover img {
    border: 4px solid white;
    cursor: pointer;
  }

  .div-second {
    text-align: center;
    flex-direction: column; 
    width: 100%;
  }

  .div-usuarios {
    display: flex;
    cursor: default;
    justify-content: center;
    align-items: center;

  }

  .flex {
    display: flex;
    cursor: default;
    justify-content: center;
    align-items: center;
  }

  #span-texto {
    color: white;
    font-size: 40px;
  }

  .nome-usuario {
    display: block;
    text-align: center;
    font-size: 15pt;
    color: gray;
  }

  @media only screen and (max-width: 640px)
  {
    #span-texto {
      font-size: 30px;
    }
  }

</style>