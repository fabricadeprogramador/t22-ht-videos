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
        :error-messages="errors.collect('titulo')"
        label="Título do Filme"
        data-vv-name="titulo"
        required
      />

      <v-text-field
        v-model="filme.chave"
        v-validate="'required|max:12'"
        :counter="12"
        :error-messages="errors.collect('chave')"
        label="Chave"
        data-vv-name="chave"
        required
      />

      <div class="botoes">
        <v-btn outline color="white" @click="voltar">Voltar</v-btn>
        <v-btn color="success" @click="salvar" :disabled="formularioInvalido">Salvar</v-btn> 
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
    ]),
    formularioInvalido() {
    
      return this.errors.items.length > 0;
    }
  },
  data(){
    return{
      categoriaSelecionadas: [],
      filme:{
        titulo: '',
        chave: ''
      },
      dictionary: {
        
          filme:{

            titulo: {
            required: () => 'Your email is empty',
              max:'hbvgcvnkl'
          },
          chave: {
            required: () => 'Your name is empty'
          }

        }
       
      }
    } 
  },
  methods: {
    ...mapActions([
      'salvarFilme',
      'editarFilme'
    ]),
    salvar(){
      this.$validator.validateAll()

    },
    salvar1() {
      if(this.filme._id) {
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
    this.filme = this.getFilme;
    this.$validator.localize(this.dictionary);
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