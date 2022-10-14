<template>
  <div>
    <Banner :banner="banner" />
    <Brands :brands="brands" />
    <div class="ourServices">
      <div class="serviceTitle"><p>Our Services</p></div>
      <div class="serviceList">
        <div v-for="item in services" :key="item.id">
          <img
            :src="require(`../assets/img/serviceList/${item.img}`)"
            alt="servicesLogo"
            class="serviceLogo"
          />
          <h3 class="serviceCardTitle">{{ item.title }}</h3>
          <p class="serviceInfo">{{ item.text }}</p>
          <a href="">
            <img
              :src="require(`../assets/img/serviceList/button (1).png`)"
              alt="servicesLogo"
          /></a>
        </div>
      </div>
    </div>
    <Page1 />
    <Stride />
    <Page2 :pageSection="pageSection" />
    <div class="yourAgency">
      <div class="yourAgencyText">
        <h2 class="titleYourAgency">
          We aren’t just your agency - we are your partner in growth.
        </h2>
        <p>
          Don’t let the old ways of doing things get in the way of business
          success today. Our team will provide intuitive, forward-thinking
          marketing automation processes for businesses to thrive in this
          rapidly-changing industry environment.
        </p>
      </div>
      <div class="agencyList">
        <div class="agencyList1" v-for="item in agencyList" :key="item.id">
          <img
            :src="require(`../assets/img/agencyListImg/${item.img}`)"
            alt=""
          />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <MarketingReport />
    <Comparison />
    <Questions />
    <LastPage />
  </div>
</template>

<script>
import Page1 from "../components/Page1.vue";
import Banner from "../components/Banner.vue";
import Questions from "../components/Questions.vue";
import Stride from "../components/Stride.vue";
import Page2 from "../components/Page2.vue";
import MarketingReport from "../components/MarketingReport.vue";
import Comparison from "../components/Comparison.vue";
import LastPage from "../components/LastPage.vue";
import Brands from "../components/Brands.vue";
export default {
  data() {
    return {
      banner: {
        background: "home.png",
        bannerImg: "",
        heading: "Marketing automation SAVES time and drives sales.",
        content:
          "Yes, it really is that simple. If you want to save a huge amount of time and resources while simultaneously skyrocketing your sales figures and growing awareness and recognition of your brand, it’s time to leverage the absolutely incredible power of marketing automation.",
        button: "Learn More"
      },
      brands: {
        title: "Some brands we work with",
        img: "Group (1).png",
        brandsItems: [
          [
            {
              id: 1,
              img: "Vector (6).png"
            },
            {
              id: 2,
              img: "eurolines-1 1.png"
            },
            {
              id: 3,
              img: "mona 1 (1).png"
            },
            {
              id: 4,
              img: "logo (1).png"
            },
            {
              id: 5,
              img: "adidas-9 1 (1).png"
            }
          ],
          [
            {
              id: 6,
              img: "Vector (6).png"
            },
            {
              id: 7,
              img: "mona 1 (1).png"
            },
            {
              id: 8,
              img: "eurolines-1 1.png"
            },
            {
              id: 9,
              img: "logo (1).png"
            },
            {
              id: 10,
              img: "adidas-9 1 (1).png"
            }
          ],
          [
            {
              id: 11,
              img: "Vector (6).png"
            },
            {
              id: 12,
              img: "eurolines-1 1.png"
            },
            {
              id: 13,
              img: "mona 1 (1).png"
            },
            {
              id: 14,
              img: "logo (1).png"
            },
            {
              id: 15,
              img: "adidas-9 1 (1).png"
            }
          ]
        ]
      },
      services: [
        {
          id: 1,
          img: "logo1.png",
          title: "Email",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 2,
          img: "logo2.png",
          title: "Marketing  Strategy & Automation",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 3,
          img: "logo3.png",
          title: "CRM implementation and management",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 4,
          img: "logo4.png",
          title: "Personalisation Strategy",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 5,
          img: "logo5.png",
          title: "Platform Audit",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 6,
          img: "logo6.png",
          title: "Solution Architecture",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 7,
          img: "logo7.png",
          title: "SFMC Marketing Automation Development &Enhancements",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 8,
          img: "logo8.png",
          title: "Customer Journey Design and Development",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 9,
          img: "logo9.png",
          title: "Campaign Management",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 10,
          img: "logo10.png",
          title: "Managed Services/Retainer Services",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 11,
          img: "logo11.png",
          title: "Training",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        },
        {
          id: 12,
          img: "logo1.png",
          title: "Staff Secondment",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a ",
          link: "button (1).png"
        }
      ],
      agencyList: [
        {
          id: 1,
          img: "agency2.png",
          title: "Accountability",
          text:
            "We’re not the kind of people that like to toot our own horns. Well okay, maybe we are… just a little bit. And the businesses we work with all know that when we say we’re going to get it done, we do just that. On the off chance we can’t though, we won’t run and hide. Instead, we’ll do everything possible to remedy the situation."
        },
        {
          id: 2,
          img: "agency3.png",
          title: "Transparency",
          text:
            "It’s never a good day out when you partner up with companies and hear next to nothing from them. We know that, which is why our sales team and marketing team will stay in close contact to let you know exactly where your automated marketing campaigns are at. We’re a marketing automation agency that sees transparency as a major pillar of any business."
        },
        {
          id: 3,
          img: "agency1.png",
          title: "Investment",
          text:
            "There’s only one way to do things when it comes to clients’ budgets, and that’s to show them exactly where every cent has gone. You don’t ever need to worry about where your dollars are going - and why - because it will all be presented to you in black and white. It’s just another way our automation agency offers a premium level of service to our clients."
        }
      ],
      pageSection: [
        {
          id: 1,
          title:
            "We boost our clients’ bottom line by optimising their growth potential",
          text:
            "Feeling like you’re missing out on huge opportunities for building brand awareness, growing website visitors and boosting sales but can’t quite figure out why?Supercharge the amount of prospects you’re bringing in by connecting with the marketing automation platform that gets it. We’ll work with you to get a deep understanding of your brand, and will conduct extensive research into elements like your customer journey, audience segments and database to develop automated marketing activities that are sure to impress. Whatever your goals, from increasing website visitors to specific web pages, creating better customer experiences or getting more leads, we’ve got what it takes to get you there. Using the right content, email marketing, email automation and much more, you’re in great hands at King Midas.",
          img: "Rectangle 1.png",
          white: true
        },
        {
          id: 2,
          title: "We help build relationships",
          text:
            "Feeling like you’re missing out on huge opportunities for building brand awareness, growing website visitors and boosting sales but can’t quite figure out why?Supercharge the amount of prospects you’re bringing in by connecting with the marketing automation platform that gets it. We’ll work with you to get a deep understanding of your brand, and will conduct extensive research into elements like your customer journey, audience segments and database to develop automated marketing activities that are sure to impress. Whatever your goals, from increasing website visitors to specific web pages, creating better customer experiences or getting more leads, we’ve got what it takes to get you there. Using the right content, email marketing, email automation and much more, you’re in great hands at King Midas.",
          img: "Rectangle 1 (1).png",
          reverse: true,
          white: true
        }
      ]
    };
  },
  components: {
    Brands,
    Banner,
    Questions,
    Page1,
    Stride,
    Page2,
    MarketingReport,
    Comparison,
    LastPage
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
@media only screen and (max-width: 1668px) {
  .ourServices {
    padding: 7% 3%;
  }
}
@media only screen and (max-width: 1359px) {
  .yourAgency {
    .yourAgencyText {
      .titleYourAgency {
        font-size: 27px;
        line-height: 38px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
      }
    }
    .agencyList {
      .agencyList1 {
        img {
          width: 35px;
        }
        h3 {
          font-size: 22px;
          line-height: 32px;
        }
        p {
          font-size: 16px;
          line-height: 23px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1150px) {
  .ourServices {
    .serviceTitle {
      p {
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 40px;
      }
    }
    .serviceList {
      div {
        padding: 20px 20px 20px 20px;
        margin: 5px;
        width: 33%;

        > img {
          width: 30px;
          height: 30px;
          margin-bottom: 10px;
        }
        .serviceCardTitle {
          font-size: 16px;
          line-height: 26px;
          margin-bottom: 10px;
        }
        .serviceInfo {
          font-size: 13px;
          line-height: 22px;
          margin-bottom: 10px;
        }
        a {
          img {
            width: 90px;
            height: 20px;
          }
        }
      }
    }
  }
  .yourAgency {
    .yourAgencyText {
      .titleYourAgency {
        font-size: 22px;
        line-height: 30px;
      }
      p {
        font-size: 14px;
        line-height: 25px;
        margin-top: 12px;
      }
    }
    .agencyList {
      margin-top: 35px;
      .agencyList1 {
        img {
          width: 30px;
        }
        h3 {
          font-size: 20px;
          line-height: 27px;
          margin: 6px 0px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
@media only screen and (max-width: 792px) {
  .yourAgency {
    .yourAgencyText {
      .titleYourAgency {
        font-size: 19px;
        line-height: 24px;
      }
      p {
        font-size: 14px;
        line-height: 18px;
        margin-top: 11px;
      }
    }
    .agencyList {
      display: block;
      .agencyList1 {
        margin-top: 10px;
        width: 90%;
        img {
          width: 25px;
        }
        h3 {
          font-size: 18px;
          line-height: 24px;
          margin: 0px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  .ourServices {
    .serviceList {
      div {
        .serviceLogo {
          width: 23px;
          height: 23px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media only screen and (max-width: 575px) {
  .ourServices {
    padding: 32px 16px;
    .serviceList {
      div {
        width: 100%;
      }
    }
  }
  .yourAgency {
    .yourAgencyText {
      text-align: center;
    }
    .agencyList {
      .agencyList1 {
        margin-top: 30px;
        padding: 20px;
        img {
          width: 25px;
        }
        h3 {
          font-size: 18px;
          line-height: 24px;
          margin: 0px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
