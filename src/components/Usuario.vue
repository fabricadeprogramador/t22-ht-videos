<template>
    <div class="div-main flex">
      <!-- <div id="div-logo">
        <v-icon id="img-logo" color="white">local_activity</v-icon>
        <span id="span-logo">HT Videos</span>
      </div> -->
      <div class="div-second flex">
          <span id="span-texto">Quem está assistindo?</span>
          <div class="div-usuarios flex">
            <div class="div-usuario" v-for="usuario in usuarios" :key="usuario.id" @onclick="this.$emit('click')">
                <img class="icon-usuario" :src="usuario.imagem">
                <span class="nome-usuario">{{ usuario.nome }}</span>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import usuarios from '../data/lista-usuarios.json' /*importando a lista do arquivo .json*/
export default {
    name: 'usuario', /*definindo o nome do componente*/
    data(){
        return {
         usuarios /*o componente necessita da lista de usuarios previamente importada*/
        }
    },
    created(){
         console.log(this.usuarios);
    }
}
</script>

<style>
body {
  font-family: 'Helvetica';
}
.div-main{
  height: calc(100% - 64px);
}

.icon-usuario {
  border: rgb(37, 37, 37) 4px solid;
  border-radius: 5px;
  height: 10vw;
  width: 10vw;
  min-height: 84px;
  min-width: 84px;
  position: relative;
}

.div-usuario {
  height: 190px;
  padding: 20px;
  width: 160px;
}

.div-usuario:hover span {
  color: white;
  cursor: pointer;
}

.div-usuario:hover img {
  border: 4px solid white;
  cursor: pointer;
  
}

.div-second {
  text-align: center;
  flex-direction: column; 
  width: 100%;
}

.div-usuarios {
  flex-direction: row;
}

.flex {
  display: flex;
  cursor: default;
  justify-content: center;
  align-items: center;
}

#span-texto {
  color: white;
  font-size: 40pt;
}

.nome-usuario {
  display: block;
  margin-top: 10px;
  text-align: center;
  font-size: 15pt;
  color: gray;
}

/* #span-logo {
  line-height: 70px;
  color: white;
  display: inline-block;
  font-size: 15pt;
}

#div-logo {
  height: 70px;
} */

</style>