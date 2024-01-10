<script>
import { store } from '../store';
export default {
    name: 'SingleCard',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <div class="card" v-for="card in store.cardsList" :key="card.id">
        <img :src="card.card_images[0].image_url" :alt="card.id" class="card-thumb">
        <h3 class="card-name">{{ card.name }}</h3>
        <h3 class="card-type">{{ card.archetype }}</h3>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


.card {
    min-height: 300px;
    background-color: $primary;
    width: calc(100% / 5 - 16px);
    display: flex;
    flex-direction: column;
    align-items: center;


    .card-thumb {
        width: 100%;

    }

    .card-name {
        color: white;
        margin-top: 20px;
        width: 100%;
        word-wrap: break-word;
        text-align: center;
    }

    .card-type {
        color: black;
        font-weight: 100;
        margin-top: 30px;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 20px;
    }
}
</style>