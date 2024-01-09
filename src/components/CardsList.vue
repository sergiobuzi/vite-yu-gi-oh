<script>
import SingleCard from './SingleCard.vue';
import CardSelector from './CardSelector.vue';
export default {
    name: 'CardsList',
    data() {
        return {
        };
    },
    components: { SingleCard, CardSelector}
}
</script>

<template>
    <div id="container">

       <CardSelector />

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
            justify-content: space-between;
            gap: 20px;
        }
    }
    
}
</style>
