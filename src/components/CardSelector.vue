<script>
export default {
    name: 'CardSelector',

    data() {
        return {

        }
    }
}
</script>

<template>

    <div id="selector-container">
        <select id="selector" name="type">
            <option>Alien</option>
            <option>Human</option>
            <option>Robot</option>
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
        width: 120px;
        height: 30px;
        border: none;
        border-radius: 3px;
    }
}
</style>
