<template>
  <div class="formulario" >
    <v-flex xs12>
      <v-layout  align-center justify-center row >
      <span class="span-texto">Cadastro de Categoria</span>
      </v-layout>
    </v-flex>
    <form>
      <v-text-field
        v-model="categoria.nome"
        v-validate="'required|min:4|max:30'"
        :counter="30"
        :error-messages="errors.collect('nome')"
        label="Nome"
        data-vv-name="nome"
        required>
      </v-text-field>
       
      <v-list subheader two-line>
        <v-subheader :class="{erro: !nenhumFilmeFoiSelecionado && nenhumaOpcaoSelecionada}">
          Selecione um ou mais filmes para a categoria
          </v-subheader>
        <v-list-tile v-for="(filme, index) in filmesSelecionados" :key="index">
          <v-list-tile-action>
            <v-checkbox v-model="filme.selecionado"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ filme.titulo }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  
      <div class="botoes">
        <v-btn outline color="white" @click="voltar">Voltar</v-btn>
        <v-btn color="success" :disabled="desabilitarBotaoSalvar" @click="salvar">Salvar</v-btn> 
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CategoriaCadastro',
  $_veeValidate: {
    validator: 'new'
  },
  data (){
    return {
      filmesSelecionados :[],
      nenhumFilmeFoiSelecionado: true,
      categoria:{
        nome:'',
        filmes:[]
      },
      dictionary: {
        custom: {
          nome: {
            required: () => 'Informe o nome do filme',
            max: () => 'Nome muito grande',
            min: () => 'Nome muito pequeno',
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getFilmes',
      'getCategoria'
    ]),
    formularioInvalido() {
      return this.errors.items.length > 0;
    },
    nenhumaOpcaoSelecionada(){
      let quantidadeFilmesSelecionados = this.filmesSelecionados.filter(filme => filme.selecionado).length;
      if( quantidadeFilmesSelecionados !== 0 && this.nenhumFilmeFoiSelecionado){
        this.nenhumFilmeFoiSelecionado = false;
      }
     
      return quantidadeFilmesSelecionados === 0;
    },
    desabilitarBotaoSalvar(){
      return this.formularioInvalido || this.nenhumaOpcaoSelecionada;
    }
  },
  methods:{
    ...mapActions([
      'buscarFilmes',
      'salvarCategoria',
      'editarCategoria'
    ]),
    selecionarFilmes() {
      if (this.categoria.filmes === undefined) {
        this.filmesSelecionados = this.getFilmes;
      } 
      else {
        this.filmesSelecionados = this.getFilmes.reduce((acc,filme)=>{
          acc.push({
            _id: filme._id,
            titulo: filme.titulo,
            chave: filme.chave,
            selecionado: this.categoria.filmes.find(filmeCategoria => filmeCategoria._id === filme._id)
          })
          return acc;
        }, [])
      }
    },
    salvar() {
      this.$validator.validateAll();
      if (!this.errors.items.length) {
        this.categoria.filmes = this.filmesSelecionados.filter(
          (filme) => filme.selecionado 
        );
        
        if (this.categoria.filmes.length) {
          if (this.categoria._id) {
            this.editarCategoria(this.categoria)
            .then( ({ data } ) => {
              alert(data);
              this.voltar();
            })
          } 
          else {
            this.salvarCategoria(this.categoria)
            .then( ({ data } ) => {
              alert(data);
              this.voltar();
            })
          }
        } 
      }
    
    },
    voltar(){
      this.$router.go(-1);
    }
  },
  mounted() {
    this.$validator.localize('en', this.dictionary);
    this.categoria = this.getCategoria;
    this.buscarFilmes().then(() => {
      this.selecionarFilmes();
    })
  }
}
</script>

<style>
  body {
    font-family: 'Helvetica';
  }

  .formulario{
    width: 70%;
    margin: 0 auto;
  }

  .botoes{
      display: flex;
      justify-content: space-between; 
      width: 100%;
      padding: 8px 0;
  }

  .v-btn {
    margin: 0px;
  }

  .v-input {
    margin-bottom: 16px;
  }

  .erro{
    color:#ff5252 !important;
  }
  
   @media only screen and (max-width: 640px)
  {
    .span-texto {
      font-size: 30px;
    }
    .formulario{
      width: 80%;
    }
   
  }
</style>