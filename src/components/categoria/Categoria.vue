<template>
    <div>
        <div v-for="categoria of categorias" :key="categoria.nome" class="categoria">
            <div class="nome-categoria">           
                <span class="span-categoria">{{categoria.nome}}</span>
            </div>
            <div class="videos">
                <v-icon color=white x-large id="icon-forward" @click="moverVideos()">keyboard_arrow_right</v-icon>
                <div v-for="(video, index) of categoria.videos" :key="video.id" >
                <filme :filme="video"
                :index="index"> </filme>
                </div>
            </div>       
        </div>
    </div>
</template>

<script>
import categorias from '../../data/categorias.json'
import Filme from '@/components/Filme'
export default {
    components: {Filme},
    data()
    {
        return {
            categorias
        }
    },
    methods:{
        moverVideos() {
           alert("aaaaaa");
           $( "videos" ).scrollLeft( 300 );
        //    var teste = document.getElementsByClassName("categoria");
        //    teste.scrollTop(40);                                                                  
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
    margin-bottom: -50px;  /*this was added */
    bottom: 20px;  /*this was added*/
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

