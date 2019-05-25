import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import VueRouter from 'vue-router';
import Usuario from '@/components/Usuario'
import Filme from '@/components/Filme'
import Categoria from '@/components/categoria/Categoria'
import Cadastro from '@/components/cadastro/Cadastro'
import store from './store/store.js'
import VeeValidate from 'vee-validate';
import CategoriaListagem from '@/components/categoria/CategoriaListagem'
import Lista from '@/components/Lista'
import VideoListagem from '@/components/categoria/VideoListagem'



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
      component: Filme
    },
    {
      path: '/categorias',
      name: 'categoria',
      component: Categoria
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/categoria-listagem',
      name: 'Categoria-listagem',
      component: CategoriaListagem 
    }
    ,
    {
      path: '/video-listagem',
      name: 'Video-listagem',
      component: VideoListagem 
    }
  ]
})

Vue.component("lista", Lista);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
