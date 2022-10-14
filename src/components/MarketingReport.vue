<template>
  <div class="marketingReport">
    <div class="marketingReport1">
      <h1>Get the 2022 Salesforce 7th State of Marketing Report</h1>
      <p>
        Don’t let the old ways of doing things get in the way of business
        success today. Our team will provide intuitive, forward-thinking
        marketing automation processes for businesses to thrive in this
        rapidly-changing industry environment.
      </p>
      <button>Download Now</button>
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
.marketingReport {
  background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
  padding: 7% 10%;
  .marketingReport1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;

    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 800;
      font-size: 52px;
      line-height: 70px;
      width: 65%;
      text-align: center;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #101820;
    }
    p {
      margin: 16px 0px;
      width: 56%;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 21px;
      line-height: 30px;
      text-align: center;
      color: #101820;
    }
    button {
      width: 218px;
      height: 62px;
      background: #101820;
      box-shadow: 0px 4px 8px rgba(44, 38, 20, 0.1);
      border-radius: 6px;
      border: 0px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 30px;
      color: #ffffff;
    }
  }
}

@media only screen and (max-width: 1359px) {
  .marketingReport {
    .marketingReport1 {
      h1 {
        font-size: 40px;
        line-height: 50px;
      }
      p {
        font-size: 18px;
        line-height: 28px;
      }
      button {
        width: 207px;
        height: 46px;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .marketingReport {
    .marketingReport1 {
      h1 {

    width: 75%;

        font-size: 33px;
        line-height: 40px;
      }
      p {
        font-size: 15px;
        line-height: 24px;
        width: 75%;
      }
      button {
        width: 187px;
        height: 39px;
        font-size: 16px;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .marketingReport {
    .marketingReport1 {
      h1 {
        font-size: 22px;
        line-height: 30px;
      }
      p {
        font-size: 14px;
        line-height: 18px;
      }
      button {
        width: 155px;
        height: 31px;
        font-size: 13px;
      }
    }
  }
}
@media only screen and (max-width: 575px) {
  .marketingReport {
    padding: 32px 16px;
    .marketingReport1 {
      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        width: 100%;
      }
      p {
        width: 100%;
        font-size: 16px;
        line-height: 24px;
      }
      button {
        width: 100%;
      }
    }
  }
}
</style>
