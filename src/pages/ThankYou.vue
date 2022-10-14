<template>
  <div>
    <div
      class="bannerThankYou"
      :style="
        banner.bannerImg !== ''
          ? {
              backgroundImage: `url(${require('../assets/img/' +
                banner.bannerImg)})`
            }
          : ''
      "
    >
      <div class="bannerThankYouText">
        <h1 class="bannerThankYouTitle">{{ banner.heading }}</h1>
        <p class="h1">We’ll look over your enquiry and get back to you ASAP.</p>
        <p class="bannerThankYouText2">
          In the meantime, take a look at the
          <a href="" class="links">awesome services</a> we offer or check out
          our latest <a href="" class="links">blog posts</a> .
        </p>
      </div>
      <div class="bannerThankYouBodyImg" v-if="banner.background !== ''">
        <img
          :src="`${require('../assets/img/' + banner.background)}`"
          alt="bannerImage"
        />
      </div>
    </div>
    <LastPage />
  </div>
</template>

<script>
import LastPage from "../components/LastPage.vue";
export default {
  name: "Banner",
  data() {
    return {
      banner: {
        background: "people.png",
        bannerImg: "",
        heading: "Cheers for the message!",
        button: "Learn More"
      }
    };
  },
  components: {
    LastPage
  }
};
</script>

<style lang="scss">
.bannerThankYou {
  padding: 7% 10%;
  display: flex;
  background-color: #010101;
  background-repeat: no-repeat;
  background-size: cover;
  .bannerThankYouTitle {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 70px;
    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0px;
  }
  .h1 {
    margin: 0px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    color: #ffffff;
  }

  .bannerThankYouText2 {
    width: 75%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;
    .links {
      color: #ffb25b;
    }
  }
  .bannerThankYouBodyImg {
    display: flex;
    justify-content: end;
    width: 50%;

    img {
      width: 80%;
      object-fit: contain;
    }
  }
}

@media only screen and (max-width: 1600px) {
  .bannerThankYou {
    padding: 5% 7%;
    .bannerThankYouText {
      .bannerThankYouTitle {
        font-size: 55px;
        line-height: 67px;
      }
      .h1 {
        font-size: 19px;
        line-height: 24px;
      }
      .bannerThankYouText2 {
        font-size: 25px;
        line-height: 35px;
      }
    }
  }
}

@media only screen and (max-width: 1359px) {
  .bannerThankYou {
    padding: 4% 6%;
    .bannerThankYouText {
      .bannerThankYouTitle {
        font-size: 49px;
        line-height: 59px;
      }
      .h1 {
        font-size: 17px;
        line-height: 22px;
      }
      .bannerThankYouText2 {
        font-size: 23px;
        line-height: 33px;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .bannerThankYou {
    .bannerThankYouText {
      .bannerThankYouTitle {
        font-size: 38px;
        line-height: 48px;
      }
      .h1 {
        font-size: 16px;
        line-height: 20px;
      }
      .bannerThankYouText2 {
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
}
@media only screen and (max-width: 787px) {
  .bannerThankYou {
    display: block;
    .bannerThankYouText {
      text-align: center;
      .bannerThankYouTitle {
        font-weight: 800;
        margin-top: 32px;
        font-size: 24px;
        line-height: 32px;
      }
      .h1 {
        font-size: 16px;
        line-height: 22px;
      }
      .bannerThankYouText2 {
        width: 100%;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 32px;
      }
    }
    .bannerThankYouBodyImg {
      width: 100%;
      justify-content: center;
    }
  }
}
@media only screen and (max-width: 595px) {
}
</style>
