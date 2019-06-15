<template>
    <div class="listagem">
        <h1>{{ titulo }}</h1>
        <v-btn @click="inserir" color="success">
          Inserir
        </v-btn>
        <v-list two-line>
          <template v-for="(item, index) in items">

            <v-divider v-if="index > 0 "
              :key="index"
            ></v-divider>

            <v-list-tile
              :key="item._id"
              avatar
            >
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.titulo || item.nome }}</v-list-tile-title>
                </v-list-tile-content>  
                <v-spacer></v-spacer>
                
                <v-btn icon @click="editar(item)">
                    <v-icon>edit</v-icon>
                </v-btn>  

                <v-btn icon @click="deletar(item)">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-list-tile>
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
    editar(item){
      this.$emit('editar', item)
    },
    deletar(item){
      this.$emit('deletar', item)
    },
    inserir(){
      this.$emit('inserir')
    },
  }
}
</script>

<style >
.listagem{
  padding: 16px;
}
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


