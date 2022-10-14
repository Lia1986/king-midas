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
    @font-face {
font-family: 'Raleway';
src: url(../assets/img/Raleway/static/Raleway-Regular.ttf);
}
@font-face {
font-family: 'Manrope';
src: url(../assets/img/Raleway/static/Raleway-Italic.ttf);
}
.comparison {
display: flex;
justify-content: space-between;
background-color: #09080E;
padding: 7% 10%;
    img {
    width: 3%;
    height: 5%;
    }
    .kingMidas {
     width: 45%;
        img {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        }
    }
    
    .otherAgency {
        width: 45%;
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
 
    padding: 10px;
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
@media only screen and (max-width: 1359px) {
   .comparison{
    padding: 6% 9%;
    .kingMidas{
        h1{
            margin-bottom: 20px;
        }
        p{
            font-size: 15px;
            line-height: 20px;
            img{
            width: 27px;
            height: 27px;
        }
        }
        
    }
    .otherAgency{
        h1{
            margin-bottom: 20px;
        }
        p{
            font-size: 15px;
            line-height: 20px;
            img{
            width: 27px;
            height: 27px;
        }
        }
    }
   }
}
@media only screen and (max-width: 1150px){
    .comparison{
        padding: 5% 8%;
    .kingMidas{
        h1{
            margin-bottom: 12px;
         

        }
        p{   
            font-size: 14px;
            line-height: 19px;
            margin-bottom: 15px;
            img{
                width: 24px;
                height: 24px;
            }
        }
    }
    .otherAgency{
        h1{
            margin-bottom: 12px;
         

        }
        p{   
            font-size: 14px;
            line-height: 19px;
            margin-bottom: 15px;
            img{
                width: 24px;
                height: 24px;
            }
        }
}}
}
@media only screen and (max-width: 767px) {
   .comparison{
    .kingMidas{
        h1{
            margin-bottom: 15px;
            font-size: 20px;
        }
        p{   
            font-size: 13px;
             line-height: 17px;
             margin-bottom: 7px;
            img{
                width: 18px;
                height: 18px;
            }
        }
    }
    .otherAgency{
        h1{
            margin-bottom: 15px;
            font-size: 20px;
        }
        p{   
            font-size: 13px;
             line-height: 17px;
             margin-bottom: 7px;
            img{
                width: 18px;
                height: 18px;
            }
        }
    }
   }
}
@media only screen and (max-width: 575px) {
   .comparison{
    display: block;
    
    >img{    
            width: 12%;
            margin-left: 43%;
        }
    .kingMidas{
        width: 100%;

        h1{
            margin-bottom: 15px;
            font-size: 20px;
        }
        p{   
            font-size: 13px;
             line-height: 17px;
             margin-bottom: 7px;
            img{
                width: 18px;
                height: 18px;
        }
        }
        
    }
    .otherAgency{
       
        margin-top:32px;
        width: 100%;
        h1{
            margin-bottom: 15px;
            font-size: 20px;
        }
        p{   
            font-size: 13px;
             line-height: 17px;
             margin-bottom: 7px;
            img{
                width: 18px;
                height: 18px;
        }
        }
    }
   }
}
</style>