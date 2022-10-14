<template>
  <div>
    <Page404mini />
    <div class="kingdomList">
      <div class="kingdomText">
        <h2 class="titleKingdom">Our Services</h2>
      </div>
      <div class="infoList">
        <div class="infoList1" v-for="item in infoList" :key="item.id">
          <img
            :src="require(`../assets/img/kingdomImg/${item.img}`)"
            class="icons"
          />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
          <img src="../assets/img/button.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="process">
      <div class="titleText">
        <h1>Proprietary processes</h1>
        <p>
          Don’t let the old ways of doing things get in the way of business
          success today. Our team will provide intuitive, forward-thinking
          marketing automation processes for businesses to thrive in this
          rapidly-changing industry environment.
        </p>
      </div>

      <input type="text" />
      <button>Get a Free Proposal</button>
    </div>
    <LastPage />
  </div>
</template>

<script>
import Page404mini from "./Page404mini.vue";
import LastPage from "../components/LastPage.vue";
export default {
  data() {
    return {
      infoList: [
        {
          id: 1,
          img: "Group (2).png",
          title: "Email",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 2,
          img: "img2.png",
          title: "Marketing Automation  ",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        },
        {
          id: 3,
          img: "candy.png",
          title: "CRM implementation and management",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        }
      ]
    };
  },
  components: {
    Page404mini,
    LastPage
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}
.kingdomList {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7% 10%;
  .kingdomText {
    .titleKingdom {
      display: flex;
      justify-content: center;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      display: flex;
      align-items: center;
      color: #101820;
    }
    p {
      margin: auto;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      font-feature-settings: "pnum" on, "lnum" on;
    }
  }
  .infoList {
    display: flex;
    justify-content: space-around;
    background: #ffffff;
    flex-wrap: wrap;
  }
  .infoList1 {
    margin-top: 50px;
    padding: 20px;
    width: 27%;
    background: #ffffff;
    box-shadow: 0px 0px 30px rgba(2, 2, 2, 0.08);
    border-radius: 12px;

    h3 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      margin: 10px 0px;
      color: #101820;
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #101820;
    }
  }
}
.process {
  display: flex;

  padding: 7% 10%;
  background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
  align-items: center;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 800;
    font-size: 52px;
    line-height: 70px;
    color: #101820;
    margin-bottom: 0px;
    margin-top: 0px;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    color: #101820;
  }
  .titleText {
    width: 50%;
    margin-right: 5%;
  }

  input {
    padding: 16px;
    background: #ffffff;
    border-radius: 6px;
    width: 24%;
    outline: none;
    border: 0px;
  }
  button {
    margin-left: 10px;
    width: 17%;
    padding: 16px 17px;
    background: #101820;
    color: #ffffff;
    box-shadow: 0px 4px 8px rgba(44, 38, 20, 0.1);
    border-radius: 6px;
    outline: none;
    border: none;
  }
}

@media only screen and (max-width: 1659px) {
  .kingdomList {
    padding: 5% 7%;
  }
  .process {
    padding: 5% 8%;
  }
}

@media only screen and (max-width: 1359px) {
  .kingdomList {
    .kingdomText {
      .titleKingdom {
        font-size: 24px;
        line-height: 33px;
        margin: 10px 0px;
      }
    }
    .infoList {
      .infoList1 {
        h3 {
          font-size: 23px;
          line-height: 33px;
          margin: 8px 0px;
        }
        p {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }
  }
  .process {
    padding: 3% 6%;
    .titleText {
      h1 {
        font-size: 44px;
        line-height: 54px;
      }
      p {
        font-size: 19px;
        line-height: 26px;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .kingdomList {
    padding: 3% 5%;
    .kingdomText {
      .titleKingdom {
        font-size: 21px;
        line-height: 31px;
        margin: 0px;
      }
    }
    .infoList {
      .infoList1 {
        padding: 15px;
        margin-top: 25px;
        h3 {
          font-size: 18px;
          line-height: 27px;
          margin: 0px;
        }
        p {
          font-size: 14px;
          line-height: 22px;
        }
        .icons {
          width: 30px;
        }
        img {
          width: 110px;
        }
      }
    }
  }
  .process {
    padding: 3% 2%;
    .titleText {
      margin-right: 3%;

      h1 {
        font-size: 33px;
        line-height: 39px;
      }
      p {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
}
@media only screen and (max-width: 787px) {
  .kingdomList {
    .infoList {
      display: block;
      .infoList1 {
        width: 93%;
      }
    }
  }
  .process {
    display: block;
    padding: 4% 6%;
    text-align: center;
    .titleText {
      width: 100%;
      h1 {
      }
      p {
        margin-top: 16px;
      }
    }
    input {
      margin-top: 16px;
      width: 40%;
    }
    button {
      margin-top: 16px;
      width: 30%;
    }
  }
}
@media only screen and (max-width: 595px) {
  .kingdomList {
    padding: 32px 16px;
    .kingdomText {
      .titleKingdom {
        font-size: 24px;
        line-height: 32px;
      }
    }
    .infoList {
      .infoList1 {
        padding: 15px;
        margin-top: 25px;
        h3 {
          font-size: 18px;
          line-height: 36px;
        }
        p {
          font-size: 16px;
          line-height: 24px;
          margin-top: 16px;
        }
        .icons {
          width: 40px;
          height: 40px;
        }
        img {
          width: 110px;
          height: 20px;
        }
      }
    }
  }

  .process {
    padding: 32px 16px;
    text-align: center;
    .titleText {
      width: 100%;
      h1 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
      }
    }
    input {
      padding: 16px 0px 16px 9px;
      width: 97%;
    }
    button {
      margin-left: 0px;
      width: 100%;
    }
  }
}
</style>
