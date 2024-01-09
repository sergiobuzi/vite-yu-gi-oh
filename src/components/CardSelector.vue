<script>
import { store } from '../store';
export default {
    name: 'CardSelector',

    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <div id="selector-container">
        <select id="selector" name="type"  v-model="store.SearchArchetype">
            <option value="" selected>Select Archetype</option>
            <option v-for="archetype in store.archetypeList" :key="archetype">{{ archetype.archetype_name }}</option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

#selector-container {
    width: 69%;
    margin: auto;
    height: 80px;
    display: flex;
    align-items: center;

    #selector {
        width: 150px;
        height: 30px;
        border: none;
        border-radius: 3px;
    }
}
</style>
