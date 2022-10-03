<template>
  <div class="mapPage">
    <div class="mapPageTitle"> <h3>A first-class marketing automation agency with global reach focused on - and answerable to - our clients</h3></div>
    <div class="mapImg"> <img src="../assets/img/Final Map (1).png" alt=""></div>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
}
}
</script>

<style lang="scss">
    .mapPage{
        padding: 4% 15% 6% 15%;
        background: #09080E;;
        .mapPageTitle{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        /* or 119% */

        text-align: center;

        /* gradient */

        background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        
        }
        .mapImg{
            width: 100%;
            img{
                width:100%
            }
        }
        }

    

</style>