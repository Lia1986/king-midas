<template>

  <div class="featured" >
     <div class="featuredTitle"><h2>Featured in</h2></div>
     <Brands  :brands = 'brands'/>
   
  </div>
       
</template>

<script>
    import Brands from './Brands.vue'
export default {
data(){
    return{
        brands: {
        brandsItems:[
        [
             {
            id: 1,
            img: 'fut7.png'
            },
            {
            id: 2,
            img: 'fut2.png'
            },
            
            {
            id: 3,
            img: 'fun8.png'
            },
            {
            id: 4,
            img: 'fun8.png'
            },
           
       ],
       [
        {
          id: 1,
          img: 'fut5.png'
        },
        {
          id: 2,
          img: 'fut6.png'
        },
        {
          id: 3,
          img: 'fut6.png'
        },
        
        {
          id:5,
          img: 'fut4.png'
        },
      ]
    ]
    },
}},
components:{
    Brands
}}
</script>

<style lang="scss">
.featured{
    background-color: #F5F5F5;
    display: flex;
}
.featuredTitle{
  margin: auto;
    width: 338.72px;
    height: 30px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 27px 132px 27px 190px;
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 38px;
        line-height: 50px;
    }
}
</style>