<template>
  <div>
    <Banner :banner='banner' />
    <div class="infoPage1AboutUS">
      <div v-for = "(item) in pageSection" :key = item.id class="aboutUS" :class="{reverse:item.reverse}">
        <div class="aboutUsInfo">
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
        </div>
        <div class="aboutUsImg">
            <img :src="require(`../assets/img/page1Img/${item.img}`)" alt="">
        </div> 
      </div>
    </div>

    <div class="trophys">
     <div><h3>We reckon our trophy case is pretty impressive…</h3></div>
     <div class="tropyImgs">
      <img src="../assets/img/trophyImg/Rectangle 52.png" alt="">
      <img src="../assets/img/trophyImg/Rectangle 53.png" alt="">
      <img src="../assets/img/trophyImg/Rectangle 54.png" alt="">
      <img src="../assets/img/trophyImg/Rectangle 55.png" alt="">
     </div>
    </div>
    <Brands :brands = 'brands'/>
     <MapPage />
     <Blocks />
     <HuaweiList />
     <Values />
     <div class="mission" >
       <div class="items" v-for="item in mission" :key="item.id">
        <img :src="require(`../assets/img/${item.img}`)" >
        <div >
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
        </div>
      </div>
     </div>
     <LastPage /> 
     </div>
  
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Brands from '../components/Brands.vue'
  import MapPage from '../components/MapPage.vue'
  import Blocks from '../components/Blocks.vue'
  import HuaweiList from '../components/HuaweiList.vue'
  import Values from '../components/Values.vue'
  import LastPage from '../components/LastPage.vue'
export default {
  
  name: 'Main',
  data () {
    return {
      banner: {
        background: '',
        bannerImg: 'aboutUs.png',
        heading: 'Be part of an agency with an amazing culture that has global reach.',
        content: 'Want to join a marketing automation agency that can offer you a total overhaul in everything you ever thought ‘great work culture’ meant? What about somewhere that has reach in countries all over the world? King Midas provides this… and a helluva lot more.',
        button: 'Join Us'
      },
      pageSection:[
            {
                id:1,
                title:'When you win, we win',
                text:'After getting a firm grip on your business and the goals you’re looking to achieve, well develop and execute a marketing automation strategy that’s backed by data and insights. And you can bet we go above and beyond to ensure absolute success for your campaigns, because when you see the outstanding results we get for you, that helps further cement our name as marketing automation royalty.',
                img:'ImgUs.png', 
                reverse:false
            },
            {
                id:2,
                title:'When you win, we win',
                text:'After getting a firm grip on your business and the goals you’re looking to achieve, well develop and execute a marketing automation strategy that’s backed by data and insights. And you can bet we go above and beyond to ensure absolute success for your campaigns, because when you see the outstanding results we get for you, that helps further cement our name as marketing automation royalty.',
                img:'ImgUs.png',
                reverse:true
            },
            {
                id:3,
                title:'When you win, we win',
                text:'After getting a firm grip on your business and the goals you’re looking to achieve, well develop and execute a marketing automation strategy that’s backed by data and insights. And you can bet we go above and beyond to ensure absolute success for your campaigns, because when you see the outstanding results we get for you, that helps further cement our name as marketing automation royalty.',
                img:'ImgUs.png',
                reverse:false
            }
      ],
      brands: {
        title: 'Some brands we work with' ,
        text: 'We work with the top globally-recognised brands in the industry who provide us with first-look access to the very latest tech and intel. Which means when you partner with us you’ll get the most innovative approach to marketing automation possible, leaving your competitors stuck in the ice, ice baby.',
        brandsItems:[
        [
        {
          id: 1,
          img: 'Vector (6).png'
        },
        {
          id: 2,
          img: 'eurolines-1 1.png'
        },
        {
          id: 3,
          img: 'mona 1 (1).png'
        },
        {
          id: 4,
          img: 'logo (1).png'
        },
        {
          id:5,
          img: 'adidas-9 1 (1).png'
        }

      ],
      [
        {
          id:6,
          img:'Vector (6).png'
        },
        {
          id:7,
          img:'mona 1 (1).png'
        },
        {
          id:8,
          img:'eurolines-1 1.png'
        },
        {
          id:9,
          img:'logo (1).png'
        },
        {
          id:10,
          img:'adidas-9 1 (1).png'
        },
      ],
      [
      {
          id:11,
          img:'Vector (6).png'
        },
        {
          id:12,
          img:'eurolines-1 1.png'
        },
        {
          id:13,
          img:'mona 1 (1).png'
        },
        {
          id:14,
          img:'logo (1).png'
        },
        {
          id:15,
          img:'adidas-9 1 (1).png'
        },
      ]],
      
      },
      mission:[
        {
          img:'clarity.png',
          title:'The King’s mission',
          text:'To maximise our clients’ ROI through marketing automation that works.'
        },
        {
          img:'fluent.png',
          title:'The King’s vision',
          text:'To be the number one automation agency on the planet.'
        },
        ]
    }
  },
  components : {
    Banner,
   Brands,
   MapPage,
   Blocks,
   HuaweiList,
   Values,
   LastPage
  }
}
</script>

<style lang="scss">
  .infoPage1AboutUS {
padding: 155px 183px 120px 190px;
background: #F5F5F5;;
    .aboutUS {
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    width: 100%;
        .aboutUsInfo {
            margin: 12px;
            width: 50%;
            h2 {
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 42px;
                line-height: 50px;
                margin-bottom: 24px;
                background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            p{
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 21px;
                line-height: 30px;
                color: #000000;
            }
        }
        .aboutUsImg {
            margin: 12px;
            width: 50%;
        img {
            width: 100%;
            object-fit: contain;
            height: 50%;
            }
        }
    }
.reverse{
display: flex;
flex-direction: row-reverse;
}

}
 .trophys{

  padding: 80px 190px;
  background-color: #09080E;
  img{
    width: 23%;
  }
  div{
    
  h3{
    text-align: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    margin-top: 0px;
    margin-bottom:60px;
    background: -webkit-gradient(linear, left top, right top, from(#F6EB61), to(#FFB25B));
    background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
  .tropyImgs{
    display: flex;
    justify-content: space-around;
  }
 
 }
 .mission{
  padding: 6% 10%;
    display:flex;
    justify-content: space-between;
  }
  
  .items{
    display: flex;
    width: 35%;
   
    div{
      position: absolute ;
      margin-top: 95px;
      margin-left: 130px;

    }
    h2{
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 10px;
      color: #000000;

    
    }
    p{
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 600;
      font-size: 21px;
      line-height: 20px;
      color: #000000;
      width: 60%;
    }
  }
    
</style>