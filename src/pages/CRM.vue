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
            background: 'CRMimg.png',
            bannerImg: '',
            heading: 'The CRM agency Australia has been waiting for',
            content: 'When you’re responsible for your brand’s marketing messaging throughout the customer journey, you need to actually know what stage they’re in to do so. Otherwise, you’ll be wasting money communicating with the wrong people at the wrong time. Absolutely dominate your competitors by partnering with us and we’ll set up a CRM platform that makes managing and nurturing leads in each stage of the sales funnel brilliantly easy. We’ll also implement automation for a number of marketing tasks, freeing up your time to focus on more important things. So take your business to the next level and engage King Midas today for CRM and marketing automation services that are second to none.',
            button: 'Get a Free Proposal'
          },
          pageSection:[
            {
                id:1,
                title:'A superior approach to implementing CRM',
                text:'Indeed, email marketing remains the most effective channel within the digital landscape to reach your target audience. Because the fact remains that people check their emails a number of times a day - about 15, actually. As a result, it provides the perfect opportunity for brands to drive consumers through the sales funnel and produce more sales.Whether you’re a local small business keen to increase foot traffic in your bricks-and-mortar shop, an ecommerce business owner that wants a higher click through rate and more website visitors or a digital marketing manager at a globally-recognised brand interested in improving your customer experience, the right email marketing services will get you there.',
                img:'CRMimg1.png',
            },
            {
                id:2,
                title:'Why every digital strategy needs CRM to see success',
                text:'Through proper storage of data about each customer on a CRM platform, you’re able to gain insights and understandings about them which you would never have been able to before. As we all know, every digital strategy is customer-focused and should include content marketing efforts that place the ideal marketing message in front of the right audience at the perfect moment. And CRM is the ultimate tool to not just know exactly when to send out which messages to who, but also to automate a huge number of otherwise time-consuming tasks. Long story short, CRM that’s been expertly set up will save time, money, and resources while growing more meaningful relationships with existing and prospective customers at every step of the marketing funnel.',
                img:'CRMimg2.png',
                reverse:true
            },
            {
                id:3,
                title:'Every CRM service you could ever need - right here',
                text:'Ever worked on a project where you had to deal with a bunch of different outside businesses to complete? It’s a pain in the gluteus maximus, isn’t it?Bypass the headaches and hassle of having umpteen ports of call with your CRM setup; at King Midas, whatever you need us to do, you can rest assured we’ve got the expertise to get it done. From conducting comprehensive messaging audits and properly mapping out your customer journey to designing a fully custom end-to-end strategy and more, we’ve got you completely covered.',
                img:'CRMimg3.png',
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