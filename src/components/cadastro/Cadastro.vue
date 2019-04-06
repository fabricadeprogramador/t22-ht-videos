<template>
  <div class="formulario" >
    <span id="span-texto">Cadastro de Filmes</span>
    
  <form>
    <v-text-field
      v-model="titulo"
      v-validate="'required|max:20'"
      :counter="20"
      :error-messages="errors.collect('titulo')"
      label="Título do Filme"
      data-vv-name="titulo"
      required
    ></v-text-field>
    <v-text-field
      v-model="id"
      v-validate="'required|max:11'"
      :counter="11"
      :error-messages="errors.collect('id')"
      label="ID"
      data-vv-name="id"
      required
    ></v-text-field>
    
    <v-select 
      v-model="select"
      v-validate="'required'"
      :items="item"
      :error-messages="errors.collect('select')"
      label="Categorias"
      data-vv-name="select"
      required
    ></v-select>
    

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    $_veeValidate: {
      validator: 'new'
    },
    computed:{
      ...mapGetters([
        'getListaCategorias',
        'getUsuario'
      ])
    },
    data: () => ({
      titulo: '',
      id: '',
      select: null,
      item: [],
      form:{},
      
      dictionary: {
        
        custom: {
          titulo: {
            required: () => 'Por favor insira um titulo ao filme',
            max: 'O campo Título deve conter até 20 caracteres'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          },
          id:{
            required: () => 'Por favor insira o ID do filme',
            max: 'O campo de ID deve conter até 11 caracteres'
            // custom messages
          }
        }
      }
    }),

    mounted () {
      this.$validator.localize(this.dictionary)

      for(var i=0; i<this.getListaCategorias.length; i++)
      {
          this.item.push (this.getListaCategorias[i].nome);
      }
    },

    methods: {
      submit () {
        this.$validator.validateAll()
        /*fetch('myapp.com/form', {
      method:'POST',
      body:JSON.stringify(this.form),
    }*/
      },
      clear () {
        this.titulo = ''
        this.id = ''
        this.select = null
        this.$validator.reset()
      }
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