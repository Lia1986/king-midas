<template>
    <div class="huaweiList">
        <div class="huaweiTitle">
             <p>The crown doesn’t make the King; their actions do. 
                And at King Midas, we’ve been busy proving why we deserve the marketing automation throne.
             </p>
        </div>
       <div style="display:flex">
        <div class="container" v-for="item in huaweiList" :key="item.id">
            <div class="manager-textbox">
                <img :src="require(`../assets/img/${item.img}`)" class="manager-portrait" style="height:100px">
                <div class="manager-text">
                    <h2>{{item.title}} </h2>
                    <p>{{item.text}}
                    </p>
                </div>
            </div>    
        </div>  
    </div>
       
  </div>
</template>

<script>
export default {
 data () {
    return{
        huaweiList:[
            {
            id:1,
            img:'Ellipse 3.png',
            title:'Lorem Ipsum ',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
            id:2,
            img:'Ellipse 3.png',
            title:'Lorem Ipsum ',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            },
            {
            id:3,    
            img:'Ellipse 3.png',
            title:'Lorem Ipsum ',
            text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            }
        ]
    }
 }
}
</script>

<style lang="scss">
    .huaweiList{
        padding: 6% 10%;
        background: linear-gradient(90deg, #F6EB61 0%, #ffb25b 100%);
      
        .container{
            
            margin-right: 20px;
        }
        .huaweiTitle{
            width: 70%;
            margin: auto;
            margin-bottom: 180px ;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 42px;
            line-height: 50px;
            text-align: center;
            color: #FFFFFF;
        }
    }
.manager-headline {
    font-size: 24px;
    text-align: center;
}

.manager-textbox {
    padding-top:  105px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
}

.manager-text {
    
     h2{
        text-align: center;
     }
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 30px;
        color: #000000;
    }
}

#manager  .teaser-header-what {
    padding-left: 0px;
}
.manager-portrait {
 position: absolute;
 top: -50px;
 left: 50%;
 -webkit-transform: translateX(-50%);
 transform: translateX(-50%);
 border-radius: 50%;

}
</style>