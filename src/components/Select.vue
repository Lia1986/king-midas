<template>
  <div class="select">
     <h1>Current positions ready and waiting for your application</h1>
     <div class="selectSection" v-for="item in selects" :key="item.id">
        <div><h2>{{item.title}}</h2></div>
        <div class="selectIcon">
            <div><img :src="require(`../assets/img/selectImg/${item.img1}`)" alt=""> <p>2022-12-27 - 2022-01-31</p></div>
            <div><img :src="require(`../assets/img/selectImg/${item.img2}`)" alt=""> <p>Yerevan, Armenia</p></div>
            <div><img :src="require(`../assets/img/selectImg/${item.img3}`)" alt=""></div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
        selects:[
            {
                id:1,
                title:"Web Developer",
                img1:'imgDate.svg',
                img2:"Locat.svg",
                img3:"icon.svg"
            },
            {
                id:2,
                title:"Web Developer",
                img1:'imgDate.svg',
                img2:"Locat.svg",
                img3:"icon.svg"
            },
            {
                id:3,
                title:"Web Developer",
                img1:'imgDate.svg',
                img2:"Locat.svg",
                img3:"icon.svg"
            },
            {
                id:4,
                title:"Web Developer",
                img1:'imgDate.svg',
                img2:"Locat.svg",
                img3:"icon.svg"
            }
        ]
    }
 }
}
</script>

<style lang="scss">
    *{
        padding: 0px;
        margin:0px
    }
    .select{
        padding: 120px 300px;
       
        text-align: center;
        h1{
            margin-bottom: 60px;
        }
        h2{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 48px;
            letter-spacing: 0.07em;
            color: #101820;
        }
        .selectSection{
            display: flex;
            background: #FFFFFF;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
            padding: 20px;
            margin-top: 30px;
            border-radius: 6px;
            justify-content: space-between;
            align-items: center;
            .selectIcon{
                display: flex;
              
                div{
                    display: flex;
                    align-items: center;
                    margin-left:120px ;
                    p{
                        margin-left:5px;
                        font-family: 'Raleway';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 21px;
                        font-feature-settings: 'pnum' on, 'lnum' on;
                        color: #101820;
                        opacity: 0.4;
                    }
                    
                }
            }
        }
    }


</style>