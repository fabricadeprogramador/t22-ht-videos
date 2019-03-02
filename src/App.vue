<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
  <v-toolbar dark color="primary">
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
              label="Regular"
            ></v-text-field>

        </v-flex>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar>

    <div>
      <usuario v-on:click="this.selecionarUsuario(usuario)"></usuario>
    </div>

    <div>
        <router-view></router-view>
    </div>
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
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
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
  </v-layout>
</template>

<script>
import Usuario from './components/Usuario.vue'
import Video from './components/Video.vue'
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
  components: {
    Usuario,
    Video
  },
  methods:{
    selecionarUsuario() {
    }
  }
}
</script>
<style>
body {
  background: #141414;
}

</style>
