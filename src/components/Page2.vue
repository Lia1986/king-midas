<template>
  <div
    class="infoPage2"
    :style="{ backgroundColor: background ? 'white' : 'black' }"
  >
    <div
      class="page2Section"
      v-for="item in pageSection"
      :key="item.id"
      :class="{ reverse: item.reverse }"
    >
      <div>
        <h2
          :class="
            item.white
              ? 'whiteClass'
              : item.black
              ? 'blackClass'
              : 'yellowClass'
          "
        >
          {{ item.title }}
        </h2>
        <p :style="{ color: background ? 'black' : 'white' }">
          {{ item.text }}
        </p>
        <button class="proposalButton">Get a Free Proposal</button>
      </div>
      <div class="infoPage2Img">
        <img :src="require(`../assets/img/page2Img/${item.img}`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page2",
  props: ["pageSection"],
  data() {
    return {
      background: false
    };
  },
  created() {
    this.pageSection.forEach(item => {
      this.background = item.background;
    });
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
.infoPage2 {
  padding: 7% 10%;
  background-color: black;
}
.page2Section {
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    margin-right: 32px;
    width: 50%;
    p {
      font-family: "Manrope";
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 30px;
      color: #ffffff;
    }
    img {
      width: 100%;
    }

    h2 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 50px;
      margin-bottom: 24px;
      width: 100%;
    }
  }
}
.proposalButton {
  padding: 16px 32px;
  border: none;
  margin-top: 32px;
  background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
  border-radius: 6px;
  height: 45px;
  font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 16px;

text-align: center;
color: #FFFFFF;
}
.reverse {
  display: flex;
  flex-direction: row-reverse;
}
.yellowClass {
  background-color: #f3ec78;
  background-image: linear-gradient(90deg, #ece364 0%, #ffb25b 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.blackClass {
  color: black;
}
.whiteClass {
  color: white;
}
.whiteClassDisplay {
  background-color: #ffffff;
}
@media only screen and (max-width: 1359px) {
  .infoPage2 {
    .page2Section {
      margin-bottom: 60px;
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
@media only screen and (max-width: 1150px) {
  .infoPage2 {
    .page2Section {
     
      h2 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 14px;
        line-height: 23px;
      }
      .proposalButton {
        height: 40px;
        padding: 13px 20px;
        font-size: 15px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .infoPage2 {
    .page2Section {
      display: block;
      text-align: center;

      div {
        width: 100%;
        margin-left: 0px;
        img {
          width: 100%;
          margin-top: 32px;
        }
      }
      h2 {
        font-size: 18px;
        line-height: 28px;
      }
      p {
        font-size: 12px;
        line-height: 22px;
      }
      .proposalButton {
       
        padding: 10px 15px;
        margin-top: 12px;
      }
    }
  }
}
@media only screen and (max-width: 575px) {
  .infoPage2 {
    padding: 32px 32px;
    .page2Section {
      display: block;
      text-align: center;
      div {
        width: 100%;
        .proposalButton {
          width: 100%;
          margin-bottom: 32px;
        }
      }

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
</style>
