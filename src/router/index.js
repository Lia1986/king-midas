import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import EmailAutomation from '../pages/EmailAutomation'
import MarketingAutomation from '../pages/MarketingAutomation'
import CRM from '../pages/CRM'
import Careers from '../pages/Careers'
import Blog from '../pages/Blog'
import BlogInside from '../pages/BlogInside'
import ContactUs from '../pages/ContactUs'
import ThankYou from '../pages/ThankYou'
import Page404mini from '../pages/Page404mini'
import Page404 from '../pages/Page404'
Vue.use(Router)
Vue.use(VueMeta)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/emailauto',
      name: 'EmailAutomation',
      component: EmailAutomation
    },
    {
      path: '/marketing',
      name: 'MarketingAutomation',
      component: MarketingAutomation
    },
     {
      path: '/crm',
      name: 'CRM',
      component: CRM
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/bloginside',
      name: 'BlogInside',
      component: BlogInside
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/thankyou',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/Page404mini',
      name: 'Page404mini',
      component: Page404mini
    },
    {
      path: '/Page404',
      name: 'Page404',
      component: Page404
    },
  ]
})
