<template>
<v-content>
    <div class="grid-container">
      <div v-for="(video,i) in videos" :key="i" class="cards">
        
        <img 
        :src="'https://img.youtube.com/vi/'+video.id+'/maxresdefault.jpg'"
        />
        <!-- <v-btn x-large class="botao-play"> -->
          <v-icon class="botao-play">
          play_arrow
          </v-icon>
        <!-- </v-btn> -->
        <span>{{video.title}}</span>
      </div>
    </div>
  </v-content>
</template>
   
 
<script>
import videos from '../data/lista-videos.json'
  export default {
    name: 'video',
   data () {
    return {
      videos
      }
  }
      
  }
</script>

<style>
.grid-container {
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 5px;
  }

.cards {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  box-sizing: border-box;
  }

img {
  width: 100%;
  height: 100%;
  position: relative;
  }

span {
  align-self: flex-end;
  justify-content: flex-start;
  font-weight: bold;
  position: absolute;
  }

.botao-play {
  position: absolute;
  font-size: 50px;
}

</style>