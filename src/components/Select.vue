<template>
  <div class="select">
    <h1>Current positions ready and waiting for your application</h1>
    <div class="selectSection" v-for="item in selects" :key="item.id">
      <div>
        <h2>{{ item.title }}</h2>
      </div>
      <div class="selectIcon">
        <div>
          <div>
            <img
              :src="require(`../assets/img/selectImg/${item.img1}`)"
              alt=""
            />
            <p>2022-12-27 - 2022-01-31</p>
          </div>
          <div>
            <img
              :src="require(`../assets/img/selectImg/${item.img2}`)"
              alt=""
            />
            <p>Yerevan, Armenia</p>
          </div>
        </div>
        <div class="openIcon">
          <img :src="require(`../assets/img/selectImg/${item.img3}`)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selects: [
        {
          id: 1,
          title: "Web Developer",
          img1: "imgDate.svg",
          img2: "Locat.svg",
          img3: "icon.svg"
        },
        {
          id: 2,
          title: "Web Developer",
          img1: "imgDate.svg",
          img2: "Locat.svg",
          img3: "icon.svg"
        },
        {
          id: 3,
          title: "Web Developer",
          img1: "imgDate.svg",
          img2: "Locat.svg",
          img3: "icon.svg"
        },
        {
          id: 4,
          title: "Web Developer",
          img1: "imgDate.svg",
          img2: "Locat.svg",
          img3: "icon.svg"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
@font-face {
  font-family: "Raleway";
  src: url(../assets/img/Raleway/static/Raleway-Regular.ttf);
}
@font-face {
  font-family: "Manrope";
  src: url(../assets/img/Raleway/static/Raleway-Italic.ttf);
}
.select {
  padding: 8% 13%;

  text-align: center;
  h1 {
    margin-bottom: 60px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
  }
  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 48px;
    letter-spacing: 0.07em;
    color: #101820;
  }
  .selectSection {
    display: flex;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
    padding: 20px;
    margin-top: 30px;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
    .selectIcon {
      display: flex;

      div {
        display: flex;
        align-items: center;
        margin-left: 120px;
        p {
          margin-left: 5px;
          font-family: "Raleway";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          font-feature-settings: "pnum" on, "lnum" on;
          color: #101820;
          opacity: 0.4;
        }
      }
    }
  }
}
@media only screen and (max-width: 1359px) {
  .select {
    padding: 6% 8%;
    h1 {
      margin-bottom: 50px;
      font-size: 30px;
      line-height: 35px;
    }
    h2 {
      font-size: 18px;
      line-height: 38px;
    }

    .selectSection {
      padding: 16px;
      .selectIcon {
        div {
          p {
            font-size: 15px;
          }
          img {
            width: 25px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .select {
    h1 {
      margin-bottom: 40px;
      font-size: 22px;
      line-height: 30px;
    }
    h2 {
      font-size: 16px;
      line-height: 26px;
    }
    .selectSection {
      .selectIcon {
        div {
          p {
            font-size: 15px;
          }
          img {
            width: 25px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .select {
    padding: 4% 5%;
    h1 {
      margin-bottom: 28px;
      font-size: 20px;
      line-height: 28px;
    }
    h2 {
      font-size: 14px;
      line-height: 22px;
    }

    .selectSection {
      padding: 12px;
      .selectIcon {
        div {
          margin-left: 60px;
          p {
            font-size: 13px;
          }
          img {
            width: 20px;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .select {
    text-align: start;
    h1 {
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
    h2 {
      font-size: 18px;
      line-height: 48px;
    }

    .selectSection {
      display: block;
      .selectIcon {
        display: flex;
        align-items: center;
        div {
          margin-left: 0px;
          display: block;
          div {
            display: flex;
            p {
              margin-top: 15px;
              font-size: 16px;
              line-height: 19px;
            }
            img {
              margin-top: 15px;
              width: 24px;
              height: 24px;
            }
          }
        }
        .openIcon {
          margin-left: auto;
        }
      }
    }
  }
}

@media only screen and (max-width: 575px) {
}
</style>
