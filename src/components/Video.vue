<template>
<v-content>
    <div class="grid-container">
      <div v-for="(card,i) in cards" :key="i" class="cards">
        
        <img 
        :src="'https://img.youtube.com/vi/'+card.id+'/maxresdefault.jpg'"
        :width="300" 
        :height="170"
        />
        <p>{{card.title}}</p>
      </div>
    </div>
  </v-content>
</template>
   
 
<script>
  export default {
   data () {
    return {
      cards: [
        {
          id: 'lJhvtAt_1Nk',
          title: 'Procurando Nemo'
        },
        {
          id: 'pC12TFLWO74',
          title: 'O Chefinho'
        },
        {
          id: 'IOyEstZ3IAs',
          title: 'Big Mouth'
        },
        {
          id: 'yh2dFPgAWqc',
          title: 'Carmen Sandiego'
        },
        {
          id: '4nn1QHNi0OA',
          title: 'Pinky Malinky '
        },
        {
          id: 'UI1C0eA3yi8',
          title: 'Kangaroo Valley Safari'
        },
      ]
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

#teste
{
  
  padding: 0px;
  font-size: 30px;
  text-align: center;
}

.cards
{
  width: 300px;
}

img{position: absolute;}
p{position: relative;
top: 150px;
margin-left: 5px;
font-weight: bold}

</style>