<template>

<div>
   <Banner :banner='banner' />
   <Featured />
   <Page2 :pageSection='pageSection'/>
   <Ipsum/>
   <Page2 :pageSection='pageSection1'/>
   <Stride />
   <HuaweiList />
   <Page2 :pageSection = 'pageSection2' />
   <Brands :brands = 'brands'/>
   <MarketingReport />
   <Questions />
   <LastPage />
</div>
</template>

<script>
    import Banner from '../components/Banner.vue'
    import Featured from '../components/Featured.vue';
    import Page2 from '../components/Page2.vue'
    import Ipsum from '../components/Ipsum.vue';
    import Stride from '../components/Stride.vue';
    import HuaweiList from '../components/HuaweiList.vue';
    import Brands from '../components/Brands.vue';
    import MarketingReport from '../components/MarketingReport.vue';
    import Questions from '../components/Questions.vue';
    import LastPage from '../components/LastPage.vue';
    export default{
  data () {
    return {
      banner: {
        background: 'image 3.png',
        bannerImg: '',
        heading: 'An email automation agency that will supercharge your sales results',
        content: 'Want to grow your brand awareness? Focus on customer retention? Drive customers through the sales funnel more efficiently? Whatever your business goals are, an automated emails strategy from King Midas will meet and surpass every one of your expectations.',
        button: 'Get a Free Proposal'
      },
      pageSection:[
        {
            id:1,
            title:'Save time and resources while boosting conversions at the same time',
            text:'What if we told you there was a way that you could not just drastically reduce the amount of time and energy you spent to nurture leads and guide people through their customer journey, while simultaneously increasing your sales and leads? You’d probably think we’d had a bit too much funny fungus in our tea.But the reality is that this is 100% a reality with automated email marketing. When you partner with King Midas for your email automation marketing strategy, your communications with potential customers and existing customers alike will become fully automated, freeing up your time to focus on other aspects of your business.We will uncover every aspect of your existing email marketing strategy that can be automated and implement the appropriate automation software to minimise resources necessary and maximise conversions. And if you’re yet to have developed an automated email marketing strategy, we’ve got the expertise and in-depth knowledge to create one unique to your business.',
            img:'automationImg1.png',
        },
        {
            id:2,
            title:'Properly nurture leads in your email list for the best chance of conversion',
            text:'Reaching out to prospective customers before they’re actually ready for that step is like the line snapping when you’re reeling in a fish. The bottom line is that even if someone downloads your ebook or even asks you a question on the contact page on your website, that doesn’t automatically mean they’re ready to convert. By properly nurturing leads in your email database and helping them work through the sales funnel using automation for your email marketing, you’ll see much better conversion rates than ever before. But if you want to really see some breathtaking results that’ll blow your competitors out of the water, you want an email marketing automation agency with a track record of excellence. And of all the email automation companies out there, there are none that come close to the successes we’ve seen here at King Midas.',
            img:'automationImg2.png',
            reverse:true
        },
        {
            id:3,
            title:'Automated email marketing services that work',
            text:'Whatever email marketing automation services your brand needs, you can rest assured we offer it at King Midas. Not only that, but with our extensive amount of knowledge and experience in email marketing, you can bet whichever business goals you set out to achieve with our services will be not only met but surpassed. We can set up automated email triggers for shopping cart abandonment, sales and sign -up confirmation emails, a welcome email for new customers and emails to re engage existing customers. And each of them can drive traffic to your website, send them to your social media, or click directly through to their abandoned cart so they can finish the transaction. And that’s just the tip of the iceberg. So what are you waiting for? Have a chat with King Midas today and experience exponential sales growth tomorrow!',
            img:'automationImg3.png',
        },
        
     ],
     pageSection1:[
     {
            id:1,
            title:'Properly nurture leads in your email list for the best chance of conversion',
            text:'Reaching out to prospective customers before they’re actually ready for that step is like the line snapping when you’re reeling in a fish. The bottom line is that even if someone downloads your ebook or even asks you a question on the contact page on your website, that doesn’t automatically mean they’re ready to convert. By properly nurturing leads in your email database and helping them work through the sales funnel using automation for your email marketing, you’ll see much better conversion rates than ever before. But if you want to really see some breathtaking results that’ll blow your competitors out of the water, you want an email marketing automation agency with a track record of excellence. And of all the email automation companies out there, there are none that come close to the successes we’ve seen here at King Midas.',
            img:'automationImg2.png',
            reverse:true
        },
      
     ],
     pageSection2:[
     {
            id:1,
            title:'Properly nurture leads in your email list for the best chance of conversion',
            text:'Reaching out to prospective customers before they’re actually ready for that step is like the line snapping when you’re reeling in a fish. The bottom line is that even if someone downloads your ebook or even asks you a question on the contact page on your website, that doesn’t automatically mean they’re ready to convert. By properly nurturing leads in your email database and helping them work through the sales funnel using automation for your email marketing, you’ll see much better conversion rates than ever before. But if you want to really see some breathtaking results that’ll blow your competitors out of the water, you want an email marketing automation agency with a track record of excellence. And of all the email automation companies out there, there are none that come close to the successes we’ve seen here at King Midas.',
            img:'automationImg2.png',
            reverse:true,
            background : true
        },
      
     ],
     brands: {
        title: 'Some brands we work with' ,
        img:'Group (1).png',
        brandsItems:[
        [
        {
          id: 1,
          img: 'Vector (6).png'
        },
        {
          id: 2,
          img: 'eurolines-1 1.png'
        },
        {
          id: 3,
          img: 'mona 1 (1).png'
        },
        {
          id: 4,
          img: 'logo (1).png'
        },
        {
          id:5,
          img: 'adidas-9 1 (1).png'
        }

      ],
      [
        {
          id:6,
          img:'Vector (6).png'
        },
        {
          id:7,
          img:'mona 1 (1).png'
        },
        {
          id:8,
          img:'eurolines-1 1.png'
        },
        {
          id:9,
          img:'logo (1).png'
        },
        {
          id:10,
          img:'adidas-9 1 (1).png'
        },
      ],
      [
      {
          id:11,
          img:'Vector (6).png'
        },
        {
          id:12,
          img:'eurolines-1 1.png'
        },
        {
          id:13,
          img:'mona 1 (1).png'
        },
        {
          id:14,
          img:'logo (1).png'
        },
        {
          id:15,
          img:'adidas-9 1 (1).png'
        },
      ]],
      
      },
     
    }},
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
  

}
</script>

<style>

</style>