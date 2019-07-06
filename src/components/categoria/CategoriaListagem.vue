<template>
  <div class="formulario">
    <v-flex xs12>
      <v-layout  align-center justify-center row >
      <span class="span-texto">Categorias</span>
      </v-layout>
    </v-flex>
    <lista
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
      this.setCategoria({});
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