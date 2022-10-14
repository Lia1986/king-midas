<template>
  <div class="infoPage1">
    <div
      v-for="item in pageSection"
      :key="item.id"
      class="aboutMarketing"
      :class="{ reverse: item.reverse }"
    >
      <div class="aboutMarketingInfo">
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </div>
      <div class="aboutMarketingImg">
        <img :src="require(`../assets/img/page1Img/${item.img}`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      pageSection: [
        {
          id: 1,
          title:
            "Marketing automation solutions for every step of the customer journey",
          text:
            "As you’re no doubt aware, marketing strategies are developed with the sales funnel and customer journey as a focal point. So if you want to leverage marketing automation within your strategy, it’s important to know the automation agency you partner with uses the latest technology that will cater to prospects wherever they are in the sales funne When you collaborate with the marketing automation specialists at King Midas, you can rest assured that our team has both the expertise and technology to effectively execute automation throughout your marketing efforts within every stage of the customer journey. Through this, you’ll save a huge amount of time and resources that were once spent on the seemingly endless repetitive tasks which can then be applied elsewhere",
          img: "image (1).png",
          reverse: false
        },
        {
          id: 2,
          title:
            "Marketing automation solutions for every step of the customer journey",
          text:
            "As you’re no doubt aware, marketing strategies are developed with the sales funnel and customer journey as a focal point. So if you want to leverage marketing automation within your strategy, it’s important to know the automation agency you partner with uses the latest technology that will cater to prospects wherever they are in the sales funne When you collaborate with the marketing automation specialists at King Midas, you can rest assured that our team has both the expertise and technology to effectively execute automation throughout your marketing efforts within every stage of the customer journey. Through this, you’ll save a huge amount of time and resources that were once spent on the seemingly endless repetitive tasks which can then be applied elsewhere",
          img: "image (2).png",
          reverse: true
        },
        {
          id: 3,
          title:
            "Marketing automation solutions for every step of the customer journey",
          text:
            "As you’re no doubt aware, marketing strategies are developed with the sales funnel and customer journey as a focal point. So if you want to leverage marketing automation within your strategy, it’s important to know the automation agency you partner with uses the latest technology that will cater to prospects wherever they are in the sales funne When you collaborate with the marketing automation specialists at King Midas, you can rest assured that our team has both the expertise and technology to effectively execute automation throughout your marketing efforts within every stage of the customer journey. Through this, you’ll save a huge amount of time and resources that were once spent on the seemingly endless repetitive tasks which can then be applied elsewhere",
          img: "image.png",
          reverse: false
        }
      ]
    };
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
.infoPage1 {
  padding: 7% 10%;
  background: #09080e;
  .aboutMarketing {
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    width: 100%;
    .aboutMarketingInfo {
      margin: 12px;
      width: 50%;
      h2 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        margin-bottom: 24px;
        background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      p {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 30px;
        color: #ffffff;
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
  .reverse {
    display: flex;
    flex-direction: row-reverse;
  }
}

@media only screen and (max-width: 1359px) {
  .infoPage1 {
    .aboutMarketing {
      .aboutMarketingInfo {
        h2 {
          font-size: 30px;
          line-height: 45px;
        }
        p {
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .infoPage1 {
    .aboutMarketing {
      .aboutMarketingInfo {
        h2 {
          font-size: 24px;
          line-height: 32px;
        }
        p {
          font-size: 14px;
          line-height: 23px;
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .infoPage1 {
    .aboutMarketing {
      display: block;
      text-align: center;
      margin-bottom: 32px;
      .aboutMarketingInfo {
        width: 100%;
        margin-left: 0px;
      }
      .aboutMarketingImg {
        width: 100%;
        margin: 0px;
      }
    }
  }
}
@media only screen and (max-width: 575px) {
  .infoPage1 {
    padding-bottom: 32px;
    .aboutMarketing {
      display: block;

      .aboutMarketingInfo {
        h2 {
          font-size: 18px;
          line-height: 24px;
        }
        p {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
