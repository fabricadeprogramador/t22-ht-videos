import Vuex from 'vuex'
import Vue from 'vue'
import listaUsuarios from '../data/lista-usuarios.json'
import listaCategorias from '../data/categorias.json'
import http from '../httpHelper'

Vue.use(Vuex) 

export default new Vuex.Store({ 
    state: {
        usuario:{},
        palavraBuscada: '',
        filmes: [],
        categorias: [],
        usuarios:[],
        listaUsuarios,
        listaCategorias
    },
    getters: {
        getListaUsuarios(state) {
            return state.listaUsuarios.filter(
                (usuario) => usuario.id != state.usuario.id
            ); 
        },
        getUsuario(state) {
            return state.usuario;
        },
        getListaCategorias(state) {
            return state.categorias.reduce((acc, categoria) => {
                acc.push({
                    nome: categoria.nome,
                    filmes: categoria.filmes.filter(filme => {
                            return filme.titulo.toLowerCase().includes(state.palavraBuscada.toLowerCase());
                    })
                })
                return acc;
            }, []);
        },
        getPalavraBuscada(state) {
            return state.palavraBuscada; 
        }, 
        getCategorias(state){
            return state.categorias;
        },
        getFilmes(state){
            return state.filmes
        }
    },
    mutations:{
      setUsuario(state,usuario) {
          state.usuario = usuario;
      },
      setPalavraBuscada(state, value){
          state.palavraBuscada = value;
      },
      setFilmes(state, filmes){
        state.filmes = filmes;
      },
      setCategorias(state, categorias){
        state.categorias = categorias;
      },
      setLogarUsuario(state, usuarios){
        state.usuarios = usuarios;
      }
    },
    actions: {
      buscarFilmes({ commit }){
        http.get('http://localhost:3000/filme')
        .then(( { data } ) => {
          commit('setFilmes', data); 
        })
      },
      buscarCategorias({ commit }){
        http.get('http://localhost:3000/categoria')
        .then( ({ data } ) => {
          commit('setCategorias', data);
        })
      },
      logarUsuario({ commit }){
        http.get('http://localhost:3000/usuario')
        .then( ( { data } ) =>{
          commit('setLogarUsuario', data);
        })
      },
      buscarFilmesPorNome(){
        return http.get('http://localhost:3000/filme/porNome')
      }
    }

})