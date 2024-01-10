<script>
import axios from 'axios';
import { store } from '../store';
import SingleCard from './SingleCard.vue';
import CardSelector from './CardSelector.vue';
export default {
    name: 'CardsList',
    data() {
        return {
            store,
        };
    },

    methods: {
      getCards() {
        let archetypeUrl = store.apiURL;

        if (store.SearchArchetype !== '') {
            archetypeUrl += `&${store.typeArchetype}=${store.SearchArchetype}`
      }

        axios
          .get(archetypeUrl)
          .then((res => {
            store.cardsList = res.data.data;
          }))
          .catch((err) => {
            console.log("Errori", err);
          });
      }
    },
    components: { SingleCard, CardSelector }
}
</script>

<template>
    <div id="container">

       <CardSelector @change='getCards'/>

        <div id="box">

            <div id="n-cards">
                <h3>Found ?? cards</h3>
            </div>

            <div class="row">

                <SingleCard/>

            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

#container{
    background-color: $primary;
    width: 100%;
    min-height: 100vh;


    #box{
        background-color: white;
        width: 70%;
        margin: auto;
        height: 1005;
        padding: 50px;

        #n-cards{
            background-color: #212428;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            

            h3{
                color: white;
                margin-left: 10px;
                font-size: 18px;
            }
        }


        .row{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            min-height: 300px;
            justify-content: flex-start;
            gap: 20px;
        }
    }
    
}
</style>
