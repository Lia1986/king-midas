<template>
    <div class="infoPage1">
      <div v-for = "(item) in pageSection" :key = item.id class="aboutMarketing" :class="{reverse:item.reverse}">
        <div class="aboutMarketingInfo">
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
        </div>
        <div class="aboutMarketingImg">
            <img :src="require(`../assets/img/page1Img/${item.img}`)" alt="">
        </div>
      </div>
    </div>
</template>

<script>
 export default {
    name : 'Page1',
    data (){
        return{
          pageSection:[
            {
                id:1,
                title:'Marketing automation solutions for every step of the customer journey',
                text:'As you’re no doubt aware, marketing strategies are developed with the sales funnel and customer journey as a focal point. So if you want to leverage marketing automation within your strategy, it’s important to know the automation agency you partner with uses the latest technology that will cater to prospects wherever they are in the sales funne When you collaborate with the marketing automation specialists at King Midas, you can rest assured that our team has both the expertise and technology to effectively execute automation throughout your marketing efforts within every stage of the customer journey. Through this, you’ll save a huge amount of time and resources that were once spent on the seemingly endless repetitive tasks which can then be applied elsewhere',
                img:'image (1).png',
                reverse:false
            },
            {
                id:2,
                title:'Marketing automation solutions for every step of the customer journey',
                text:'As you’re no doubt aware, marketing strategies are developed with the sales funnel and customer journey as a focal point. So if you want to leverage marketing automation within your strategy, it’s important to know the automation agency you partner with uses the latest technology that will cater to prospects wherever they are in the sales funne When you collaborate with the marketing automation specialists at King Midas, you can rest assured that our team has both the expertise and technology to effectively execute automation throughout your marketing efforts within every stage of the customer journey. Through this, you’ll save a huge amount of time and resources that were once spent on the seemingly endless repetitive tasks which can then be applied elsewhere',
                img:'image (2).png',
                reverse:true
            },
            {
                id:3,
                title:'Marketing automation solutions for every step of the customer journey',
                text:'As you’re no doubt aware, marketing strategies are developed with the sales funnel and customer journey as a focal point. So if you want to leverage marketing automation within your strategy, it’s important to know the automation agency you partner with uses the latest technology that will cater to prospects wherever they are in the sales funne When you collaborate with the marketing automation specialists at King Midas, you can rest assured that our team has both the expertise and technology to effectively execute automation throughout your marketing efforts within every stage of the customer journey. Through this, you’ll save a huge amount of time and resources that were once spent on the seemingly endless repetitive tasks which can then be applied elsewhere',
                img:'image.png',
                reverse:false
            }
          ] 
        }
    }
}


</script>


<style lang="scss">
   
.infoPage1 {
padding: 155px 183px 120px 190px;
background: #09080E;
    .aboutMarketing {
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    width: 100%;
        .aboutMarketingInfo {
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
                color: #FFFFFF;
            }
        }
        .aboutMarketingImg {
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


</style>