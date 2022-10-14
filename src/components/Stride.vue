<template>
  <div class="strade">
    <div
      class="acquirement"
      v-for="item in acquirementList"
      :key="item.id"
      :class="item.class ? 'google' : ''"
    >
      <div class="salesImg">
        <img :src="require(`../assets/img/strideImg/${item.img}`)" alt="" />
      </div>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stride",
  data() {
    return {
      acquirementList: [
        {
          id: 1,
          img: "sales.png",
          text: "Generated over $3.8+ billionin sales for our clients"
        },
        {
          id: 2,
          img: "google.png",
          class: true,
          text: "500+ Google reviews globally with a 4.9/5 rating"
        },
        {
          id: 3,
          img: "won.png",
          text: "Won 14 digital awards and counting"
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
.strade {
  display: flex;
  padding: 7% 10%;
  justify-content: space-between;
  background: #f5f5f5;
  flex-wrap: wrap;
}
.salesImg {
  width: 20%;
  > img {
    width: 100%;
  }
}
.google {
  .salesImg {
    width: 37%;
  }
}
.acquirement {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 23%;
  height: 152px;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    width: 90%;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #101820;
  }
}

@media only screen and (max-width: 1350px) {
  .acquirement {
    p{
      font-size: 21px;
    }
  }
}
@media only screen and (max-width: 1150px) {
  .strade {
    .acquirement {
      padding: 30px;
      height: 120px;
      p {
        font-size: 18px;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .strade {
    .acquirement {
      padding: 15px;
      height: 100px;
      p {
        font-size: 14px;
      }
    
    }
    .google {
  .salesImg {
    
      width: 50%
    
    ;
  }
}
  }
}
@media only screen and (max-width: 575px) {
  .strade {
    padding: 32px 16px;
    display: block;
    .acquirement {
      width: 93%;
      margin-top: 32px;
      .salesImg {
        width: 16%;
      }
      p {
        font-size: 14px;
      }
    }
    .google {
  .salesImg {
    
      width: 30%
    
    ;
  }
}
  }
}
</style>
