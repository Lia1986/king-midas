<template>
  <div
    class="banner"
    :style="
      banner.bannerImg !== ''
        ? {
            backgroundImage: `url(${require('../assets/img/' +
              banner.bannerImg)})`
          }
        : ''
    "
  >
    <div class="bannerText">
      <h1 class="bannerTitle">{{ banner.heading }}</h1>
      <p class="bannerText">{{ banner.content }}</p>
      <button class="yellow-btn">{{ banner.button }}</button>
    </div>
    <div class="bannerBodyImg" v-if="banner.background !== ''">
      <img
        :src="`${require('../assets/img/' + banner.background)}`"
        alt="bannerImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["banner"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
@font-face {
  font-family: "Raleway";
  src: url(../assets/img/Raleway/static/Raleway-Regular.ttf);
}
@font-face {
  font-family: "Manrope";
  src: url(../assets/img/Raleway/static/Raleway-Italic.ttf);
}

.banner {
  padding: 7% 10%;
  display: flex;
  background-color: #010101;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  .bannerTitle {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 54px;
    line-height: 64px;
    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 32px;
  }
  .bannerText {
    width: 50%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 30px;
    color: #ffffff;
    p {
      width: 100%;
    }
    .yellow-btn {
      margin-top: 20px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      align-items: center;
      text-align: center !important;
      width: 261px;

      color: #ffffff;
    }
  }
  .bannerBodyImg {
    display: flex;
    justify-content: end;
    width: 50%;

    img {
      width: 80%;
      object-fit: contain;
    }
  }
}
@media only screen and (max-width: 1359px) {
  .banner {
    .bannerText {
      .bannerTitle {
        font-size: 47px;
        line-height: 57px;
      }
      .bannerText {
        font-size: 18px;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .banner {
    .bannerText {
      .bannerTitle {
        font-size: 30px;
        line-height: 38px;
      }
      .bannerText {
        font-size: 14px;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .banner {
    .bannerText {
      .bannerTitle {
        font-size: 21px;
        line-height: 31px;
      }
      .bannerText {
        font-size: 15px;
        line-height: 23px;
      }
    }
  }
}
@media only screen and (max-width: 575px) {
  .banner {
    padding: 32px 16px;
    display: block;
    .bannerText {
      width: 100%;
      .bannerTitle {
        text-align: center;
        font-size: 24px;
        line-height: 32px;
      }
      .bannerText {
        font-size: 16px;
        line-height: 22px;
        text-align: center;
      }
      .yellow-btn {
        width: 100%;
      }
    }
    .bannerBodyImg {
      margin-top: 32px;
      width: 100%;
      justify-content: center;
    }
  }
}
</style>
