<template>
  <div class="valuesPage">
    <div class="valuesTitle"><h2>Our Kingdom’s values</h2></div>
    <div class="valuesList">
        <div v-for="item in valuePages" :key="item.id" class="everyValue">
            <img :src="require(`../assets/img/valuesItems/${item.img}`)" >
            <h3 class="valueInfo">{{item.title}}</h3>
            <p class="valueText">{{item.text}}</p>
        </div>
    </div>
  </div>
</template>      

<script>
export default {
 data(){
    return{
        valuePages:[
            {
                id:1,
                img:'img1.png',
                title:'Total transparency',
                text:'Never leave clients in the dark. Maintain constant communication and be fully accountable.'
            },
            {
                id:2,
                img:'img2.png',
                title:'Surpass, don’t meet',
                text:'Goals are not simply made to be met, but absolutely crushed. Aim for the stars - always.'
            },
            {
                id:3,
                img:'img3.png',
                title:'Everyone has a voice',
                text:'Every idea should be heard and explored, so speak up - it might just be the one that changes everything.'
            },
            {
                id:4,
                img:'img4.png',
                title:'Side by side',
                text:'We all share the same goals, and smashing them is a lot easier when everyone’s working together as one.'
            },
            {
                id:5,
                img:'img5.png',
                title:'No hesitation, no surrender',
                text:'Don’t wait to get the job done. Dedicate yourself to sorting it out today and don’t pump the brakes ‘til you’ve ticked it off your to-do list.'
            },
            {
                id:6,
                img:'img6.png',
                title:'Constantly evolving',
                text:'It’s no good being stagnant in a dynamic world. Be open to change and adapt wherever and whenever is necessary.'
            },
            
        ]
    }
 }
}
</script>

<style lang="scss">
    .valuesPage{
        padding: 5% 10% ;
        background: #09080E;
        .everyValue{
            width: 30%;
            padding: 20px;
            
        }
        .valuesList{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .valuesTitle{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 42px;
                line-height: 50px;
                text-align: center;
                background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 60px;
        }
        .valueInfo{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                line-height: 36px;
               
                color: #FFFFFF;

        }
        .valueText{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;

            color: #FFFFFF;
            flex: none;
            order: 2;
            flex-grow: 0;
            width: 80%;
        }  
    
    }

</style>