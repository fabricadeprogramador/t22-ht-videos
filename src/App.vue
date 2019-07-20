<template>
  <v-app dark>
    <v-toolbar dark  v-if="getUsuario.nome != undefined"  
    :class="{'buscador-aberto':exibirCampoBusca}">
      <v-toolbar-side-icon>
        <v-layout justify-center>
          <v-icon
            dark
            @click.stop="drawer = !drawer">
            dehaze
          </v-icon>
        </v-layout>
      </v-toolbar-side-icon>

      <v-toolbar-title class="white--text" @click="redirecionarTelaInicial()">HT-Videos</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
       
        <v-expand-x-transition> 
          <v-text-field
            v-if="exibirCampoBusca"
            transition="slide-x-transition"
            label="Buscador" 
            solo
            v-model="palavraBuscada"
          />
        </v-expand-x-transition>
    
        <v-btn icon v-if="exibirIconeBusca" @click="buscar()" slot="activator">
          <v-icon>search</v-icon>
        </v-btn>

        <div class="text-xs-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
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
      </v-toolbar-items>
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
          @click="irPara(item)"
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
      { title: 'Home', icon: 'home', rota:'categorias' },
      { title: 'Categorias', icon: 'style', rota:'categoria-listagem' },
      { title: 'Filmes', icon:'movie_creation', rota:'filme-listagem'  }
      ],
      mini: false,
      right: null,
      exibirCampoBusca: false,
      exibirIconeBusca: true
    }
  },
  computed:{
    ...mapGetters([
      'getUsuario',
      'getListaUsuarios',
      'getPalavraBuscada',
    ]),
    palavraBuscada: {
      get(){
        return this.getPalavraBuscada;
      },
      set(value){
        this.setPalavraBuscada(value);
      }
    },
  },
  watch: {
    '$route' (to, from) {
      if (to.path != '/categorias') {
        this.exibirIconeBusca = false;
        this.exibirCampoBusca = false;
      }
      else {
        this.exibirIconeBusca = true;
      }
    }
  },
  methods: {
    ...mapMutations([
      'setUsuario',
      'setPalavraBuscada'
    ]),
    alterarUsuario(usuario) {
      this.setUsuario(usuario);
    },
    irPara(item){
      this.$router.push('/'+item.rota);
    },
    sair() {
      this.setUsuario({});
      this.$router.push('/');
    },
    buscar(){ 
      this.exibirCampoBusca = !this.exibirCampoBusca;
    },
    redirecionarTelaInicial(){
      this.$router.push('/categorias');
    },
  },
  mounted(){
    if(!this.getUsuario.nome){
      this.$router.push('/');
    }
  }
}
</script>
<style>
  html{
    overflow-y: auto !important;
  }

  .imagem-usuario{
    width: 49px;
    height: 49px;
    display:flex;
    align-items: center;
  }

  .mini-menu{
    width: 24px;
    margin-right: 8px;
  }

  .menu, .v-toolbar__items{
    display: flex;
    align-items: center;
    justify-content: space-evelyn;
  }

  .white--text, .imagem-usuario{
    cursor: pointer;
  }

  @media only screen and (max-width: 640px)
  {
    .imagem-usuario {
      width: 36px;
      height: 36px;
    }

    .buscador-aberto .v-toolbar__content .v-toolbar__items{
      width: 100%;
    }

    .buscador-aberto .v-toolbar__content .v-toolbar__title,
    .buscador-aberto .v-toolbar__content .spacer{
      display: none;
    }

    .buscador-aberto .v-toolbar__content .v-toolbar__items .v-input{
      height: 48px;
    }
  }
</style>