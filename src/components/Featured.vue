<template>
  <div class="featured">
    <div class="featuredTitle"><h2>Featured in</h2></div>
    <Brands :brands="brands" />
  </div>
</template>

<script>
import Brands from "./Brands.vue";
export default {
  data() {
    return {
      brands: {
        brandsItems: [
          [
            {
              id: 1,
              img: "fut7.png"
            },
            {
              id: 2,
              img: "fut2.png"
            },

            {
              id: 3,
              img: "fun8.png"
            },
            {
              id: 4,
              img: "fun8.png"
            }
          ],
          [
            {
              id: 1,
              img: "fut5.png"
            },
            {
              id: 2,
              img: "fut6.png"
            },
            {
              id: 3,
              img: "fut6.png"
            },

            {
              id: 5,
              img: "fut4.png"
            }
          ]
        ]
      }
    };
  },
  components: {
    Brands
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Raleway";
  src: url(../assets/img/Raleway/static/Raleway-Regular.ttf);
}
@font-face {
  font-family: "Manrope";
  src: url(../assets/img/Raleway/static/Raleway-Italic.ttf);
}
.featured {
  padding:4% 10%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brands{
    padding:0px 0px;
    width:60%
  }
}
.featuredTitle {
  
  width: 23%;
  background-color: #f5f5f5;
  
  align-items: center;
 

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height:48px;
  }
}

@media only screen and (max-width: 1150px) {
  .featured {
    display: block;
   text-align: center;
  
  .featuredTitle{
    width:100%
  }
  .brands {
    margin-top:16px;
   
    width: 100%;
    .brandsTitle {
      font-size: 30px;
      margin-bottom: 35px;
      line-height: 38px;
    }
  }
}}
@media only screen and (max-width: 767px) {
  .featured {
    .featuredTitle {
      h2 {
        font-size: 30px;
        line-height: 38px;
      }
    }
  }
  .brands {
    padding: 5% 8%;
    .brandsTitle {
      font-size: 26px;
      line-height: 36px;
    }
    .list {
      div {
        div {
          height: 130px;
          img {
            width: 75%;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 575px) {
  .featured {
    padding-top: 15px;
  }
  .brands {
    padding-bottom: 32px;

    .brandsTitle {
      font-size: 24px;
      line-height: 32px;
    }
    .list {
      display: none;
    }
    .list2 {
      display: block;
      div {
        div {
          width: 50%;
        }
      }
    }
  }
}
</style>
