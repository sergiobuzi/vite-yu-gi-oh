<script>
export default {
    name: 'AppHeader',

    data() {
            return {
            
            }
        }
}
</script>

<template>
    <div id="container">
        <img src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es" alt="yu-gi-oh logo" id="header-logo">
        <h1>YU-GI-OH Api</h1>
    </div>
</template>

<style lang="scss" scoped>

#container{
    display: flex;
    width: 98%;
    margin: auto;
    height: 80px;
    align-items: center;

    #header-logo{
    width: 75px;
    height: 30px;
    }

    h1{
        font-weight:100;
        margin-left: 20px;
    }

}

</style>
