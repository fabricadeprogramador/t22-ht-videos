import Vuex from 'vuex'
import Vue from 'vue'
import listaUsuarios from '../data/lista-usuarios.json'
import listaCategorias from '../data/categorias.json'

Vue.use(Vuex) 

export default new Vuex.Store({ 
    state: {
        usuario:{},
        listaUsuarios,
        listaCategorias
    },
    getters: {
        getListaUsuarios(state) {
            return state.listaUsuarios; 
        },
        getUsuario(state) {
            return state.usuario;
        },
        getListaCategorias(state) {
            return state.listaCategorias; 
        }
    },
    mutations:{
        setUsuario(state,usuario) {
            state.usuario = usuario;
        }
    }
})