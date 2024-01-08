<script>
export default {
    name: 'CardsList',

    data() {
            return {
            
            }
        }
}
</script>

<template>
    <div id="container">

        <div id="selector-container">
            <select id="selector" name="type">
                <option >Alien</option>
                <option >Human</option>
                <option >Robot</option>
            </select>
        </div>



        <div id="box">

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

#container{
    background-color: $primary;
    width: 100%;
    height: calc(100vh - 80px);

    #selector-container{
        width: 69%;
        margin: auto;
        height: 80px;
        display: flex;
        align-items: center;

        #selector{
            width: 120px;
            height: 30px;
            border: none;
            border-radius: 3px;
        }
    }


    #box{
        background-color: white;
        width: 70%;
        margin: auto;
        height: calc(100vh - 160px);
    }
    
}
</style>
