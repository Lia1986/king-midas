<template>
  <div class="brands">
    <div v-if="brands.title" class="brandsTitle">
      <h3>{{ brands.title }}</h3>
      <img
        v-if="brands.img"
        :src="require(`../assets/img/${brands.img}`)"
        alt="icon"
      />
      <p v-else class="brandsText">{{ brands.text }}</p>
    </div>
    <div
      class="list"
      :class="{ noBorderBottom: brands.brandsItems.length - 1 === index }"
      v-for="(item, index) in brands.brandsItems"
      :key="index"
    >
      <div class="row">
        <div
          :class="{ noBorder: item.length - 1 === i }"
          v-for="(colum, i) in item"
          :key="colum.id"
        >
          <img
            :src="require(`../assets/img/${colum.img}`)"
            alt="brands l ogo"
          />
        </div>
      </div>
    </div>
    <div
      class="list2"
      :class="{ noBorderBottom: links2.brandsItems.length - 1 === index }"
      v-for="(item, index) in links2.brandsItems"
      :key="index + 23"
    >
      <div class="row2">
        <div
          :class="{ noBorder: item.length - 1 === i }"
          v-for="(colum, i) in item"
          :key="colum.id"
        >
          <img
            :src="require(`../assets/img/${colum.img}`)"
            alt="brands l ogo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brands",
  props: ["brands"],

  data() {
    return {
      links2: {
        title: "Some brands we work with",
        img: "Group (1).png",
        brandsItems: [
          [
            {
              id: 24,
              img: "eurolines-1 1.png"
            },
            {
              id: 34,
              img: "mona 1 (1).png"
            }
          ],
          [
            {
              id: 64,
              img: "adidas-9 1 (1).png"
            },
            {
              id: 74,
              img: "mona 1 (1).png"
            }
          ],
          [
            {
              id: 114,
              img: "Vector (6).png"
            },
            {
              id: 194,
              img: "eurolines-1 1.png"
            }
          ],
          [
            {
              id: 114,
              img: "Vector (6).png"
            },
            {
              id: 124,
              img: "adidas-9 1 (1).png"
            }
          ],
          [
            {
              id: 174,
              img: "mona 1 (1).png"
            },
            {
              id: 924,
              img: "eurolines-1 1.png"
            }
          ]
        ]
      }
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
.brands {
  padding: 7% 10%;
  justify-content: center;
  padding-bottom: 120px;
  background-color: #f5f5f5;
  .brandsTitle {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list2 {
    display: none;
  }

  .brandsTitle img {
    width: 30px;
    height: 30px;
  }
  h4 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    margin-bottom: 20px;
  }
  .brandsText {
    text-align: center;
    width: 66%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 30px;
    width: 66%;
    margin: auto;
  }

  .list {
    border-bottom: 1px solid rgba(21, 22, 24, 0.2);
    div {
      div {
        border-right: 1px solid rgba(21, 22, 24, 0.2);
        width: 20%;
        height: 170px;
        display: flex;
        justify-content: center;
        img {
          width: 65%;
          height: 55%;
          margin-top: auto;
          margin-bottom: auto;
          align-items: center;
          object-fit: contain;
        }
      }
    }
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list2 {
    border-bottom: 1px solid rgba(21, 22, 24, 0.2);
    div {
      div {
        border-right: 1px solid rgba(21, 22, 24, 0.2);
        width: 20%;
        height: 170px;
        display: flex;
        justify-content: center;
        img {
          width: 65%;
          height: 55%;
          margin-top: auto;
          margin-bottom: auto;
          align-items: center;
          object-fit: contain;
        }
      }
    }
  }
  .row2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .noBorder {
    border-right: none !important;
  }
  .noBorderBottom {
    border-bottom: none !important;
  }
}
@media only screen and (max-width: 1359px) {
  .brands {
    .brandsTitle {
      .brandsText {
        font-size: 19px;
        line-height: 27px;
        width: 80%;
      }
      h3 {
        font-size: 35px;
        margin-bottom: 40px;
      }
    }
  }
}
@media only screen and (max-width: 1150px) {
  .brands {
    .brandsTitleAbout {
      padding: 4% 8%;
      .brandsTitle {
        .brandsText {
          font-size: 16px;
          line-height: 24px;
          width: 90%;
        }
        h3 {
          font-size: 26px;
          margin-bottom: 19px;
        }
      }
      .brandsText {
        font-size: 15px;
        line-height: 27px;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .brands {
    padding: 5% 8%;
    .brandsTitle {
      .brandsText {
        font-size: 16px;
        line-height: 24px;
        width: 100%;
      }
      h3 {
        font-size: 26px;
        margin-bottom: 15px;
      }
    }
    .list {
      div {
        div {
          height: 130px;
          img {
            width: 75%;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 575px) {
  .brands {
    padding-bottom: 32px;
    .brandsTitle {
      .brandsText {
        font-size: 16px;
        line-height: 24px;
      }
      h3 {
        font-size: 24px;
      }
    }
    .list {
      display: none;
    }
    .list2 {
      display: block;
      div {
        div {
          width: 50%;
        }
      }
    }
  }
}
</style>
