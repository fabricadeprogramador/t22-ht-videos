import Vuex from 'vuex'
import Vue from 'vue'
import listaUsuarios from '../data/lista-usuarios.json'
import listaCategorias from '../data/categorias.json'

Vue.use(Vuex) 

export default new Vuex.Store({ 
    state: {
        usuario:{},
        palavraBuscada: '',
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
            return state.listaCategorias.reduce((acc, categoria) => {
                acc.push({
                    nome: categoria.nome,
                    videos: categoria.videos.filter(video => {
                            return video.titulo.toLowerCase().includes(state.palavraBuscada.toLowerCase());
                    })
                })
                return acc;
            }, []);
        },
        getPalavraBuscada(state) {
            return state.palavraBuscada; 
        }, 
        getNomeCategoria(state){
            return state.listaCategorias.reduce((acc, categoria)=> {
                acc.push(
                    categoria.nome
                )
                return acc;
            },[]);
        },
        getNomeVideo(state){
            return state.listaCategorias.reduce((acc, categoria)=> {
                categoria.videos.forEach(video => {
                    acc.push(
                        video.titulo
                    )
                });
               
                return acc;
            },[]);
        }
    },
    mutations:{
        setUsuario(state,usuario) {
            state.usuario = usuario;
        },
        setPalavraBuscada(state, value){
            state.palavraBuscada = value;
        }
    }
})