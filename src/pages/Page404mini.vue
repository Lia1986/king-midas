<template>
  <div
    class="bannerError"
    :style="
      banner.bannerImg !== ''
        ? {
            backgroundImage: `url(${require('../assets/img/' +
              banner.bannerImg)})`
          }
        : ''
    "
  >
    <div class="bannerErrorText">
      <h1 class="bannerErrorTitle">
        Aw, man. <br />The page you’re after has disappeared.
      </h1>
      <p class="bannerErrorText">{{ banner.content }}</p>
      <button class="yellow-btn">{{ banner.button }}</button>
    </div>
    <div class="bannerErrorBodyImg" v-if="banner.background !== ''">
      <img
        :src="`${require('../assets/img/' + banner.background)}`"
        alt="bannerImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: {
        background: "error.png",
        bannerImg: "",
        heading: "Aw, man.The page you’re after has disappeared.",
        content: "No worries, head back to the King Midas homepage",
        button: "Back to Homepage"
      }
    };
  },
  components: {}
};
</script>

<style lang="scss">
.bannerError {
  padding: 7% 10%;
  display: flex;
  background-color: #010101;
  background-repeat: no-repeat;
  background-size: cover;
  .bannerErrorTitle {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 52px;
    line-height: 70px;
    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0px;
  }
  .bannerErrorText {
    width: 50%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #ffffff;
    p {
      width: 100%;
    }
  }
  .bannerErrorBodyImg {
    display: flex;
    justify-content: end;
    width: 50%;

    img {
      width: 80%;
      object-fit: contain;
    }
  }
  button {
    color: white;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 1659px) {
  .bannerError {
    padding: 6% 9%;
    .bannerErrorTitle {
      font-size: 43px;
      line-height: 55px;
    }
    .bannerErrorText {
      font-size: 23px;
      line-height: 32px;
    }
  }
}

@media only screen and (max-width: 1150px) {
  .bannerError {
    padding: 6% 9%;
    .bannerErrorTitle {
      font-size: 34px;
      line-height: 43px;
    }
    .bannerErrorText {
      font-size: 21px;
      line-height: 30px;
    }
    button {
      padding: 12px 24px;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .bannerError {
    padding: 4% 7%;
    .bannerErrorTitle {
      font-size: 30px;
      line-height: 40px;
    }
    .bannerErrorText {
      font-size: 19px;
      line-height: 29px;
    }
  }
}
@media only screen and (max-width: 787px) {
  .bannerError {
    padding: 2% 4%;
    display: block;
    text-align: center;
    .bannerErrorTitle {
      font-size: 34px;
      line-height: 43px;
    }
    .bannerErrorText {
      width: 100%;
    }
    button {
      width: 50%;
    }
    .bannerErrorBodyImg {
      width: 100%;

      margin-top: 32px;
      img {
        width: 100%;
      }
    }
  }
}
@media only screen and (max-width: 595px) {
  .bannerError {
    padding: 0px;
    .bannerErrorTitle {
      padding-top: 32px;
      font-size: 24px;
      line-height: 32px;
    }
    .bannerErrorText {
      p {
        margin-top: 16px;
        font-size: 16px;
        line-height: 22px;
      }
    }
    button {
      width: 94%;
    }
    .bannerErrorBodyImg {
      width: 100%;
    }
  }
}
</style>
