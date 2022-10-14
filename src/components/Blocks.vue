<template>
  <div class="blocks">
    <h1>What it looks like to work with us</h1>
    <div class="bigBlock"></div>
    <div class="miniBlock"></div>
    <div class="miniBlock"></div>
    <div class="bigBlock"></div>
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
.blocks {
  h1 {
    display: none;
    margin: auto;
    margin-bottom: 32px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #101820;
  }
  padding: 6% 10%;
  display: flex;
  flex-wrap: wrap;
  .bigBlock {
    margin: 5px;
    width: 58%;
    background: #d9d9d9;
    border-radius: 6px;
    height: 430px;
  }

  .miniBlock {
    margin: 5px;
    width: 38%;
    height: 430px;
    background: #d9d9d9;
    border-radius: 6px;
  }
}
@media only screen and (max-width: 1359px) {
  .blocks {
    padding: 3% 5%;
  }
}

@media only screen and (max-width: 1150px) {
  .blocks {
    padding: 2% 3%;
    div {
      height: 300px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .blocks {
    display: block;
    align-items: center;
    .miniBlock {
      width: 100%;
      margin: 0px;
      margin-top: 10px;
    }
    .bigBlock {
      width: 100%;
      margin: 0px;
      margin-top: 10px;
    }
  }
}
</style>
