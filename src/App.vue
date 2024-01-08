<script>
  import AppHeader from './components/AppHeader.vue'
  import CardsList from './components/CardsList.vue';




  export default{
    components: {
      AppHeader,
      CardsList,
    }
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
