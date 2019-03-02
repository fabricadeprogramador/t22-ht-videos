import Vue from 'vue'
import Router from 'vue-router'
import Usuario from '@/components/Usuario'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Usuario',
        component: Usuario
      },
      {
        path: '/Video',
        name: 'Video',
        component: Video
      }
    ]
  })