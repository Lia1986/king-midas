<template>
  <div class="FAQ">
    <h1>F.A.Q.</h1>
    <div class="queryLists">
    <div class="queryList">
      <div v-for="(section, index) in questionSection.slice(0,questionSection.length/2)" :key="section.id">
       
        <div
          class="queriSection"
          v-if="index <= questionSection.length"
        >
          <div>
            <p>{{  section.p  }}</p>
            <img
            :src="
              section.seeMessage
                ? require(`../assets/img/${section.img}`)
                : require(`../assets/img/${section.img2}`)
            "
            alt="questions"
            @click="toggleBlock(section.id)"
          />
        </div>
      
          <div  :class="!section.seeMessage ? 'collapse ' : ''">
            
            <p>{{!section.seeMessage ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" : ""}}</p>     
         
          </div>
        
        </div>
     
      </div>
    </div>
    <div class="queryList">
      <div v-for="(section, index) in questionSection.slice(questionSection.length/2,questionSection.length)" :key="section.id">
        <div
          class="queriSection"
          v-if="index <= questionSection.length"
        >
          <div>
            <p>{{  section.p  }}</p>
            <img
            :src="
              section.seeMessage
                ? require(`../assets/img/${section.img}`)
                : require(`../assets/img/${section.img2}`)
            "
            alt="questions"
            @click="toggleBlock(section.id)"
          />
        </div>
            <div  :class="!section.seeMessage ? 'collapse' : ''">
            <p>{{!section.seeMessage ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" : ""}}</p>
         
          </div>
         
        </div>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      questionSection: [
        {
          seeMessage: true,
          id: 1,
          p: "What is marketing automation?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 2,
          p: "Is marketing automation a good job?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 3,
          p: "What is an automation agency?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 4,
          p: "Why does my business need marketing automation services?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 5,
          p: "How does marketing automation create more sales?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 6,
          p: "What is a marketing automation specialist?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 7,
          p: "What is a marketing automation role?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 8,
          p: "What is a marketing automation company?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 9,
          p: "How much does marketing automation cost?",
          img: "Vector (4).png",
          img2: "minus.svg"
        },
        {
          seeMessage: true,
          id: 10,
          p:
            "What software is the best for marketing automation to generate leads?",
          img: "Vector (4).png",
          img2: "minus.svg"
        }
      ]
    };
  },
  methods: {
    toggleBlock(id) {
      this.questionSection.forEach(function(obj) {
        obj.id === id
          ? (obj.seeMessage = !obj.seeMessage)
          : (obj.seeMessage = true);
      });
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Raleway";
  src: url(../assets/img/Raleway/static/Raleway-Regular.ttf);
}
@font-face {
  font-family: "Manrope";
  src: url(../assets/img/Raleway/static/Raleway-Italic.ttf);
}

.FAQ {
  .queryLists{
    display: flex;
    justify-content: space-between;
  }
  h1 {
    text-align: center;
    margin-bottom: 60px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    color: #101820;
    
  }
  padding: 7% 10% 10% 7%;
  background: #f5f5f5;

  .queryList {
    width:49% ;
    .queriSection {
     
      align-items: center;
      justify-content: space-between;
      padding: 22px 16px 22px 30px;
      margin-bottom: 40px;
      background: #ffffff;
      box-shadow: 0px 0px 10px rgba(136, 60, 60, 0.1);
      border-radius: 6px;
      >div{
       display: flex;
        align-items: center;
        justify-content: space-between;
     
      }
    }
   

    .collapse {
      display: block;
      padding-top: 20px !important;
      padding-bottom: 20px;
     
      transition:all 1s linear ;
     
    }
    
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      color: #120804;
    
    }
    img {
      padding-left: 10px;
      width: 40px;
      height: 40px;
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
