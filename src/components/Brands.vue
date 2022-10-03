<template>
  <div class="brands" >
        <h3 v-if="brands.title" class="brandsTitle" > {{brands.title}}  <img v-if="brands.img"  :src="require(`../assets/img/${brands.img}`)" alt="icon" >
            <p v-else class="brandsText">{{brands.text}}</p>

         </h3>
        <div class="list"  :class="{noBorderBottom:brands.brandsItems.length-1 === index}" v-for="(item,index) in brands.brandsItems" :key="index">
            <div class="row">
              <div :class="{noBorder:item.length-1 === i}"  v-for = "(colum,i) in item" :key = "colum.id" ><img :src="require(`../assets/img/${colum.img}`)" alt="brands l ogo"></div>
            </div>
         </div>
    </div>  
</template>

<script>
export default {
  name: 'Brands',
  props: ['brands'],
  
  data () {
    return {

    }
   
  },

}
</script>

<style lang="scss">
.brands{
    padding: 120px 190px;
    justify-content: center;
    padding-bottom: 120px;
    background-color: #F5F5F5;
    .brandsTitle
        img{
            width: 29.57px;
        }
        h4{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        background: black;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: 20px;
    }
    .brandsText{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 21px;
        line-height: 30px;
        width: 50%;
        margin: auto;
        }
        
    .list{
        border-bottom: 1px solid rgba(21, 22, 24, 0.2);
        div{
            div{ 
                border-right: 1px solid rgba(21, 22, 24, 0.2);
                width: 20%;
                height: 170px;
                display: flex;
                justify-content: center;
                img{
                    width: 65%;
                    height: 55%;
                    margin-top: auto;
                    margin-bottom: auto;
                    align-items: center;
                    object-fit: contain;
                }
            }
        }
            
        }
   
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .noBorder{
        
        border-right: none !important;
    }
    .noBorderBottom{
        border-bottom: none !important;
    }
    
}
</style>