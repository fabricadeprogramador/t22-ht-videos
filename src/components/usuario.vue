<template>
    <div id="div-usuarios">
        <span id="span-texto">Quem está assistindo?</span>
        <div class="div-usuario" v-for="usuario in usuarios" :key="usuario.id" @onclick="this.$emit('click')">
            <img class="icon-usuario" :src="usuario.imagem"><br>
            <span class="nome-usuario">{{ usuario.nome }}</span>
        </div>
    </div>
</template>

<script>
import usuarios from '../data/lista-usuarios.json' //importando a lista do arquivo .json
export default {
    name: 'usuario', //definindo o nome do componente
    data(){
        return {
         usuarios //o componente necessita da lista de usuarios previamente importada
        }
    },
    created(){
         console.log(this.usuarios);
    }
}
</script>

<style>
  .icon-usuario {
  border-radius: 5px;
  height: 10vw;
  width: 10vw;
  min-height: 84px;
  min-width: 84px;
}

.div-usuario {
  cursor: pointer;
  height: 150px;
  padding: 10px;
  width: 160px;
  float: left;
}

#div-usuarios {
  cursor: default;
  width: auto;
  margin-left: 35%;
  transform: translateX(-23%);
  margin-top: 15%;
}

#span-texto {
  color: white;
  position: absolute;
  left: 40%;
  transform: translateX(-40%);
  bottom: 40px;
  display: block;
  font-size: 300%;
}

.nome-usuario {
  display: block;
  margin-top: 10px;
  text-align: center;
  font-size: 15pt;
  color: grey;
}
</style>