import Vuex from 'vuex'
import Vue from 'vue'
import http from '../httpHelper'
import api from '../api'

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
    filme: {
      titulo: '',
      chave: ''
    }
  },
  getters: {
    getListaUsuarios(state) {
      return state.usuarios.filter(
        (usuario) => usuario.id != state.usuario.id
      ); 
    },
    getUsuario(state) {
      return state.usuario;
    },
    getUsuarios(state) {
      return state.usuarios;
    },
    getListaCategorias(state) {
      return state.categorias.reduce((acc, categoria) => {
        acc.push({
          _id: categoria._id,
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
    },
    getFilme(state) {
      return state.filme;
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
    setFilme(state, filme) {
      state.filme = filme;
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
      return http.get(api.url + 'filme')
      .then(( { data } ) => {
        commit('setFilmes', data); 
      })
    },
    buscarCategorias({ commit }){
      http.get( api.url + 'categoria')
      .then( ({ data } ) => {
        commit('setCategorias', data);
      })
    },
    logarUsuario({ commit }){
      http.get( api.url + 'usuario')
      .then( ( { data } ) =>{
        commit('setLogarUsuario', data);
      })
    },
    buscarFilmesPorNome(){
      return http.get( api.url + 'filme/porNome')
    },
    salvarCategoria({dispatch}, categoria){
      return http.post( api.url + 'categoria', categoria)
      .then((response)=>{
        dispatch('buscarCategorias')
        return response
      })
    },
    excluirCategoria({ dispatch}, categoria) {
      return http.delete( api.url + 'categoria/' + categoria._id)
      .then((response)=>{
        dispatch('buscarCategorias')
        return response
      })
    },
    editarCategoria({dispatch}, categoria){
      return http.put( api.url + 'categoria', categoria)
      .then((response)=>{
        dispatch('buscarCategorias')
        return response
      })
    },
    salvarFilme({ dispatch }, filme){
      return http.post( api.url + 'filme', filme)
      .then((response)=>{
        dispatch('buscarFilmes')
        return response
      })
    },
    excluirFilme({ dispatch}, filme) {
      return http.delete( api.url + 'filme/' + filme._id)
      .then((response)=>{
        dispatch('buscarFilmes')
        return response
      })
    },
    editarFilme({dispatch}, filme){
      return http.put( api.url + 'filme', filme)
      .then((response)=>{
        dispatch('buscarFilmes')
        return response
      })
    }
  }
})