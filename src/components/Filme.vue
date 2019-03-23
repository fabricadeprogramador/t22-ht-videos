<template>
  <v-content>
    <div class="video" v-if="exibirVideo === false" >
     
      <img 
          :src="'https://img.youtube.com/vi/'+filme.id+'/maxresdefault.jpg'"
          :width="300" 
          :height="170"
          :id="filme.id"
        />
          
        <v-icon class="botao-play" color="white" @click="play()" :id="filme.id">play_circle_outline</v-icon>
        <div class="titulo">
          <span>{{filme.titulo}}</span>
        </div>
      </div>
      
   
    
    <div v-else>
      <iframe 
          :id="filme.id"
          :src="'https://www.youtube.com/embed/'+filme.id+'?autoplay=1'"
          :frameborder="0"
          allow="autoplay; fullscreen">
      </iframe>
  </div>
   </v-content>
</template>
 
<script>
import videos from '../data/categorias.json'
  export default {
    name: 'filme',
    props:{
      filme:{
        type: Object, 
        required: true
      }
    },
    data () {
      return {
        exibirVideo: false
      }
    },
    methods: {
      play() {
        this.exibirVideo = true;
        
        setTimeout(
          ()=>{
                this.fullscreen();
          },0
        )
        
      },
      fullscreen()
      {

        var elem = document.getElementById(this.filme.id);
        let requestFullscreen = elem.requestFullscreen ||  elem.mozRequestFullScreen || 
        elem.webkitRequestFullscreen || elem.msRequestFullscreen
        requestFullscreen.bind(elem)();
      }
    }
  }
</script>
<style>
.video {
  width: 300px;
  display: flex;
  max-width: 300px;
  min-width: 300px;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
}


.video + .video {
  margin-left: 5px;
}

img {
  width: 100%;
  height: 100%;
  position: relative;
}

.titulo {
  position: absolute;
  width: 100%;
  text-align: left;
  bottom: 0;
  text-indent: 10px;
}

.titulo span {
  width: 100%;
}

.botao-play {
  font-size: 45px;
  align-self: center;
  justify-content: center;
  position: absolute;
  display: none;
}

.video:hover .botao-play {
  display: block;
}


</style>