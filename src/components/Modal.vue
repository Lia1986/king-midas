<template>
  <div >
    <div class="modal" >
      <img src="../assets/img/modal/x.svg" alt="" class="x" @click="$emit('modal')"  />
      <h1>Cheers for the message!</h1>
      <p class="asap">We’ll look over your enquiry and get back to you ASAP.</p>
      <img src="../assets/img/modal/people.png" alt="" />
      <p class="blogPosts">
        In the meantime, take a look at the awesome services we offer or check
        out our latest blog posts.
      </p>
      <p class="team">Much love, <br />👑 The King Midas team.</p>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
     removeMod:true
    };
  },
  methods:{
    removeModal(){
      this.removeMod = !this.removeMod
     
    }
   
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


.modal {

  padding:2.5%;
  position: absolute;
  width: 28%;

  left: 33.3%;
  top: 32%;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  text-align: center;
  
 
  .x {
    float: right;
  }
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    margin-top: 30px;
    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .asap {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 30px;

    align-items: center;
    color: #101820;
    margin-top: 16px;
    margin-bottom: 30px;
  }
  .blogPosts {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 30px;
    color: #101820;
    margin: 30px auto;
    width: 88%;
  }
  .team {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    display: flex;
    float: right;
    text-align: right;
    color: #101820;
  }
  
}
</style>
