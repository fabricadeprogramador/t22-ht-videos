<template>
    <div id="div-lista">
        <h1>{{ titulo }}</h1>
        <v-list two-line>
          <template v-for="(item, index) in items">

            <v-divider v-if="index > 0 "
              :key="index"
            ></v-divider>

            <v-list-tile
              class="list-tile"
              :key="item"
            >

            <div v-if="item.id != undefined"> <!-- div que exibe os vídeos -->
                <v-avatar size="90px" id="avatar"> 
                <img :src="'https://img.youtube.com/vi/' + item.id + '/maxresdefault.jpg'">
                </v-avatar>

                <v-list-tile-content>
                    <v-list-tile-title class="list-tile-title">{{ item.titulo }}</v-list-tile-title>
                </v-list-tile-content>
            </div>

            <div v-else> <!-- div que exibe as categorias -->
                <v-list-tile-content>
                    <v-list-tile-title>{{ item }}</v-list-tile-title>
                </v-list-tile-content>
            </div>    
                <v-spacer></v-spacer>

                <div class="buttons">
                <v-btn icon @click="editar(item)">
                    <v-icon>edit</v-icon>
                </v-btn>  

                <v-btn icon @click="deletar(item)">
                    <v-icon>delete</v-icon>
                </v-btn>
                </div>
            </v-list-tile>
          </template>
        </v-list>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props:{
        titulo:{
            type: String,
            required: true
        },
        items:{
            type: Array,
            required: true
        }
    },
    methods: {
     editar(item)
     {
         this.$emit('editar', item)
     },
     deletar(item)
     {
         this.$emit('deletar', item)
     }
        
      
    }
  }
</script>

<style >
h1 {
    margin-top: 10px;
    margin-bottom: 15px;
    display: inline-block;
    margin-left: 20px;
}

#avatar {
    border-radius: 20px;
    float: left;
}

img {
    object-fit: cover;
}

.list-tile {
    display: flex;
    align-items: center; 
    align-content: center;
    flex-direction: row;
    height: 105px;
    width: 100%;
}

.buttons{
    float: right;
}

.v-list__tile {
    width: 100%;
}

.list-tile-title {
    margin-top: 35px;
    margin-left: 40px;
}
</style>


