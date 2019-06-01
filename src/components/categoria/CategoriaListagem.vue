<template>
<div>
  <lista
    titulo="Categorias"
    :items="getCategorias"
    @editar="editar" 
    @deletar="deletar"
    @inserir="inserir"
  />
</div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'getCategorias'
    ])
  },
  methods: {
      editar(categoria) {
        this.setCategoria(categoria);
        this.$router.push("categoria-cadastro")
      },
      inserir(){
        this.$router.push("categoria-cadastro")
      },  
      
      deletar(categoria) {
         this.excluirCategoria(categoria)
        .then( ({ data } ) => {
          alert(data);
        }) 
      },
      ...mapActions([
      'excluirCategoria'
    ]),
    ...mapMutations([
      'setCategoria'
    ])
  }
}
</script>

<style>

</style>


