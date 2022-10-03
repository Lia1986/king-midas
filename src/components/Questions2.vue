<template>
    <div class="FAQ">
        <h1> F.A.Q.</h1>
        <div class="queryList">
            <div class="queryList1" >
                <div  v-for = "(section,index) in questionSection" :key = "section.id" >
                    <div class='queriSection' v-if="index + 1 <= questionSection.length / 2" >
                        <p> {{section.seeMessage ? section.p : 'No answer'}}</p>
                        <img :src="require(`../assets/img/${section.img}`)" alt="questions"
                        @click="toggleBlock(section.id)">
                    </div>
                </div>
            </div>
      
            <div class="queryList2">
                <div v-for = "(section,index) in questionSection" :key = "section.id" >
                    <div  class='queriSection' v-if="index  >= questionSection.length / 2">
                        <p> {{section.seeMessage ? section.p : 'No answer'}}</p>
                        <img :src="require(`../assets/img/${section.img}`)" alt="questions"
                        @click="toggleBlock(section.id)">
                    </div>
            </div>

        </div>
    </div>

    </div>
</template>


<script>
export default {
    name: 'Questions',
    data () {
        return {
            questionSection:[
            {
                seeMessage:true,
                id:1,
                p : 'What is marketing automation?',
                img : "Vector (4).png"
            },
            {
                seeMessage:true,
                id:2,
                p : 'Is marketing automation a good job?',
                img : "Vector (4).png"
            },
            {
                seeMessage:true,
                id:3,
                p : 'What is an automation agency?',
                img : "Vector (4).png"
            },
            {
                seeMessage:true,
                id:4,
                p : 'Why does my business need marketing automation services?',
                img : "Vector (4).png"
            },
            ]
        }

    },
    methods: {
        toggleBlock(id){
         this.questionSection.forEach(function(obj){
          obj.id === id ? obj.seeMessage = !obj.seeMessage : obj.seeMessage = true
         })         
        }
    }
}
</script>


<style lang="scss">


.FAQ {
    h1 {
        text-align: center;
        margin-bottom: 60px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        color: #101820;
    }
    padding: 120px 190px 200px 120px;
    background: #F5F5F5;
    .queryList {
        display: flex;
        justify-content: space-around;
        p{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 21px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: #120804;
        }
        .queryList1{
            width: 45%;
        }
        .queryList2{
            width: 45%;
        }
        .queriSection {
                display: flex;
                justify-content: space-between;
                padding: 22px 16px 22px 30px;
                width: 100%;
                height: 40px;
                margin-bottom: 40px;
                background: #FFFFFF;
                box-shadow: 0px 0px 10px rgba(136, 60, 60, 0.1);
                border-radius: 6px;
        }
    }
}


</style>