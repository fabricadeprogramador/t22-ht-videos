<template>
  <div class="listagem">
    <h1>{{ titulo }}</h1>
    <v-flex xs12>
      <v-btn fab dark color="indigo" @click="inserir">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-flex>
    
    <v-list two-line>
      <template v-for="(item, index ) in items">

        <v-divider v-if="index > 0 "
          :key="index"
        ></v-divider>

        <v-list-tile  :key="item._id"  avatar >
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