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
        v-validate="'required|max:40'"
        :counter="40"
        :error-messages="errors.collect('filme.titulo')"
        label="Título do Filme"
        data-vv-name="filme.titulo"
        required
      />

      <v-text-field
        v-model="filme.chave"
        v-validate="'required|max:12'"
        :counter="12"
        :error-messages="errors.collect('filme.chave')"
        label="ID"
        data-vv-name="filme.chave"
        required
      />

      <div class="botoes">
        <v-btn outline color="white" @click="voltar">Voltar</v-btn>
        <v-btn color="success" @click="salvar">Salvar</v-btn> 
      </div>
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
  data() {
    return{
      categoriaSelecionadas: [],
      filme: {
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
      if( this.filme._id) {
        this.editarFilme(this.filme)
        .then(({ data }) => {
          alert(data);
          this.voltar();
        })
      } 
      else {
        this.salvarFilme(this.filme)
        .then(({ data }) => {
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
    this.$validator.localize(this.dictionary);
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
    margin: 0 auto;
  }

  .botoes {
      display: flex;
      justify-content: space-between; 
      width: 100%;
      padding: 8px 0;
  }

  .v-btn {
    margin: 0px;
  }
</style>