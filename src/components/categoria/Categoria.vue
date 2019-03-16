<template>
    <div>

        <div v-for="categoria of categorias" :key="categoria.nome" class="categoria">
            
            <span>{{categoria.nome}}</span>

            <div class="videos">
                <div v-for="(video, index) of categoria.videos" :key="video.id" >
                <filme :filme="video"
                :index="index"> </filme>
                </div>
            </div>


            
        </div>

        

    </div>
</template>

<script>
import categorias from '../../data/categorias.json'
import Filme from '@/components/Filme'
export default {
    components: {Filme},
    data()
    {
        return {
            categorias
        }
    }
}
</script>

<style>
.categoria{
    display: flex;
    flex-direction: column;
}
.videos{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
}


</style>

