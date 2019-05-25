<template>
  <lista
    titulo="Filmes"
    :items="getFilmes"
    @editar="editar" 
    @deletar="deletar"
  />
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters([
        'getFilmes'
    ])
  },
  data(){
    return{
      videos:[]
    }
  },
  created(){
    this.buscarFilmes()
  },
  methods:{
    ...mapActions([
      'buscarFilmes'
    ]),
    editar(){

    },
    deletar(){

    }
  }
}
</script>