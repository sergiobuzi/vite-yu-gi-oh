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

            <div id="n-cards">
                <h3>Found 39 cards</h3>
            </div>

            <div class="row">

                <div class="card">
                    <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="" class="card-thumb">
                    <h3 class="card-name">sdfasdfasdfasfasf</h3>
                    <h3 class="card-type">asfasfasf</h3>
                </div>
                

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

            .card{
                min-height: 300px;
                background-color: $primary;
                width: calc(100% / 5 - 20px);
                display: flex;
                flex-direction: column;
                align-items: center;


                .card-thumb{
                    width: 100%;

                }

                .card-name{
                    color: white;
                    margin-top: 20px;
                    width: 100%;
                    word-wrap: break-word;
                    text-align: center;
                }

                .card-type{
                    color: black;
                    font-weight: 100;
                    margin-top: 30px;
                    word-wrap: break-word;
                    text-align: center;
                    margin-bottom: 20px;
                }                
            }
        }
    }
    
}
</style>
