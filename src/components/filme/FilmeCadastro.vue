<template>
  <div class="formulario" >
    <v-flex xs12>
      <v-layout  align-center justify-center row >
      <span class="span-texto">Cadastro de Filme</span>
      </v-layout>
    </v-flex>
    <form>
      <v-text-field
        v-model="filme.titulo"
        v-validate="'required|max:30'"
        :counter="30"
        :error-messages="errors.collect('titulo')"
        label="Título do Filme"
        data-vv-name="titulo"
        required
      />

      <v-text-field
        v-model="filme.chave"
        v-validate="'required|max:11'"
        :counter="11"
        :error-messages="errors.collect('chave')"
        label="Chave"
        data-vv-name="chave"
        required
      />

      <v-btn color="success" @click="salvar">Salvar</v-btn>
      <v-btn outline color="white" @click="voltar">Voltar</v-btn>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'FilmeCadastro',
  $_veeValidate: {
    validator: 'new'
  },
  computed:{
    ...mapGetters([
      'getNomeCategoria',
      'getFilme',
      'getCategorias'
    ])
  },
  data(){
    return{
      categoriaSelecionadas :[],
      filme:{
        titulo: '',
        chave: ''
      }
    } 
  },
  methods: {
    ...mapActions([
      'salvarFilme',
      'editarFilme'
    ]),
    salvar() {
      if( this.filme._id){
        this.editarFilme(this.filme)
        .then( ({ data } ) => {
          alert(data);
          this.voltar();
        })
      } 
      else {
        this.salvarFilme(this.filme)
        .then( ({ data } ) => {
          alert(data);
          this.voltar();
        })
      }
    },
    voltar() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.filme = this.getFilme;
  }
}
</script>

<style>
  body {
    font-family: 'Helvetica';
  } 
  .formulario{
    width: 50%;
    margin: auto;
  }
</style>