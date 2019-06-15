<template>
  <div class="formulario" >
    <span id="span-texto">Cadastro de Categorias</span>
    
  <form>
    <v-text-field
      v-model="categoria.nome"
      v-validate="'required|min:4'"
      :counter="20"
      :error-messages="errors.collect('Genero')"
      label="Título do genero"
      required
    ></v-text-field>
     
     <v-list
          subheader
          two-line
        >
          <v-subheader>Selecione um ou mais filmes para a categoria</v-subheader>

          <v-list-tile v-for="(filme, index) in filmesSelecionados" :key="index">
            <v-list-tile-action>
              <v-checkbox v-model="filme.selecionado"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ filme.titulo }}</v-list-tile-title>
              
            </v-list-tile-content>
          </v-list-tile>

          
        </v-list>
    

    <v-btn @click="salvar">Salvar</v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->

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
      categoria:{
        nome:'',
        filmes:[]
      }
    }
  },
  computed: {
    ...mapGetters([
      'getFilmes',
      'getCategoria'
    ])
  },
  methods:{
    ...mapActions([
      'buscarFilmes',
      'salvarCategoria',
      'editarCategoria'
    ]),
    selecionarFilmes(){
        this.filmesSelecionados = this.getFilmes.reduce((acc,filme)=>{
          acc.push({
            _id: filme._id,
            titulo: filme.titulo,
            chave: filme.chave,
            selecionado : this.categoria.filmes.find(filmeCategoria => filmeCategoria._id === filme._id)
          })
          return acc;
        }, [])
      },
    salvar (){
      this.categoria.filmes = this.filmesSelecionados.filter(
          (filme) => filme.selecionado 
      ); 

      if( this.categoria._id){
        this.editarCategoria(this.categoria)
        .then( ({ data } ) => {
          alert(data);
        })
      }else{
        this.salvarCategoria(this.categoria)
        .then( ({ data } ) => {
          alert(data);
        })
      }
    }
  },
  mounted() {
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
  
  width: 50%;
  margin: auto;
}

</style>