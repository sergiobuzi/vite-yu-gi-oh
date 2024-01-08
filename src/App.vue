<script>
// importo axios
  import axios from 'axios';
  // importo compnenti figli
  import AppHeader from './components/AppHeader.vue';
  import CardsList from './components/CardsList.vue';
  // importo lo store
  import{ store } from './store';


  export default{
    components: {
      AppHeader,
      CardsList,
    },
    data() {
      return {
        store,
      }
    },

    methods: {
      getCards() {
        axios
          .get(store.apiURL)
          .then((res => {
            console.log(res.data.data);
            store.cardsList = res.data.data;
          }))
          .catch((err) => {
            console.log("Errori", err);
          });
      }
    },

    created() {
      this.getCards();
    },
  }


</script>

<template>
  <AppHeader />
  <main>
    <CardsList />
  </main>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/variables' as *;
</style>
