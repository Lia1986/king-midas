<template>
  <div>
    <div class="registr">
      <div class="contactTitle">
        <h1>Ready to dominate Web3? Get in touch today.</h1>
        <p>
          The internet is evolving. Get ahead of the game with our leading Web3
          strategies. WAGMI!
        </p>
      </div>
      <div class="contactInfo2">
        <div v-for="item in contactInfo" :key="item.id">
          <p>
            <img :src="require(`../assets/img/contact img/${item.img}`)" />
            {{ item.text }}
          </p>
        </div>
      </div>
      <div class="inputBox">
        <input
          type="text"
          name=""
          v-for="item in inputs"
          :key="item.id"
          :placeholder="item.text"
        />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message*"
      ></textarea>
      <div>
        <button @click="addModal">Send Message</button>
      </div>
    </div>
    <div class="location">
      <div class="contactInfo">
        <div v-for="item in contactInfo" :key="item.id">
          <p>
            <img :src="require(`../assets/img/contact img/${item.img}`)" />
            {{ item.text }}
          </p>
        </div>
      </div>
      <div class="ellipse">
        <img src="../assets/img/Ellipse 1.png" alt="" />
      </div>
    </div>
    <div class="worldLocation">
      <h1>Worldwide Locations</h1>
      <div class="countryList">
        <div class="country" v-for="item in countryItem" :key="item.id">
          <img
            :src="require(`../assets/img/contact img/countryes/${item.img}`)"
          />
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <LastPage />
    <Modal
      :class="show ? ' addModalStyle' : 'removeModalStyle'"
      @modal="show = false"
    />
  </div>
</template>

<script>
import LastPage from "../components/LastPage.vue";
import Modal from "../components/Modal.vue";
import Page404mini from "./Page404mini.vue";
export default {
  data() {
    return {
      show: false,

      inputs: [
        {
          id: 1,
          text: "First name *"
        },
        {
          id: 2,
          text: "Phone *"
        },
        {
          id: 3,
          text: "Email *"
        },
        {
          id: 4,
          text: "Country *"
        }
      ],
      contactInfo: [
        {
          id: 1,
          img: "loc.svg",
          text: `Melbourne, AU, Level 6, 534 Church \n Street,Cremorne, VIC 3121`
        },
        {
          id: 2,
          img: "time.svg",
          text: `9am-5:30pm,  Monday to Friday, AEDT`
        },
        {
          id: 3,
          img: "phone.svg",
          text: `1300 818 435`
        },
        {
          id: 4,
          img: "mail.svg",
          text: `info@mooning.com`
        }
      ],
      countryItem: [
        {
          id: 1,
          img: "1.png",
          title: "Singapore",
          text: `120 Robinson Rd, #05-01  Singapore 068913`
        },
        {
          id: 2,
          img: "2.png",
          title: "Hong Kong",
          text: `Room 3503-07, 35/F, Wu Chung House, 213 Queen’s Road East, Wan Chai, Hong Kong`
        },
        {
          id: 3,
          img: "3.png",
          title: "Thailand",
          text: `29 Vanissa Building, Tower B, 14th Floor, Soi Chidlom, Ploenchit Road, Lumpini, Pathumwan,Bangkok, Thailand 10330`
        },
        {
          id: 4,
          img: "4.png",
          title: "Dubai",
          text: `902B, Two Four 54 Building 6,Sheikh Zayed Street,Abu Dhabi,United Arab Emirates`
        },
        {
          id: 5,
          img: "4.png",
          title: "Malaysia",
          text: `A-03-13 Tropicana Avenue,NO 12 Persiaran TropicanaTropicana Golf & Country Resort PJU347410 Petaling Jaya, Selangor,
`
        },
        {
          id: 6,
          img: "5.png",
          title: "Malaysia",
          text: `Calle 12 Este, Casco Viejo,City, Panama`
        },
        {
          id: 7,
          img: "6.png",
          title: "Panama",
          text: `Selina Vila Madalena,São Paulo`
        },
        {
          id: 8,
          img: "7.png",
          title: "Brazil",
          text: `120 Robinson Rd, #05-01  Singapore 068913`
        },
        {
          id: 9,
          img: "8.png",
          title: "Australia",
          text: `Level 6, 534 Church StreetCremorne 3121Victoria, Australia`
        }
      ]
    };
  },
  components: {
    LastPage,
    Modal,
    Page404mini
  },
  methods: {
    addModal() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
.addModalStyle {
  display: block;
}
.removeModalStyle {
  display: none;
}

.registr {
  padding: 80px 0px;
  background-color: #010101;
  text-align: center;
  .contactInfo2 {
    display: none;
    text-align: start;
    border-radius: 12px;
    padding: 30px;
    p {
      margin-bottom: 40px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;

      display: flex;
      align-items: center;
      color: #ffffff;
      img {
        padding: 10px;
      }
    }
  }
  .contactTitle {
    width: 37%;
    margin: auto;
    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 52px;
      line-height: 70px;
      text-align: center;
      background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    p {
      margin-top: 24px;
      margin-bottom: 20px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 30px;
      text-align: center;
      color: #ffffff;
    }
  }

  .inputBox {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    width: 35%;
    justify-content: space-around;
    input {
      width: 43%;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      padding: 16px;
      margin-top: 30px;
      outline: none;
    }
  }
  textarea {
    width: 32%;
    margin-top: 30px;
    padding: 16px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    outline: none;
  }
  button {
    margin-top: 30px;
    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
      0px 0px 1px rgba(0, 0, 0, 0.04);
    color: #eef5f9;
    border-radius: 10px;
    width: 10%;
    height: 54px;
  }
}
.location {
  background-image: url("../assets/img/contact img/map.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  .ellipse {
    margin: auto;
  }
  .contactInfo {
    width: 25%;
    background: #101820;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 30px;
    margin: 180px 0px 156px 13%;
    position: relative;
  }
  p {
    margin-bottom: 40px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: center;
    color: #ffffff;
    img {
      padding: 10px;
    }
  }
}
.worldLocation {
  padding: 8% 10%;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    color: #101820;
    text-align: center;
    margin-bottom: 60px;
  }
  .countryList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      margin-left: 10%;
      margin-top: 20px;
      width: 20%;
    }
    h2 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 26px;
      width: 80%;
    }
  }
}

@media only screen and (max-width: 1659px) {
  .registr {
    padding: 55px 0px;
    .inputBox {
      width: 60%;
    }
    .contactTitle {
      width: 60%;
    }
    textarea {
      width: 56%;
    }
    button {
      width: 20%;
    }
  }
  .location {
    p {
      font-size: 17px;
      line-height: 27px;
    }
  }
  .worldLocation {
    padding: 5% 8%;
  }
}

@media only screen and (max-width: 1359px) {
  .registr {
    .contactTitle {
      h1 {
        font-size: 40px;
        line-height: 50px;
      }
      p {
        font-size: 17px;
        line-height: 27px;
      }
    }
  }
  .location {
    .contactInfo {
      padding: 25px;
      p {
        font-size: 16px;
        line-height: 25px;
        margin-bottom: 20px;
      }
    }
  }
  .worldLocation {
    h1 {
      font-size: 35px;
      line-height: 42px;
      margin-bottom: 49px;
    }
    .countryList {
      h2 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 15px;
        line-height: 23px;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .registr {
    padding: 35px 0px;

    .contactTitle {
      width: 64%;
    }
    .inputBox {
      width: 64%;
    }
    textarea {
      width: 60%;
    }

    .contactTitle {
      h1 {
        font-size: 32px;
        line-height: 40px;
      }
      p {
        font-size: 15px;
        line-height: 25px;
        margin-top: 15px;
        margin-bottom: 0px;
      }
    }
  }
  .location {
    .contactInfo {
      padding: 10px;
      p {
        font-size: 13px;
        line-height: 23px;
        margin-bottom: 15px;
      }
    }
  }
  .worldLocation {
    h1 {
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 25px;
    }
    .countryList {
      div {
        width: 23%;
      }
      img {
        width: 33px;
      }
      h2 {
        margin: 0px;
        font-size: 20px;
        line-height: 29px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
@media only screen and (max-width: 787px) {
  .registr {
    padding: 26px 16px;
    .contactInfo2 {
      display: block;
      padding: 0px;
      margin-top: 32px;
      div {
        p {
          font-size: 19px;
          line-height: 26px;
          margin-bottom: 10px;
        }
      }
    }

    .inputBox {
      display: block;
      width: 100%;
      input {
        width: 93%;
        margin-top: 18px;
      }
    }
    textarea {
      width: 93%;
    }
    button {
      width: 40%;
    }
    .contactTitle {
      width: 100%;

      h1 {
        font-size: 29px;
        line-height: 38px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        margin-top: 15px;
        margin-bottom: 0px;
      }
    }
  }
  .location {
    height: 500px;
    .contactInfo {
      display: none;
    }
  }
  .worldLocation {
    h1 {
      font-size: 23px;
      line-height: 28px;
      margin-bottom: 13px;
    }
    .countryList {
      display: block;

      div {
        width: 100%;
        margin-left: 0px;
        border-bottom: 1px solid #e4e4e4;
        border-radius: 12px;
        padding: 16px;
        margin-top: 0px;
      }
      img {
      }
      h2 {
      }
      p {
      }
    }
  }
}
@media only screen and (max-width: 595px) {
  .registr {
    padding: 32px 16px;
    .contactInfo2 {
      display: block;
      padding: 0px;
      margin-top: 32px;
      div {
        p {
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 20px;
        }
      }
    }

    .inputBox {
      display: block;
      width: 100%;
      input {
        width: 93%;
        margin-top: 16px;
      }
    }

    button {
      width: 100%;
    }
    .contactTitle {
      h1 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        margin-top: 16px;
      }
    }
  }

  .worldLocation {
    h1 {
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 13px;
    }
    .countryList {
      div {
        width: 100%;
        margin-left: 0px;
        border-bottom: 1px solid #e4e4e4;
        border-radius: 12px;
        padding: 16px;
        margin-top: 0px;
      }
      img {
        width: 36px;
        height: 36px;
      }
      h2 {
        font-size: 18px;
        line-height: 36px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
}
</style>
