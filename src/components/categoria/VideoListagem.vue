<template>
    <lista
        titulo="Videos"
            :items="getNomeVideo"
            @editar="editar" @deletar="deletar"
    />
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        computed:{
        ...mapGetters([
            'getNomeVideo'
        ])
        },
        methods:{
            editar(){

            },
            deletar(){

            }
        }
    }
</script>

