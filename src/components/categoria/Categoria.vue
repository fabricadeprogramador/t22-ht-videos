<template>
    <div>
        <div v-for="categoria of getListaCategorias" :key="categoria.nome" class="categoria">
            <div class="nome-categoria">           
                <span class="span-categoria">{{categoria.nome}}</span>
            </div>
           <div class="videos">
                <v-icon color=white x-large id="icon-forward" @click="moverVideos()">keyboard_arrow_right</v-icon>
                <div v-for="(video, index) of categoria.videos" :key="video.id" >
                <filme :filme="video"
                :index="index"></filme>
                </div>
            </div>          
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Filme from '@/components/Filme'
export default {
    components: {Filme},
    computed:{
      ...mapGetters([
        'getListaCategorias',
        'getUsuario'
      ])
    },
    beforeMount(){
        //console.log('beforeMount');
    },
    beforeCreate(){
        //console.log('beforeCreate');
    },
    created(){
        //console.log('created');
        //console.log(this.getUsuario);
        if(!this.getUsuario.id){
            this.$router.push('/');
        }
    }
}

</script>

<style>
.categoria {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    padding-bottom: 20px;
    background: #303030;
    margin-top: 30px;
    margin-bottom: -50px;  
    bottom: 20px;  
}

.videos {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 170px;
    width: 100%;
}

.video {
    overflow: auto;
}

.nome-categoria {
    position: absolute;
    z-index: 1;
}

.span-categoria {
    font-size: 16pt;
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 5px;
}

#icon-forward {
    position: absolute;
    z-index: 1;
    left: 1240px;
}

</style>

