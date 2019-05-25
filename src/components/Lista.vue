<template>
    <div id="div-lista">
        <h1>{{ titulo }}</h1>
        <v-list two-line>
          <template v-for="(item, index ) in items">

            <v-divider v-if="index > 0 "
              :key="index"
            ></v-divider>

            <v-list-tile
              :key="item"
              avatar
            >
                <!-- <v-list-tile-avatar>
                <img :src="item.avatar">
                </v-list-tile-avatar> -->

                <v-list-tile-content>
                    <v-list-tile-title>{{ item }}</v-list-tile-title>
                </v-list-tile-content>
            
                <v-spacer></v-spacer>

                <v-btn icon @click="editar(item)">
                    <v-icon>edit</v-icon>
                </v-btn>  

                <v-btn icon @click="deletar(item)">
                    <v-icon>delete</v-icon>
                </v-btn>
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
}

</style>


