<template>
  <div>
    <Banner :banner="banner" class="banner1" />
    <Banner :banner="banner2" class="banner2" />
    <div class="infoPage1AboutUS">
      <div
        v-for="item in pageSection"
        :key="item.id"
        class="aboutUS"
        :class="{ reverse: item.reverse }"
      >
        <div class="aboutUsInfo">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
        <div class="aboutUsImg">
          <img :src="require(`../assets/img/page1Img/${item.img}`)" alt="" />
        </div>
      </div>
    </div>
    <div class="trophys">
      <div class="tropyTitle">
        <h3>We reckon our trophy case is pretty impressive…</h3>
      </div>
      <div class="tropyImgs">
        <img src="../assets/img/trophyImg/Rectangle 52.png" alt="" />
        <img src="../assets/img/trophyImg/Rectangle 53.png" alt="" />
        <img src="../assets/img/trophyImg/Rectangle 54.png" alt="" />
        <img src="../assets/img/trophyImg/Rectangle 55.png" alt="" />
      </div>
    </div>
    <Brands :brands="brands" class="brandsTitleAbout" />
    <MapPage />
    <Blocks />
    <HuaweiList />
    <Values />
    <div class="mission">
      <div class="items" v-for="item in mission" :key="item.id">
        <img :src="require(`../assets/img/${item.img}`)" />
        <div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <LastPage />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Brands from "../components/Brands.vue";
import MapPage from "../components/MapPage.vue";
import Blocks from "../components/Blocks.vue";
import HuaweiList from "../components/HuaweiList.vue";
import Values from "../components/Values.vue";
import LastPage from "../components/LastPage.vue";
export default {
  name: "Main",
  data() {
    return {
      banner: {
        background: "",
        bannerImg: "aboutUs.png",
        heading:
          "Be part of an agency with an amazing culture that has global reach.",
        content:
          "Want to join a marketing automation agency that can offer you a total overhaul in everything you ever thought ‘great work culture’ meant? What about somewhere that has reach in countries all over the world? King Midas provides this… and a helluva lot more.",
        button: "Join Us"
      },
      banner2: {
        background: "banner2.png",
        bannerImg: "",
        heading:
          "Be part of an agency with an amazing culture that has global reach.",
        content:
          "Want to join a marketing automation agency that can offer you a total overhaul in everything you ever thought ‘great work culture’ meant? What about somewhere that has reach in countries all over the world? King Midas provides this… and a helluva lot more.",
        button: "Join Us"
      },
      pageSection: [
        {
          id: 1,
          title: "When you win, we win",
          text:
            "After getting a firm grip on your business and the goals you’re looking to achieve, well develop and execute a marketing automation strategy that’s backed by data and insights. And you can bet we go above and beyond to ensure absolute success for your campaigns, because when you see the outstanding results we get for you, that helps further cement our name as marketing automation royalty.",
          img: "ImgUs.png",
          reverse: false
        },
        {
          id: 2,
          title: "When you win, we win",
          text:
            "After getting a firm grip on your business and the goals you’re looking to achieve, well develop and execute a marketing automation strategy that’s backed by data and insights. And you can bet we go above and beyond to ensure absolute success for your campaigns, because when you see the outstanding results we get for you, that helps further cement our name as marketing automation royalty.",
          img: "ImgUs.png",
          reverse: true
        },
        {
          id: 3,
          title: "When you win, we win",
          text:
            "After getting a firm grip on your business and the goals you’re looking to achieve, well develop and execute a marketing automation strategy that’s backed by data and insights. And you can bet we go above and beyond to ensure absolute success for your campaigns, because when you see the outstanding results we get for you, that helps further cement our name as marketing automation royalty.",
          img: "ImgUs.png",
          reverse: false
        }
      ],
      brands: {
        title: "Stop, collaborate and listen",
        text:
          "We work with the top globally-recognised brands in the industry who provide us with first-look access to the very latest tech and intel. Which means when you partner with us you’ll get the most innovative approach to marketing automation possible, leaving your competitors stuck in the ice, ice baby.",
        brandsItems: [
          [
            {
              id: 1,
              img: "Vector (6).png"
            },
            {
              id: 2,
              img: "eurolines-1 1.png"
            },
            {
              id: 3,
              img: "mona 1 (1).png"
            },
            {
              id: 4,
              img: "logo (1).png"
            },
            {
              id: 5,
              img: "adidas-9 1 (1).png"
            }
          ],
          [
            {
              id: 6,
              img: "Vector (6).png"
            },
            {
              id: 7,
              img: "mona 1 (1).png"
            },
            {
              id: 8,
              img: "eurolines-1 1.png"
            },
            {
              id: 9,
              img: "logo (1).png"
            },
            {
              id: 10,
              img: "adidas-9 1 (1).png"
            }
          ],
          [
            {
              id: 11,
              img: "Vector (6).png"
            },
            {
              id: 12,
              img: "eurolines-1 1.png"
            },
            {
              id: 13,
              img: "mona 1 (1).png"
            },
            {
              id: 14,
              img: "logo (1).png"
            },
            {
              id: 15,
              img: "adidas-9 1 (1).png"
            }
          ]
        ]
      },
      mission: [
        {
          img: "clarity.png",
          title: "The King’s mission",
          text:
            "To maximise our clients’ ROI through marketing automation that works."
        },
        {
          img: "fluent.png",
          title: "The King’s vision",
          text: "To be the number one automation agency on the planet."
        }
      ]
    };
  },
  components: {
    Banner,
    Brands,
    MapPage,
    Blocks,
    HuaweiList,
    Values,
    LastPage
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
.banner2 {
  display: none !important;
}
.infoPage1AboutUS {
  padding: 6% 9%;
  background: #f5f5f5;
  .aboutUS {
    margin-bottom: 60px;
    display: flex;
    align-items: center;

    .aboutUsInfo {
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
        color: #000000;
      }
    }
    .aboutUsImg {
      margin: 12px;
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
  .reverse {
    display: flex;
    flex-direction: row-reverse;
  }
}
.trophys {
  padding: 6% 10%;
  background-color: #09080e;
  .tropyImgs {
    img {
      width: 23%;
    }
  }

  .tropyTitle {
    h3 {
      text-align: center;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 50px;
      margin-top: 0px;
      margin-bottom: 60px;
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#f6eb61),
        to(#ffb25b)
      );
      background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  .tropyImgs {
    display: flex;
    justify-content: space-around;
  }
}
.brandsTitleAbout {
  .brandsTitle {
    h3 {
      background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
}
.mission {
  padding: 6% 10%;
  display: flex;
  justify-content: space-between;
}

.items {
  display: flex;
  width: 35%;

  div {
    position: absolute;
    margin-top: 95px;
    margin-left: 130px;
    width: 23%;
  }
  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 10px;
    color: #000000;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 20px;
    color: #000000;
  }
}

@media only screen and (max-width: 1359px) {
  .trophys {
    padding: 5% 8%;
    .tropyTitle {
      h3 {
        font-size: 39px;
        line-height: 46px;
        margin-bottom: 53px;
      }
    }
  }
  .brandsTitleAbout {
    padding: 6% 9% !important;
    .brandsTitle {
      .brandsText {
        width: 80% !important;
        margin-bottom: 60px;
      }
    }
  }
  .mission {
    padding: 4% 7%;
    .items {
      div {
        h2 {
          font-size: 29px;
          line-height: 15px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .infoPage1AboutUS {
    padding: 5% 7%;
    .aboutUS {
      margin-bottom: 45px;
      .aboutUsInfo {
        h2 {
          font-size: 38px;
          line-height: 45px;
        }
        p {
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }

  .trophys {
    padding: 4% 7%;
    .tropyTitle {
      h3 {
        font-size: 33px;
        line-height: 41px;
        margin-bottom: 45px;
      }
    }
  }

  .mission {
    .items {
      img {
        width: 100px;
        height: 100px;
      }

      div {
        margin-top: 35px;
        margin-left: 60px;

        h2 {
          font-size: 22px;
          line-height: 20px;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        p {
          margin: 0px;
          font-size: 12px;
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .infoPage1AboutUS {
    padding: 3% 6%;
    .aboutUS {
      margin-bottom: 45px;
      .aboutUsInfo {
        h2 {
          text-align: center;
          font-size: 28px;
          line-height: 30px;
        }
        p {
          font-size: 15px;
          line-height: 25px;
        }
      }
      .aboutUsImg {
        margin: 0px;
        text-align: center;
      }
    }
  }
  .trophys {
    .tropyTitle {
      h3 {
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 38px;
      }
    }
  }
  .brandsTitleAbout {
    padding: 3% 6% !important;
    .brandsTitle {
      h3 {
        font-size: 24px;
        margin-bottom: 17px;
      }
    }
    .brandsText {
      font-size: 13px !important;
      line-height: 23px !important;
      margin-bottom: 40px !important;
    }
  }

  .mission {
    padding-top: 2%;
    .items {
      img {
        width: 80px;
        height: 80px;
      }

      div {
        margin-top: 32px;
        margin-left: 46px;

        h2 {
          font-size: 20px;
          margin-bottom: 3px;
        }
        p {
          font-size: 10px;
          line-height: 13px;
        }
      }
    }
  }
}
@media only screen and (max-width: 757px) {
  .banner1 {
    display: none !important;
  }
  .banner2 {
    display: block !important;
    align-items: center !important;
    padding: 2% 5% !important;
    .bannerText {
      width: 100% !important;
      text-align: center;
      .bannerTitle {
        width: 100% !important;
        text-align: center;
        margin-bottom: 16px;
      }
      .bannerText {
        width: 100% !important;
      }
      .yellow-btn {
        width: 50% !important;
      }
    }
    .bannerBodyImg {
      margin-top: 32px;
      width: 100% !important;
      justify-content: center !important;
    }
  }
  .infoPage1AboutUS {
    padding: 2% 5%;
    .aboutUS {
      margin-bottom: 25px;
      .aboutUsInfo {
        h2 {
          text-align: center;
          font-size: 24px;
          line-height: 30px;
        }
        p {
          font-size: 13px;
          line-height: 23px;
        }
      }
    }
  }
  .trophys {
    padding: 4% 6%;
    .tropyTitle {
      h3 {
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 10px;
      }
    }
    .tropyImgs {
      flex-wrap: wrap;
      img {
        margin-top: 20px;
        width: 45%;
      }
    }
  }
  .mission {
    display: block;
    padding: 6% 5%;
    .items {
      width: 100%;
      display: block;
      div {
        position: static;
        margin: 0px;
        width: 100%;
        h2 {
          font-size: 18px;
          line-height: 36px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }

      margin-bottom: 50px;
    }
  }
}
@media only screen and (max-width: 575px) {
  .banner2 {
    .bannerBodyImg {
      img {
        width: 100% !important;
      }
    }

    .bannerText {
      .yellow-btn {
        width: 100% !important;
        margin-left: 0px;
      }
    }
  }
  .infoPage1AboutUS {
    .aboutUS {
      display: block;

      .aboutUsInfo {
        width: 100%;
        margin: 0px;
        h2 {
          font-size: 24px;
          line-height: 32px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
      .aboutUsImg {
        width: 100%;
      }
    }
  }
  .trophys {
    padding: 3% 5%;
    .tropyTitle {
      h3 {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 10px;
      }
    }
    .tropyImgs {
      flex-direction: column;
      align-items: center;
      img {
        margin-top: 20px;
        width: 100%;
      }
    }
  }
}
</style>
