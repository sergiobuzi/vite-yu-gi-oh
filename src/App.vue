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
  <CardsList />
</template>

<style lang="scss" scoped>
@use './styles/general.scss'
</style>
