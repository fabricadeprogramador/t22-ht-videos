import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import VueRouter from 'vue-router';
import Usuario from '@/components/usuario/Usuario'
import Filme from '@/components/Filme'
import Categoria from '@/components/categoria/Categoria'
import FilmeCadastro from '@/components/filme/FilmeCadastro'
import store from './store/store.js'
import VeeValidate from 'vee-validate';
import CategoriaListagem from '@/components/categoria/CategoriaListagem'
import Lista from '@/components/Lista'
import FilmeListagem from '@/components/filme/FilmeListagem'

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VeeValidate);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes:[
    {
      path: '/',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/filme',
      name: 'Filme',
      component: Filme
    },
    {
      path: '/filme-cadastro',
      name: 'Filme-cadastro',
      component: FilmeCadastro
    },
    {
      path: '/categorias',
      name: 'categoria',
      component: Categoria
    },
    {
      path: '/categoria-listagem',
      name: 'Categoria-listagem',
      component: CategoriaListagem 
    }
    ,
    {
      path: '/filme-listagem',
      name: 'Filme-listagem',
      component: FilmeListagem 
    }
  ]
})

Vue.component("lista", Lista);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
