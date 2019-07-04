<template>
  <div>
    <div v-for="categoria of getListaCategorias" :key="categoria._id" 
      class="categoria" 
      :id="categoria._id"
    >
      <div class="nome-categoria">
        <span class="span-categoria">{{categoria.nome}}</span>
      </div>
      <div class="videos"  >
        <v-icon 
          color=white 
          x-large 
          id="icon-forward" 
          @click="moverVideos(categoria)" > 
            keyboard_arrow_right
        </v-icon>
        <div v-for="(video, index) of categoria.filmes" :key="video.id"  >
          <filme 
            :filme="video" 
            :index="index">
          </filme>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Filme from '@/components/Filme'
export default {
  components: {
    Filme
  },
  computed:{
    ...mapGetters([
      'getListaCategorias',
      'getUsuario'
    ])
  },
  created(){
    if(!this.getUsuario.id){
      this.$router.push('/');
    }
    this.buscarCategorias();
  },
  methods:{
    ...mapActions([
      'buscarCategorias'
    ]),
    moverVideos(categoria){
      document.getElementById(categoria._id).scrollTo(280,0);
    }
  }
}
</script>

<style>
  .categoria {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
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
  }

  
</style>
