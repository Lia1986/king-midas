<template>
    <div class="FAQ">
        <h1> F.A.Q.</h1>
        <div class="queryList">         
                <div  v-for = "(section,index) in questionSection" :key = "section.id" >
                    <div class='queriSection' v-if="index + 1 <= questionSection.length " >
                        <p> {{section.seeMessage ? section.p : 'No answer'}}</p>
                        <img :src="require(`../assets/img/${section.img}`)" alt="questions"
                        @click="toggleBlock(section.id)">
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
                p : 'What are the steps involved in the application process??',
                img : "Vector (4).png"
            },
            {
                seeMessage:true,
                id:2,
                p : 'Do I need to include a cover letter with my application?',
                img : "Vector (4).png"
            },
            {
                seeMessage:true,
                id:3,
                p : 'Do I need to include a cover letter with my application?',
                img : "Vector (4).png"
            },
            {
                seeMessage:true,
                id:4,
                p : 'How can I contact the recruitment team at King Midas directly?',
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
   @font-face {
font-family: 'Raleway';
src: url(../assets/img/Raleway/static/Raleway-Regular.ttf);
}
@font-face {
font-family: 'Manrope';
src: url(../assets/img/Raleway/static/Raleway-Italic.ttf);
}


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
    padding: 7% 10% 11% 7%;
    background: #F5F5F5;
    .queryList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       
        >div{
           
           width:49%;
        }
        .queriSection {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 22px 16px 22px 30px;
            margin-bottom: 40px;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px rgba(136, 60, 60, 0.1);
            border-radius: 6px;
            p{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                display: flex;
                align-items: center;
                color: #120804;
            }  
            img{
                padding-left: 10px;
                width:40px;
                height: 40px;
            }
        }
    }
}


@media only screen and (max-width: 1359px) {
  .FAQ {
    padding: 4% 3%;
    .queryList {
      .queriSection {
        img {
          width: 30px;
          height: 30px;
        }
        p {
          font-size: 19px;
          line-height: 24px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .FAQ {
    padding: 2% 4%;
    .queryList {
      .queriSection {
        margin-bottom: 25px;
        padding: 15px;
        img {
          width: 25px;
          height: 25px;
        }
        p {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .FAQ {
    h1 {
      font-size: 20px;
      line-height: 23px;
    }
    padding: 3% 1%;
    .queryList {
      .queriSection {
        margin-bottom: 20px;
        padding: 10px;
        p {
          font-size: 13px;
          line-height: 15px;
        }
        img {
          width: 20px;
          height: 20px;
          align-items: center;
          margin: auto 0px;
        }
      }
    }

    h1 {
      font-size: 28px;
      line-height: 28px;
      margin-bottom: 15px;
    }
  }
}
@media only screen and (max-width: 575px) {
  .FAQ {
    padding: 32px 16px 16px 16px;

    .queryList {
      display: block;
      > div {
        width: 100%;
      }
      .queriSection {
        margin-bottom: 16px;
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}

</style>