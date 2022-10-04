<template>
    <div>
  <div class="blogPage">

    <Page2 :pageSection = 'pageSection2'  :style="{padding : '0px'}"/>
   <div class="searchPage">
    <div class="menuList" >
        <input type="text" placeholder="Search">
        <h2>Blog Categories</h2>
        <p class="menuListTitle">View All</p>
        <p v-for="item in list" :key="item.id"> 
            {{item.text}}
        </p>
    </div>
    <div class="menuInfo">          
        <div class="infoColumn" v-for="item in info" :key="item.id">
          <img :src="require(`../assets/img/blogImg/${item.img}`)" alt="">
          <h2>{{item.title}}</h2>
          <p> {{item.text}}</p>
          <a href="" >Learn More  <img src="../assets/img/blogImg/system-uicons_arrow-right.svg" alt=""></a>
        </div>
    </div>
   
   </div>
      
   <div class="clicks">
         <img src="../assets/img/blogImg/Vector.svg" alt="">
         <p>1</p>
         <router-link to="/bloginside"> <p>2</p> </router-link> 
         <p>3</p>
         <p>4</p>
         <p>...</p>
         <p>10 </p>
         <img src="../assets/img/blogImg/Vector (1).svg" alt="">
    </div>
   
  </div>
  <LastPage />
</div>
</template>

<script>
    import Page2 from '../components/Page2.vue';
    import LastPage from '../components/LastPage.vue';
export default {
data(){
    return{
        pageSection2:[
         {
                id:1,
                title:'Your guide to creating, buying and selling NFTs',
                text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                img:'blogTitle.png',
                reverse:true,
                background : '#ffffff',
                textColor: '#000000',
                black:true,
                background : true
                
            },
          
         ], 
         list : [
            {
                id:1,
                text:'Ecommerce'
            },
            {
                id:2,
                text:'Software'
            },
            {
                id:3,
                text:'CRM for Automation'
            },
            {
                id:4,
                text:'B2B Marketing Automation'
            },
            {
                id:5,
                text:'Email'
            },
            {
                id:6,
                text:'Hubspot'
            },
            {
                id:7,
                text:'Wordpress'
            },
            {
                id:8,
                text:'Funnel'
            },
            {
                id:9,
                text:'Email Design'
            },
            {
                id:10,
                text:'Email Strategy'
            },
            {
                id:11,
                text:'Campaign Management'
            },
            {
                id:12,
                text:'Email Consulting'
            },
            {
                id:13,
                text:'Email Automation - trigger based'
            },
            {
                id:14,
                text:'EcoEmail Automation - behavioural content mmerce'
            },
            {
                id:15,
                text:'Email Automation - lifecycle engagement '
            },
            {
                id:16,
                text:'Email Automation Platforms'
            },
            {
                id:17,
                text:'Email Automation Platforms - sharpspring'
            },
            {
                id:18,
                text:'Email Automation Platforms - campaign monitor'
            },
            {
                id:19,
                text:'Email Automation Platforms - mailchimp'
            },
            {
                id:20,
                text:'Vision 6'
            },
            {
                id:21,
                text:'Emarsys - automation '
            },
            {
                id:22,
                text:'Zapier '
            },
             {
                id:23,
                text:'Shopify'
            },
            {
                id:24,
                text:'CRO Strategy'
            },
            {
                id:25,
                text:'CRO UX'
            },
            {
                id:26,
                text:'CRO Mobile'
            },
            {
                id:27,
                text:'CRO AB testing'
            },
            {
                id:28,
                text:'Heat mapping and eye tracking'
            },
            {
                id:29,
                text:'CRO Analysis'
            },
          
         ],
         info : [
            {
                id:1,
                img:'photo1.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo2.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo3.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo4.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo5.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo6.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:1,
                img:'photo7.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo8.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo9.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo10.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo11.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo12.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo13.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },
            {
                id:2,
                img:'photo14.png',
                title:'Top 20 NFT tokens by market cap',
                text:'As they continue to soar in popularity and more are minted and added to the market every day, you may find that it’s becoming a little bit more convoluted and cloudy which NFT collections you should consider investing in.'
            },

        ]}
},
components:{
    Page2,
    LastPage
}
}
</script>

<style lang="scss">
    .blogPage{
        padding: 7% 10%;
        .searchPage{
            display:flex;
            margin-top: 120px;
            justify-content: space-between;
            .menuInfo{
                display: flex;
                flex-wrap: wrap;
                width: 60%;
                margin-bottom: 40px;
                margin-left: 40px;
              
                .infoColumn{
                    width:  45%;
                    margin-left: 40px;
                    margin-top: 40px;;
                    a{
                        display: flex;
                        font-family: 'Raleway';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 21px;
                        line-height: 30px;
                        align-items: center;
                        background: linear-gradient(90deg, #F6EB61 0%, #fcaa4d 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                       

                        img{
                            width: 20px;
                            margin-left: 4px;
                        }
                    }
                }
                img{
                    width: 100%;
                }
            }
        }
        .menuList{

            width: 28%;
            input{
                background: #FFFFFF;
                border: 1.5px solid #D8D8D8;
                border-radius: 6px;
                padding: 14px;
                width: 93%;
            }
            .menuListTitle{
                padding: 14px 16px;
                gap: 10px;
                background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
                border-radius: 6px;
                color: white;
            }
            p{
                border-bottom: 1px solid #E4E4E4;
                border-radius: 6px;
                padding: 16px;
            }           
        }    
        .clicks{
            display: flex;
            float: right;
            p{
                padding: 10px;
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 600;
                font-size: 22px;
                line-height: 26px;
                display: flex;
                align-items: center;
                text-align: center;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: #101820;

            }
        }   
    }

</style>