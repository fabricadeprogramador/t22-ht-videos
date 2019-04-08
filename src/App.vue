<template>
  <v-app dark>
  <v-toolbar dark  v-if=" getUsuario.nome != undefined" >

    <v-toolbar-side-icon>
      <v-layout justify-center>
        <v-icon
          dark
          @click.stop="drawer = !drawer"
        >
          dehaze
        </v-icon>
      </v-layout>
    </v-toolbar-side-icon>

    <v-toolbar-title class="white--text"> HT-Videos</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-flex xs12 md3>
    <v-text-field 
    label="Buscador"
    v-model="palavraBuscada" ></v-text-field>

        </v-flex>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
  
    <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }" >
        <img v-on="on" :src="getUsuario.imagem"  class="imagem-usuario" >
      </template>
      <v-list>
          <v-list-tile
              v-for="(usuario, index) in getListaUsuarios.filter(function(usuario) { return usuario.nome != getUsuario.nome; })"
              :key="index"
              @click="alterarUsuario(usuario)"
              >
                <v-list-tile-title class="menu" >
                    <img :src="usuario.imagem" class="mini-menu">{{ usuario.nome }}
                </v-list-tile-title>
                            
          </v-list-tile>
                              
          <v-list-tile @click="sair()">

                <v-list-tile-title>Sair</v-list-tile-title>
                    
          </v-list-tile>
      </v-list>
    </v-menu>
  </div>
  </v-toolbar>
    
    <router-view></router-view>
    
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img :src="getUsuario.imagem">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              {{getUsuario.nome}}
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    drawer: null,
    items: [
    { title: 'Home', icon: 'home' },
    { title: 'Categorias', icon: 'style' },
    { title: 'Vídeo', icon: 'movie_creation' }
    ],
    mini: false,
    right: null
    }
  },
  computed:{
    ...mapGetters([
      'getUsuario',
      'getListaUsuarios'
    ])
  },
  
  methods: {
    ...mapMutations([
      'setUsuario'
    ]),
    alterarUsuario(usuario) {
      this.setUsuario(usuario);
      
    },
    sair() {
      this.setUsuario({});
      this.$router.push('/');
    }
  }
}
</script>

<style>
.imagem-usuario{
  width: 49px;
  display:flex;
  align-items: center;
}
.mini-menu{
  width: 24px;
  margin-right: 8px;
  
}

.menu{
  display: flex;
  align-items: center;
  justify-content: space-evelyn;
}

body
{
  height: 1000px;
}

</style>
