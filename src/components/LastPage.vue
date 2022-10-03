<template>
  <div class="lastPage">
   <img src="../assets/img/king-midas-logo-rgb 1.png" alt="">
   <div class="navigationList">
        <div class="Services">
            <h3>Services</h3>
            <router-link to="/emailauto"><p>Email</p> </router-link>        
            <router-link to="/marketing"><p> Marketing Automation</p> </router-link> 
            <router-link to="/crm"><p>CRM Agency</p> </router-link> 
            <p>Other Services</p>
        </div>
        <div class="Home">
            <h3>Home</h3>
            <router-link to="/about">  <p>About Us</p> </router-link>  
            <router-link to="/careers"><p>Careers</p></router-link> 
            <router-link to="/blog"><p>Blog</p></router-link> 
        </div>
        <div class="Help">
            <h3>Help</h3>
            <p>Terms of Use</p>
            <p> Provicy Policy</p>
        </div>
        <div class="Contacts">
            <h3>Contacts</h3>
            <p><img src="../assets/img/contact img/ci_location.png" alt=""> Melbourne, AU, Level 6, 534 Church Street, Cremorne, VIC 3121</p>
            <p> <img src="../assets/img/contact img/Vector (5).png" alt=""> 1300 818 435</p>
            <p><img src="../assets/img/contact img/fluent_mail-16-filled.png" alt=""> info@mooning.com</p>
        </div>
        <div class="reg">
            <h3>We can help you improve your current martech platform.     Ask us how</h3>
            <div><input type="text" placeholder="First Name*"> </div>
            <div><input type="text" placeholder="Email*"> </div>
            <div><input type="text" placeholder="Phone*"> </div>
            <div><textarea name="" id="" cols="30" rows="10" placeholder="Message*"></textarea> </div>
            <button class="learnMore"> Increase my leads</button>
        </div>
   </div>
   <div class="logos">
    <img src="../assets/img/navImg/ant-design_twitter-circle-filled (1).png" alt="">
    <img src="../assets/img/navImg/ant-design_twitter-circle-filled.png" alt="">
    <img src="../assets/img/navImg/entypo-social_linkedin-with-circle.png" alt="">
   </div>
   <div class="copyRight">
    <p>Copyright © 2022.  All rights reserved.</p>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .lastPage {
    padding: 60px 190px 20px 190px;
    background-color: #09080E;

    h3 {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    color: #FFFFFF;
    }
    p {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    margin: 10px 0px;
    }
    img {
    margin-bottom: 60px;
    height: 50px;
    }
    .navigationList {
    padding-top: 60px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
        .Services {
        text-align: start;
        }
        .Contacts {
        width: 260px;
            img {
                width: 30px;
                height: 30px;
            margin-right: 10px;
            margin-bottom: 0px;

            }
        }
        .reg {
        width: 303px;
            input {
            outline: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 12px;
            margin: 10px 0px;
            width: 310px;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            }
            textarea {
            outline: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 12px;
            margin: 10px 0px;
            width: 300px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            height: 100px;
             }
            button {
            width: 324px;
            height: 56px;
            }
            .learnMore {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 21px;
            line-height: 30px;
            color: #FFFFFF;
            background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
            box-shadow: 0px 4px 8px rgba(44, 38, 20, 0.1);
            border-radius: 6px;
            border: 0px;
            }

        }
   }
   .logos{
    padding-bottom: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
   
   }
   .copyRight {
    display: flex;
    padding: 20px 0px;
        p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        margin: auto;
        color: #FFFFFF;
        }
   }
}

</style>