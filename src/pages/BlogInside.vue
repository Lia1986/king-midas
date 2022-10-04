<template>
  <div>
    <div class="blogInside">

      <p class="back">
        <img src="../assets/img/blogInside/mdi-light_arrow-right.svg" alt="" />
        Back
      </p>
      <div class="BlogInsideDisplay">
        <div class="blogInsideInfo">
          <div class="aboutMarketing">
            <img src="../assets/img/blogInside/Rectangle 35.png" alt="" />
            <div class="infoList">
              <h2>Your guide to creating, buying and selling NFTs</h2>
              <p>
                When a market increases by 21,000% in just one year, people
                notice. A lot of people. And that’s exactly what happened with
                NFTs from 2020 to 2021, according to a study conducted by
                Nonfungible.com – up from $82 million to an absolutely
                mind-boggling $17 billion. Which is precisely why you’re here,
                right? You want to get involved in the NFT game and make your
                own so you can maximise on this market that’s trending ever
                upwards. We don’t blame you! To help you on your way, here’s a
                quick and straightforward rundown on what NFT art is, how to
                make it and how and where you can buy it.
              </p>
              <div v-for="item in info" :key="item.id">
                <h2 class="infoTitle">{{ item.title }}</h2>
                <img
                  :src="require(`../assets/img/blogInside/${item.img}`)"
                  alt=""
                />
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
          <div class="infoMenu">
            <h2>Related articles</h2>
            <div class="infoSection">
              <div v-for="item in infoSectin" :key="item.id">
                <img :src="require(`../assets/img/blogInside/${item.img}`)" />
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LastPage />>
  </div>
</template>

<script>
  import LastPage from '../components/LastPage.vue';
export default {
  
  data() {
    return {
      info: [
        {
          id: 1,
          title: "How to make NFT art",
          img: "photo1.png",
          text: `If you’re wondering how to create an NFT, you might be thinking it’s quite a delicate and arduous process. Thankfully, it can be relatively simple if you know what’s involved – which we’ll explain now step-by-step.
                Step 1: Choose the type of file you want to eventually convert into an NFT – a song, digital painting, video… and create! If you’ve already got something, great!
                Step 2: Choose a marketplace that a) accepts your file type and b) supports minting – the process of converting the file into an NFT.
                Step 3: Find out what blockchain the marketplace uses, get a crypto wallet that is compatible and put some funds in there to cover whatever fees and charges are involved. Connect your wallet to the marketplace.
                Step 4: Follow the prompts on the marketplace that will show you how to make NFT art from your original file. Once the upload and conversion is completed, you’ve now created your very own NFT art and are ready to list and sell. But make sure you’ve got a killer marketing strategy ready to go before listing, otherwise you won’t achieve anywhere near the best sale price!`
        },
        {
          id: 2,
          title: "Where to buy NFTs",
          img: "photo2.png",
          text: `We mentioned ‘marketplaces’ a couple of times in the above step-by-step guide on how to make NFT art. These are basically the eBays of NFTs, where people can go to buy, sell, trade and mint NFTs with others.
            It’s important to recognise, though, that not all are the same. In fact, there are some rather substantial differences between each of them. For example, while some will offer the full spectrum of NFT types including artwork, photography, music and even domain names, others are more specialised.
            Here are some of the more popular marketplaces and specialties to help you on your way to buy NFTs:
            OpenSea, Rarible and Binance are three examples of places to go if you’re wondering where to buy NFTs of all kinds, and are wonderfully easy to navigate through.
            Nifty Gateway can be a great place to check out some of the more rare collection and project drops.
            Foundation and SuperRare are both fantastic for those interested in exclusive art specifically, with strict vetting and approval processes for all digital artists who wish to sell their artwork there.
            Axie Infinity marketplace is where you need to go if you’re interested in playing Axie Infinity, the super-popular blockchain play-to-earn game.
            Nifty Gateway is another exclusive art marketplace which is sometimes referred to as the ‘NFT marketplace of the elites’, selling big-ticket artwork from some of the industry’s biggest names like Beeple and Grimes.`
        },
        {
          id: 3,
          title: "Buying and investing in NFTs",
          img: "photo3.png",
          text: `Now you know where to buy them, we can take you through how to buy NFTs which we’ll also do in step-by-step format to keep it as simple and straightforward as possible.
            Step 1: Jump on one or more of the marketplace and browse through the assets until you’ve found one that catches your attention (and you have the budget for).
            Step 2: Determine what kind of cryptocurrency you’ll need to pay for the NFT. If you don’t yet have one, get a crypto wallet that’s compatible with the marketplace, add the funds needed and connect it to your marketplace account.
            Step 3: There are a couple of different ways that the seller can list the asset, including fixed price and auction. If it’s a fixed price sale you can simply follow the prompts to purchase. For auctions, place your bid and wait and see whether you win. 

            Knowing how to invest in NFTs so you get the highest return on your investment means buying and selling at the right times, as well as being backed by a solid digital campaign when it is time to sell.`
        }
      ],
      infoSectin: [
        {
          id: 1,
          img: "info1.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 2,
          img: "info2.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 3,
          img: "info3.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 4,
          img: "info4.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 5,
          img: "info5.png",
          text: "Top 20 NFT tokens by market cap"
        },

        {
          id: 6,
          img: "info6.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 7,
          img: "info7.png",
          text: "Top 20 NFT tokens by market cap"
        },

        {
          id: 8,
          img: "info8.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 9,
          img: "info9.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 10,
          img: "info10.png",
          text: "Top 20 NFT tokens by market cap"
        },
        {
          id: 11,
          img: "info11.png",
          text: "Top 20 NFT tokens by market cap"
        }
      ]
    };
  },
  components:{
   
    LastPage
}
};
</script>

<style lang="scss">
.blogInside {
  padding: 120px 190px;
  .blogInsideInfo {
    display: flex;
    .infoMenu {
      margin-left: 37px;
      h2 {
        margin: 0px;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;

        display: flex;
        align-items: center;
        background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .infoSection {
        div {
          
          display: flex;
          margin-top: 30px;
          p {
            margin-left: 20px;
            font-family: "Raleway";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 40px;
            display: flex;
            align-items: center;
            color: #101820;
          }
        }
      }
    }
  }
  .aboutMarketing {
    width: 80%;
    img {
      width: 100%;
    }
    h2 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 50px;
      display: flex;
      align-items: center;
      color: #120804;
    }
    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 40px;
      color: #101820;
    }
    .infoList {
      padding-right: 40px;
      border-right: 1px solid #e4e4e4;
    }
  }
  .back {
    margin-left: 10px;
    align-items: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    img {
      width: 24px;
      height: 24px;
    }
  }
  .infoTitle {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    background: linear-gradient(90deg, #f6eb61 0%, #ffb25b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}
</style>
