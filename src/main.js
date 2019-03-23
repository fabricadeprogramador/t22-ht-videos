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
import store from './store/store.js'

Vue.use(Vuetify)
Vue.use(Router)

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
    }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
