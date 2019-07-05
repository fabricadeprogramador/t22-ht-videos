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

        <v-list-tile :key="item._id" avatar>
        <!-- solução antiga para exibir as thumbs dos vídeos na tela de filmes 
          <div v-if="item.id != undefined"> 
            <v-avatar size="90px" id="avatar"> 
              <img :src="'https://img.youtube.com/vi/' + item.id + '/maxresdefault.jpg'">
            </v-avatar>

            <v-list-tile-content>
                <v-list-tile-title class="list-tile-title">{{ item.titulo }}</v-list-tile-title>
            </v-list-tile-content>
            </div>

            <div v-else> 
              <v-list-tile-content>
                <v-list-tile-title>{{ item }}</v-list-tile-title>
              </v-list-tile-content>
            </div> 
          -->
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
      </template>
    </v-list>
  </div>
</template>

<script>
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
  }
</style>
