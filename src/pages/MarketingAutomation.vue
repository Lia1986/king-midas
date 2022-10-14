<template>
  <div>
    <Banner :banner="banner" />
    <Featured />
    <Page2 :pageSection="pageSection" />
    <Ipsum />
    <Page2 :pageSection="pageSection1" />
    <Stride />
    <HuaweiList />
    <Page2 :pageSection="pageSection2" />
    <Brands :brands="brands" />
    <MarketingReport />
    <Questions />
    <LastPage />
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Featured from "../components/Featured.vue";
import Page2 from "../components/Page2.vue";
import Ipsum from "../components/Ipsum.vue";
import Stride from "../components/Stride.vue";
import HuaweiList from "../components/HuaweiList.vue";
import Brands from "../components/Brands.vue";
import MarketingReport from "../components/MarketingReport.vue";
import Questions from "../components/Questions.vue";
import LastPage from "../components/LastPage.vue";
export default {
  data() {
    return {
      banner: {
        background: "image 3 (3).png",
        bannerImg: "",
        heading:
          "An email automation agency that will supercharge your sales results",
        content:
          "Want to grow your brand awareness? Focus on customer retention? Drive customers through the sales funnel more efficiently? Whatever your business goals are, an automated emails strategy from King Midas will meet and surpass every one of your expectations.",
        button: "Get a Free Proposal"
      },
      pageSection: [
        {
          id: 1,
          title:
            "Why all Australian businesses can benefit from email marketing",
          text:
            "Indeed, email marketing remains the most effective channel within the digital landscape to reach your target audience. Because the fact remains that people check their emails a number of times a day - about 15, actually. As a result, it provides the perfect opportunity for brands to drive consumers through the sales funnel and produce more sales.Whether you’re a local small business keen to increase foot traffic in your bricks-and-mortar shop, an ecommerce business owner that wants a higher click through rate and more website visitors or a digital marketing manager at a globally-recognised brand interested in improving your customer experience, the right email marketing services will get you there.",
          img: "Marketingimg3.png"
        },
        {
          id: 2,
          title: "The King of all Australian email marketing companies",
          text:
            "There are so many different elements that can be utilised in the digital marketing strategy of Australian businesses these days that email marketing is often something that’s overlooked. Often, this is simply due to the time it takes to work on the email marketing platform and build out an effective campaign. Thankfully, there’s an email marketing agency with a track record of delivering outstanding results for their clients time and time again. One that understands precisely how to develop an email marketing strategy that produces the highest ROI possible. And that’s the team here at King Midas.",
          img: "automationImg2.png",
          reverse: true
        },
        {
          id: 3,
          title:
            "Delivering a full suite of email marketing services under one roof",
          text:
            "When you want to renovate or build a home, it can be a huge pain to have to speak with umpteen different businesses to get the job done. Recognising that our clients don’t want the hassles and headaches of dealing with a long list of agencies for their email marketing services, at King Midas we’ve made sure to offer everything your email campaigns could ever need in one convenient place. From creative design and copywriting to email marketing strategy development, campaign monitor, automation and optimisation plus much more, we’ll take care of everything to transform your target audience into loyal customers and drive exponentially more sales.",
          img: "automationImg3.png"
        }
      ],
      pageSection1: [
        {
          id: 1,
          title:
            "Properly nurture leads in your email list for the best chance of conversion",
          text:
            "Reaching out to prospective customers before they’re actually ready for that step is like the line snapping when you’re reeling in a fish. The bottom line is that even if someone downloads your ebook or even asks you a question on the contact page on your website, that doesn’t automatically mean they’re ready to convert. By properly nurturing leads in your email database and helping them work through the sales funnel using automation for your email marketing, you’ll see much better conversion rates than ever before. But if you want to really see some breathtaking results that’ll blow your competitors out of the water, you want an email marketing automation agency with a track record of excellence. And of all the email automation companies out there, there are none that come close to the successes we’ve seen here at King Midas.",
          img: "automationImg2.png",
          reverse: true
        }
      ],
      pageSection2: [
        {
          id: 1,
          title:
            "Properly nurture leads in your email list for the best chance of conversion",
          text:
            "Reaching out to prospective customers before they’re actually ready for that step is like the line snapping when you’re reeling in a fish. The bottom line is that even if someone downloads your ebook or even asks you a question on the contact page on your website, that doesn’t automatically mean they’re ready to convert. By properly nurturing leads in your email database and helping them work through the sales funnel using automation for your email marketing, you’ll see much better conversion rates than ever before. But if you want to really see some breathtaking results that’ll blow your competitors out of the water, you want an email marketing automation agency with a track record of excellence. And of all the email automation companies out there, there are none that come close to the successes we’ve seen here at King Midas.",
          img: "automationImg2.png",
          reverse: true,
          background: true
        }
      ],
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
      }
    };
  },
  components: {
    Banner,
    Brands,
    Featured,
    Page2,
    Ipsum,
    Page2,
    Stride,
    HuaweiList,
    MarketingReport,
    Questions,
    LastPage
  }
};
</script>

<style></style>
