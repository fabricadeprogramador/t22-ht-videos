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
        categoria:{
          nome:'',
          filmes:[]
        },
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
        getCategoria(state){
          return state.categoria;
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
      setCategoria(state, categoria){
        state.categoria = categoria;
      },
      setLogarUsuario(state, usuarios){
        state.usuarios = usuarios;
      }
    },
    actions: {
      buscarFilmes({ commit }){
        return http.get('http://localhost:3000/filme')
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
      },
      salvarCategoria({commit,dispatch}, categoria){
        return http.post('http://localhost:3000/categoria', categoria)
        .then((response)=>{
          dispatch('buscarCategorias')
          return response
        })
      },
      excluirCategoria({commit, dispatch}, categoria) {
        return http.delete('http://localhost:3000/categoria/' + categoria._id)
        .then((response)=>{
          dispatch('buscarCategorias')
          return response
        })
      },
      editarCategoria({commit,dispatch}, categoria){
        return http.put('http://localhost:3000/categoria', categoria)
        .then((response)=>{
          dispatch('buscarCategorias')
          return response
        })
      },
    }

})