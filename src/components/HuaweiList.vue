<template>
  <div class="huaweiList">
    <div class="huaweiTitle">
      <p>
        The crown doesn’t make the King; their actions do. And at King Midas,
        we’ve been busy proving why we deserve the marketing automation throne.
      </p>
    </div>
    <div class="List">
      <div class="container" v-for="item in huaweiList" :key="item.id">
        <div class="manager-textbox">
          <img
            :src="require(`../assets/img/${item.img}`)"
            class="manager-portrait"
            style="height:100px"
          />
          <div class="manager-text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      huaweiList: [
        {
          id: 1,
          img: "Ellipse 3.png",
          title: "Lorem Ipsum ",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 2,
          img: "Ellipse 3.png",
          title: "Lorem Ipsum ",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 3,
          img: "Ellipse 3.png",
          title: "Lorem Ipsum ",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
.huaweiList {
  padding: 6% 10%;
  background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);

  .List {
    display: flex;
    justify-content: space-between;
    .container {
      width: 32%;
      display: flex;
    }
  }
  .huaweiTitle {
    width: 70%;
    margin: auto;
    margin-bottom: 180px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    text-align: center;
    color: #ffffff;
  }
}
.manager-headline {
  font-size: 24px;
  text-align: center;
}

.manager-textbox {
  padding-top: 105px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
}

.manager-text {
  h2 {
    text-align: center;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 30px;
    color: #000000;
  }
}

#manager .teaser-header-what {
  padding-left: 0px;
}
.manager-portrait {
  position: absolute;
  top: -50px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  border-radius: 50%;
}

@media only screen and (max-width: 1668px) {
  .huaweiList {
    padding: 5% 9%;
    .huaweiTitle {
      margin-bottom: 160px;
      p {
        font-size: 36px;
        line-height: 46px;
      }
    }
    .container {
      .manager-textbox {
        padding-top: 88px;
        .manager-text {
          h2 {
          }
          p {
            font-size: 19px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1359px) {
  .huaweiList {
    padding: 4% 7%;
    .huaweiTitle {
      margin-bottom: 120px;
      p {
        font-size: 30px;
        line-height: 40px;
      }
    }
    .container {
      .manager-textbox {
        padding-top: 60px;
        img {
          height: 90px !important;
          width: 90px;
        }
        .manager-text {
          h2 {
            font-size: 23px;
            margin-top: 0px;
          }
          p {
            font-size: 17px;
            line-height: 26px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1150px) {
  .huaweiList {
    padding: 4% 6%;
    .huaweiTitle {
      margin-bottom: 100px;
      p {
        font-size: 25px;
        line-height: 35px;
        margin-top: 0px;
      }
    }
    .container {
      .manager-textbox {
        padding: 50px 30px 20px 30px;
        img {
          height: 80px !important;
          width: 80px;
        }
        .manager-text {
          h2 {
            font-size: 20px;
            margin-top: 0px;
          }
          p {
            font-size: 13px;
            line-height: 22px;
            margin-bottom: 0px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 792px) {
  .huaweiList {
    padding: 3% 5%;
    .huaweiTitle {
      margin-bottom: 80px;
      p {
        font-size: 20px;
        line-height: 30px;
      }
    }
    .container {
      .manager-textbox {
        padding: 30px 20px 16px 20px;
        img {
          height: 70px !important;
          width: 70px;
        }
        .manager-text {
          h2 {
            font-size: 16px;
            margin-bottom: 10px;
          }
          p {
            font-size: 11px;
            line-height: 19px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 575px) {
  .huaweiList {
    .huaweiTitle {
      font-size: 24px;
      line-height: 32px;
      margin: 0px;
      width: 100%;
    }
    .List {
      display: block;
      .container {
        width: 100%;
        margin-top: 60px;
        .manager-textbox {
          padding: 56px 16px 16px 16px;
          img {
            height: 100px !important;
            width: 100px;
          }
          .manager-text {
            h2 {
              font-size: 18px;
              line-height: 36px;
              margin-bottom: 16px;
            }
            p {
              font-size: 16px;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
