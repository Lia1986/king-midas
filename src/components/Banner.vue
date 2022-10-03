<template>
    <div class="banner" :style="banner.bannerImg !== '' ? { backgroundImage : `url(${require('../assets/img/' + banner.bannerImg)})`} : ''">
        <div class="bannerText">
            <h1 class="bannerTitle">{{banner.heading}}</h1>
            <p class="bannerText">{{banner.content}}</p>
            <button class="yellow-btn">{{banner.button}} </button>
        </div>
        <div class="bannerBodyImg" v-if="banner.background !== ''">
            <img :src="`${require('../assets/img/' + banner.background)}`" alt="bannerImage">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['banner'],
  data () {
    return {

    }
  },
}
</script>

<style lang="scss">

.banner{
    padding: 164px 132px 165px 190px;
    display: flex;
    background-color: #010101;
    background-repeat: no-repeat;
    background-size: cover;
    .bannerTitle{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 52px;
        line-height: 70px;
        color: #FFFFFF;
    }
    .bannerText{
        width: 50%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 30px;
        color: #FFFFFF;
        p{
            width: 100%;
        }
    }
    .bannerBodyImg{
            display: flex;
            justify-content: end;
            width: 50%;
            
        img{
            width: 80%;
            object-fit: contain;
        }
    }
}

</style> 