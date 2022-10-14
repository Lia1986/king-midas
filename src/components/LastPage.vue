<template>
  <div class="lastPage">
    <img src="../assets/img/king-midas-logo-rgb 1.png" alt="" />
    <div class="navigationList">
      <div class="Services">
        <h3>Services</h3>
        <router-link to="/emailauto"><p>Email</p> </router-link>
        <router-link to="/marketing"><p>Marketing Automation</p> </router-link>
        <router-link to="/crm"><p>CRM Agency</p> </router-link>
        <p>Other Services</p>
      </div>
      <div class="Home">
        <h3>Home</h3>
        <router-link to="/about"> <p>About Us</p> </router-link>
        <router-link to="/careers"><p>Careers</p></router-link>
        <router-link to="/blog"><p>Blog</p></router-link>
      </div>
      <div class="Help">
        <h3>Help</h3>
        <p>Terms of Use</p>
        <p>Provicy Policy</p>
      </div>
      <div class="Contacts">
        <router-link to="/contactus"> <h3>Contacts</h3> </router-link>
        <p>
          <img src="../assets/img/contact img/ci_location.png" alt="" />
          Melbourne, AU, Level 6, 534 Church Street, Cremorne, VIC 3121
        </p>
        <p>
          <img src="../assets/img/contact img/Vector (5).png" alt="" /> 1300 818
          435
        </p>
        <p>
          <img
            src="../assets/img/contact img/fluent_mail-16-filled.png"
            alt=""
          />
          info@mooning.com
        </p>
      </div>
      <div class="reg">
        <h3>
          We can help you improve your current martech platform. Ask us how
        </h3>
        <div><input type="text" placeholder="First Name*" /></div>
        <div><input type="text" placeholder="Email*" /></div>
        <div><input type="text" placeholder="Phone*" /></div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message*"
          ></textarea>
        </div>
        <button class="learnMore">Increase my leads</button>
      </div>
    </div>
    <div class="logos">
      <img
        src="../assets/img/navImg/ant-design_twitter-circle-filled (1).png"
        alt=""
      />
      <img
        src="../assets/img/navImg/ant-design_twitter-circle-filled.png"
        alt=""
      />
      <img
        src="../assets/img/navImg/entypo-social_linkedin-with-circle.png"
        alt=""
      />
    </div>
    <div class="copyRight">
      <p>Copyright © 2022. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {};
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

.lastPage {
  padding: 4% 10% 1% 10%;
  background-color: #010101;
  a{
    text-decoration: none;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    color: #ffffff;
  }
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin: 10px 0px;
  }
  img {
    margin-bottom: 60px;
    height: 50px;
  }
  .navigationList {
    padding-top: 60px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .Services {
      text-align: start;
    }
    .Contacts {
      width: 260px;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        margin-bottom: 0px;
      }
    }
    .reg {
      width: 303px;
      input {
        outline: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 12px;
        margin: 10px 0px;
        width: 310px;
        height: 45px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
      }
      textarea {
        outline: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        margin: 10px 0px;
        width: 300px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        font-family: "Raleway";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        height: 100px;
      }
      button {
        width: 324px;
        height: 56px;
      }
      .learnMore {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 30px;
        color: #ffffff;
        background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
        box-shadow: 0px 4px 8px rgba(44, 38, 20, 0.1);
        border-radius: 6px;
        border: 0px;
      }
    }
  }
  .logos {
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .copyRight {
    display: flex;
    padding: 20px 0px;
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      margin: auto;
      color: #ffffff;
    }
  }
}

@media only screen and (max-width: 1359px) {
  .lastPage {
    img {
      height: 40px;
      margin-bottom: 40px;
    }

    .navigationList {
      h3 {
        font-size: 17px;
      }
      p {
        font-size: 13px;
      }
      .reg {
        input {
          width: 279px;
          height: 36px;
        }
        textarea {
          width: 269px;
          height: 100px;
        }
        .learnMore {
          width: 296px;
          height: 44px;
          font-size: 16px;
        }
      }
      .Contacts {
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .copyRight {
      p {
        font-size: 15px;
      }
    }
  }
}
@media only screen and (max-width: 1046px) {
  .lastPage {
    .navigationList {
      .reg {
        margin: auto;
        margin-bottom: 15px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
      }
    }
    .logos {
      text-align: center;
      padding-bottom: 0px;
    }
  }
}
@media only screen and (max-width: 575px) {
  .lastPage {
    padding: 16px;
    img {
      height: 28px;
      margin-bottom: 20px;
    }
    .navigationList {
      display: block;
      padding-top: 16px;
      .Contacts {
        width: 100%;
      }
      .reg {
        margin: 0px;
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 16px;
        text-align: start;
        input {
          width: 95%;
        }
        textarea {
          width: 95%;
          padding: 7px;
        }
        .learnMore {
          width: 98%;
        }
      }
    }
    .Home {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 16px;
    }
    .Help {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 16px;
    }
    .Contacts {
      width: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 16px;
    }

    .logos {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 16px;
      margin-top: 16px;
      text-align: start;
      img {
        width: 45px;
        height: 45px;
        margin-right: 24px;
      }
    }
  }
}
</style>
