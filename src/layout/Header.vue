<template>
  <div class="head">
    <div class="title">
      <img src="../assets/img/superist.png" alt="" class="connected" />
      <div class="phone">
        <img src="../assets/img/phone.svg" alt="" /><a href="tel:+" class="tel"
          >1300 818 435</a
        >
      </div>
    </div>
    <div class="title2">
      <div class="title2Display">
        <button class="menuButton" @click="openNavBar(true)">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
          <div class=""
       
       @click="openNavBar(false) "
       :class="showNavBar ? ' showBar ' : 'noBar'"
     >
       <router-link to="/emailauto" class="li"
         ><p>Email Automation</p></router-link
       >
       <router-link to="/marketing" class="li"
         ><p>Email Marketing</p></router-link
       >
       <router-link to="/crm" class="li"><p>Platforms</p></router-link>
       <router-link to="/about" class="li"> <p>Who we are</p></router-link>
       <router-link to="/marketing" class="li"
         ><p>Email Marketing</p></router-link
       >
       <router-link to="/contactus" class="li"><p>Contact</p></router-link>
     </div>
        </button>
        <div class="kingImg"><img
          src="../assets/img/king-midas-logo-rgb 1.png"
          alt=""
          
        />
      </div>
        <div class="phone2"><img src="../assets/img/Vector (3).svg" alt="" /></div>
       
      </div>
      
    </div>
    <div class="nav">
      <img src="../assets/img/king-midas-logo-rgb 1.png" alt="" />
      <div class="menu">
        <div class="services" @click="addDropDown(true)">
          <p>Services <img src="../assets/img/Vector (1).png" alt="" /></p>
          <div class="dropDown" :class="showService ? ' dropDown2' : ''">
            <router-link to="/emailauto"> Email Automation</router-link>
            <router-link to="/marketing"> Email Marketing</router-link>
          </div>
        </div>
        <router-link to="/crm"><p>Platforms</p></router-link>
        <div class="AboutUS" @click="addDropDown(false)">
          <p>About Us <img src="../assets/img/Vector (1).png" alt="" /></p>
          <div class="dropDown" :class="show ? ' dropDown2' : ''">
            <router-link to="/about"> Who we are</router-link>
            <router-link to="/marketing"> Email Marketing</router-link>
          </div>
        </div>
        <router-link to="/contactus"><p>Contact</p></router-link>
        <button>Free Proposal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showService: false,
      showNavBar: false
    };
  },
  methods: {
    addDropDown(value) {
      if (value) {
        this.showService = !this.showService;
        this.show = false;
      } else {
        this.show = !this.show;
        this.showService = false;
      }
    },
    openNavBar(value) {
     
      if(value){
        this.showNavBar = !this.showNavBar;
      }
    }
  }
};
</script>

<style lang="scss">

</style>
