<template>
  <div class="main-categoria">
    <div v-for="categoria of getListaCategorias" :key="categoria._id" 
      class="categoria" 
      :id="categoria._id"
    >
      <div class="nome-categoria">
        <span class="span-categoria">{{ categoria.nome }}</span>
      </div>
      <div class="videos">
        <v-icon 
          color=white 
          x-large 
          id="seta-esquerda" 
          @click="moverVideosEsquerda(categoria)"> 
            keyboard_arrow_left
        </v-icon>
        <v-icon 
          color=white 
          x-large 
          id="seta-direita" 
          @click="moverVideosDireita(categoria)"> 
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
    moverVideosDireita(categoria) {
      document.getElementById(categoria._id).scrollLeft += 310;
    },
    moverVideosEsquerda(categoria) {
      document.getElementById(categoria._id).scrollLeft -= 310;
    }
  }
}
</script>

<style>
  .categoria {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
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

  #seta-direita {
    position: absolute;
    z-index: 1;
    align-self: center;
    justify-content: center;
  }

  #seta-esquerda {
    position: absolute;
    z-index: 1;
    left: 10px;
    align-self: center;
    justify-content: center;
  }

  .main-categoria {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 640px) {
    .videos {
      height: 95px; 
      margin-top: 32px;
    }

    .categoria {
      margin-top: 10px;  
    }

    .span-categoria {
    font-size: 13pt;
    margin-left: 7px;
    }

    .main-categoria {
      margin-bottom: 133px;
    }

    #seta-esquerda {
      left: -4px;
    }

    #seta-direita {
      right: -4px;
    }
  }
</style>
