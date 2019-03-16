<template>
<v-content>
    <div class="grid-container">
      <div v-for="(video,i) in videos" :key="i" class="cards">
        
        <img 
        :src="'https://img.youtube.com/vi/'+video.id+'/maxresdefault.jpg'"
        :width="300" 
        :height="170"
        />
        <v-btn icon class="butao-play">
           <v-icon>play_arrow</v-icon>
        </v-btn>

        <p>{{video.title}}</p>
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
  }

img {
  position: absolute;
  }

p {
  position: relative;
  top: 150px;
  margin-left: 5px;
  font-weight: bold
  }
  .butao-play{
    font-size: 100px;
  }
</style>