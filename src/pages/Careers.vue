<template>
<div>
   <Banner :banner='banner' />
   <div class="kingdomList">
      <div class="kingdomText">
        <h2 class="titleKingdom">Why join our Kingdom?</h2>
      </div>
      <div class="infoList">
        <div class="infoList1" v-for="item in infoList" :key = "item.id">
          <img :src="require(`../assets/img/kingdomImg/${item.img}`)" alt=""> 
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
      </div>
      </div>
    </div>
    <div class="looking">
        <h1>What we look for in our candidates</h1>
       <div class="iconsList">
            <div class="icons" v-for="item in icons" :key="item.id">
                <img :src="require(`../assets/img/lookingIcons/${item.img}`)" alt="">
                <p>{{item.text}}</p>
            </div>
        </div>
    </div>
    <Select />
    <Values />
    <Blocks />
    <MapPage />
    <Brands :brands = 'brands'/>

    <div class="cvPage">
        <div class="cvTitle">
           <h1>Send through your CV and you’ll hear back from us soon.</h1>
           <p>Can’t find any roles that suit your particular set of skills but still want to join our team?</p>
        </div>
        <div class="inputList">
          <div class="regInput">
          <div v-for="input in regInput" :key="input.id" >
            <input type="text" :placeholder='input.text'>
          </div>
        </div>
          <div class="inputMessage">
            <textarea name="" id="" cols="30" rows="10"  placeholder="Message *"></textarea> >
          </div>
          <div class="toApply">
            <div class="upload">
              <img src="../assets/img/uploadIcon.svg" alt="">
              <a href="">Upload Your Resume</a>
            </div>
            <button>Apply Now</button>
          </div>

        </div>
    </div>
    <Questions2 />
    <LastPage />
</div>
</template>

<script>
    import Banner from '../components/Banner.vue';
    import Select from '../components/Select.vue';
    import Values from '../components/Values.vue';
    import Blocks from '../components/Blocks.vue';
    import MapPage from '../components/MapPage.vue';
    import Brands from '../components/Brands.vue';
    import Questions2 from '../components/Questions2.vue';
    import LastPage from '../components/LastPage.vue';
export default {
data(){
    return{
        banner : {
        background: '',
        bannerImg: 'careersImg1.png',
        heading: 'Here comes the King.',
        content: 'King Midas is a team of passionate marketing automation specialists with an obsession for obliterating the goals our clients set for us.',
        button: 'Get a Free Proposal'
      },
      infoList:[
        {
          id:1,
          img:'Group (2).png',
          title:'It’s money, baby',
          text:'We get it - cash is King. And you’ll be happy to know that when you work at King Midas you’ll be paid incredibly well. Because we know to get the best, you gotta pay for the privilege.',
        },
        {
          id:2,
          img:'img2.png',
          title:'Incredible work culture',
          text:'What do you get when you mix plenty of production, a heck of a lot of fun and laughter and loads of energy together? The work culture you’ll find here at King Midas!',
        },
        {
          id:3,
          img:'candy.png',
          title:'Sweet perks',
          text:'Money is of course important, but what about some awesome perks to sweeten the deal? From working from home arrangements and international travel to vouchers for health retreats, gourmet lunch spreads and more, you’ll love all the extra benefits.',
        },
        {
          id:4,
          img:'et_global.png',
          title:'Global opportunities',
          text:'With agencies in several countries all over the world, this comes with relocation opportunities so you can experience new cultures in foreign countries while working at a leading company.',
        },
        {
          id:5,
          img:'img3.png',
          title:'Skill development',
          text:'Our massive group of digital agencies provide countless different services available such as content marketing, website development, reputation management and so much more. You’ll learn new skills across a variety of areas of digital marketing to further your career.',
        },
        {
          id:6,
          img:'img4.png',
          title:'Global training',
          text:'Because we have some of the best digital marketing staff in the business, when you come and work with us you have the opportunity to engage with them via our global training program.',
        },
      ],
      icons:[
        {
            id:1,
            img:'icon1.svg',
            text:'Humility'
        },{
            id:2,
            img:'icon2.svg',
            text:'Passion'
        },{
            id:3,
            img:'icon3.svg',
            text:'Ambition'
        },{
            id:4,
            img:'icon4.svg',
            text:'Positivity'
        },{
            id:5,
            img:'icon5.svg',
            text:'Respectfulness'
        },{
            id:6,
            img:'icon6.svg',
            text:'Honesty'
        },{
            id:7,
            img:'icon7.svg',
            text:'Optimism'
        },{
            id:8,
            img:'icon8.svg',
            text:'Creativity'
        },{
            id:9,
            img:'icon9.svg',
            text:'Determination'
        },{
            id:10,
            img:'icon10.svg',
            text:'Resourcefulness'
        },
      ],
      brands: {
        title: 'Stop, collaborate and listen ' ,
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
      regInput:[
        {
          id:1,
          text:'First Name *'
        },
        {
          id:2,
          text:'Email *'
        },
        {
          id:3,
          text:'Phone *'
        },
        {
          id:4,
          text:'Country *'
        },
      ]
    }
},
components:{
    Banner ,
    Select,
    Values,
    Blocks,
    MapPage,
    Brands,
    Questions2,
    LastPage
}
}
</script>

<style lang="scss">
    
.kingdomList{
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 120px 190px;
.kingdomText{
.titleKingdom {
    display: flex;
    justify-content: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    color: #101820;
}
p{
    margin: auto;
    margin-top: 16px;
    width: 815px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    color: #101820;
}
}
.infoList{
display: flex;
justify-content: space-around;
background: #FFFFFF;
flex-wrap: wrap;
}
  .infoList1{
    margin-top: 50px;
    padding: 20px;
    width: 27%;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(2, 2, 2, 0.08);
    border-radius: 12px;
    img{
    width: 50px;
    }
    h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        margin: 10px 0px;
        color: #101820;
    }
    p {
        width: 95%;
        height: 100%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        color: #101820;
    }
    


}




}
.looking{
    text-align: center;
    padding: 70px 190px;
    background-color:#09080E ;
    .iconsList{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .icons{
            width: 17%;
            margin-top: 70px;
            p{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                line-height: 36px;
            
                text-align: center;
                color: #FFFFFF;

            }
        }
    }
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

    }
}
.cvPage{
  
  padding: 60px 30%;
  background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
  .cvTitle{
        text-align: center;
        h1{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 800;
            font-size: 54px;
            line-height: 70px;
            text-align: center;
            color: #101820;
            margin-bottom: 16px;
        }
        p{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            color: #101820;

        }
  }
  .regInput{
    padding: 60px 64px 12px 64px;
      display: flex;
      flex-wrap: wrap;
     
      div{
        margin-right:20px ;
        padding: 16px;
        gap: 10px;
        width: 41%;
        background: #FFFFFF;
        border-radius: 6px;
        margin-top: 30px;
        input{
          border: 0px;
          padding: 0px;
        }
       
      }
  }
  .inputMessage{
  padding: 30px 64px 12px 64px;;
  
   textarea{
    width: 90%;
    height: 213px;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 16px;
    border:0px
   }
  }
  .toApply{
    display: flex;
    justify-content: space-between;
    padding:25px 12% 28px 8%;
     .upload{
      display: flex;
      align-items: center;
      a{
        margin-left: 15px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 30px;
        color: #101820;
        text-decoration: none;
      }
     }
     button{
      padding: 16px 24px;
      gap: 10px;
      width: 150px;
      height: 54px;
      background: #101820;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
      border-radius: 10px;
      color: #EEF5F9;
      border: 0px;
     }

  }
}

</style>