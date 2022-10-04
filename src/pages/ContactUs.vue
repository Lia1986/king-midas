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
        <button>Send Message</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.registr {
    padding: 80px 0px;
  background-color: #010101;
  text-align: center;
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
      text-fill-color: transparent;
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
  button{
    margin-top: 30px;
    background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
    color: #EEF5F9;
    border-radius: 10px;
    width: 10%;
height: 54px;

  }
}
</style>
