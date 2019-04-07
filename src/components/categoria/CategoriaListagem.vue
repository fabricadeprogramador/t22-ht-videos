<template>
<div>
    <lista
        titulo="Categorias"
        :items="getNomeCategoria"
        @editar="editar" @deletar="deletar"
    />

</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
      ...mapGetters([
        'getNomeCategoria'
      ])
    },
    methods: {
        editar(item) {
            this.$router.push("categorias")
        }, 
        deletar(item) {
            alert("Deletar")
        }
    }
}
</script>

<style>

</style>


