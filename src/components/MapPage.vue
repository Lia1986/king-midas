<template>
  <div class="mapPage">
    <div class="mapPageTitle">
      <h3>
        A first-class marketing automation agency with global reach focused on -
        and answerable to - our clients
      </h3>
    </div>
    <div class="mapImg">
      <img src="../assets/img/Final Map (1).png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.mapPage {
  padding: 4% 15% 6% 15%;
  background: #09080e;
  .mapPageTitle {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    /* or 119% */

    text-align: center;

    /* gradient */

    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .mapImg {
    width: 100%;
    img {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 1359px) {
  .brands {
    .brandsTitle {
      h3 {
        font-size: 35px;
        margin-bottom: 40px;
      }
    }
  }
}
@media only screen and (max-width: 1359px) {
  .mapPage {
    padding: 3% 6%;
    .mapPageTitle {
      font-size: 32px;
      line-height: 44px;
    }
    .mapImg {
      width: 85%;
      margin: auto;
    }
  }
}
@media only screen and (max-width: 1150px) {
  .mapPage {
    .mapPageTitle {
      font-size: 26px;
      line-height: 36px;
    }
    .mapImg {
      width: 75%;
    }
  }
}

@media only screen and (max-width: 940px) {
  .mapPage {
    .mapPageTitle {
      font-size: 18px;
      line-height: 28px;
    }
  }
}
@media only screen and (max-width: 767px) {
  .mapPage {
    padding: 3% 3%;
    .mapPageTitle {
      font-size: 19px;
      line-height: 29px;
    }
    .mapImg {
      width: 90%;
    }
  }
}
@media only screen and (max-width: 575px) {
  .mapPage {
    .mapPageTitle {
      font-size: 18px;
      line-height: 25px;
    }
    .mapImg {
      width: 100%;
    }
  }
}
</style>
