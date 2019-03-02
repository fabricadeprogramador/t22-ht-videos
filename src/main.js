import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import VueRouter from 'vue-router';
import Usuario from '@/components/Usuario'
import Video from '@/components/Video'

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
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/video-cadastro',
      name: 'Video-cadastro',
      component: Video
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
