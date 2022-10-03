<template>
  <div class="comparison">
    <div class="kingMidas" >
        <h1>KING MIDAS</h1>
        <p v-for="item in kingMidas" :key="item.id"> <img :src="require(`../assets/img/${item.img}`)" alt=""> {{item.text}}</p> 
    </div>
    <img src="../assets/img/logoVS.png" alt="">
    <div class="otherAgency">
        <h1>Other Agencies</h1>
        <p  v-for="item in otherAgencies" :key="item.id"> <img :src="require(`../assets/img/${item.img}`)"> {{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
 name:'Comparison',
 data(){
    return{
       kingMidas:[
        {
            id:1,
            text:"Global list of influencers and significant negotiation clout with mainstream publications",
            img:'toClick.png'
        },
        {
            id:2,
            text:"Exclusively dedicated to NFT, Web3 and Metaverse marketing ",
            img:'toClick.png'
        },
        {
            id:3,
            text:"Customisable marketing strategies, designed to fit individual needs ",
            img:'toClick.png'
        },
        {
            id:4,
            text:"Specialised Twitter and Discord tools designed to promote community engagement ",
            img:'toClick.png'
        },
        {
            id:5,
            text:"Part of a global network of renowned agencies, providing access to resources and connections around the world",
            img:'toClick.png'
        },
        {
            id:6,
            text:"No hidden fees  ",
            img:'toClick.png'
        },
        {
            id:7,
            text:"Trusted by a countless number of Web2 and Web3 brands",
            img:'toClick.png'
        },
        {
            id:8,
            text:"Proven ‘post mint’ blueprints, designed for long term success",
            img:'toClick.png'
        }
       ],
       otherAgencies:[
        {
            id:1,
            text:"Relationships are restricted by location and limited company connections ",
            img:'toRemove.png'
        },
        {
            id:2,
            text:"Traditional marketing agencies that have extended their offerings to Web3, simply to capitalise on a booming industry",
            img:'toRemove.png'
        },
        {
            id:3,
            text:"Operates under a ‘one size fits all’ model ",
            img:'toRemove.png'
        },
        {
            id:4,
            text:"Generic Twitter and Discord management",
            img:'toRemove.png'
        },
        {
            id:5,
            text:"Limited network of global resources/connections",
            img:'toRemove.png'
        },
        {
            id:6,
            text:"Experience limited to NFT projects or Web3 specific business",
            img:'toRemove.png'
        },
        {
            id:7,
            text:"Hidden and unexpected fees throughout marketing process ",
            img:'toRemove.png'
        },
        {
            id:8,
            text:"Short term strategies, not focused on future success",
            img:'toRemove.png'
        }
       ],

    }
 }
}
</script>

<style lang="scss">
.comparison {
display: flex;
justify-content: space-between;
background-color: #09080E;
padding: 120px 190px;
    img {
    width: 3%;
    height: 5%;
    }
    .kingMidas {
     width: 38%;
        img {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        }
    }
    
    .otherAgency {
        width: 38%;
        img {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        }
    }
   
    h1 {
    text-align: center;
    margin-bottom: 58px;
    color: #FFFFFF;
    }
    p {
    width: 100%;
    height: 60px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    }
    
}
</style>