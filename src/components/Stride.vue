<template>
    <div class="strade">
      <div class="acquirement" v-for="(item) in acquirementList" :key="item.id">
          <div class="salesImg"><img :src="require(`../assets/img/strideImg/${item.img}`)" alt="" ></div>
          <p>{{item.text}}</p>
      </div>

    </div>
</template>


<script>

 export default {
  name:"Stride",
  data () {
    return {
        acquirementList:[
            {
                id:1,
                img:'sales.png',
                text:"Generated over $3.8+ billionin sales for our clients"
            },
            {
                id:2,
                img:'google.png',
                text:"500+ Google reviews globally with a 4.9/5 rating"
            },
            {
                id:3,
                img:'won.png',
                text:"Won 14 digital awards and counting"
            }
        ]
    }
  }
 }

</script>


<style lang="scss">
.strade {
    display: flex;
    padding: 120px 189px 124px 175px;
    justify-content: space-between;
    background: #F5F5F5;
    flex-wrap: wrap;
    
        
       
}
.salesImg {
    
            width: 20%;
            img{
                width: 100%;
            }
        }
.acquirement{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 23%;
        height: 152px;
        background: #FFFFFF;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
        p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        width: 90%;
        text-align: center;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #101820;
       }
      
    }
</style>