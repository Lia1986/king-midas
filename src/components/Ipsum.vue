<template>
   <div class="ipsum">
      <div class="ipsumText">
        <h2 class="titleYourAgency">Lorem ipsum</h2>
      </div>
      <div class="ispumList">
        <div class="ispumList1" v-for="item in ispumList" :key = "item.id">
          <img :src="require(`../assets/img/ispumImg/${item.img}`)" alt=""> 
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
      </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ispumList:[
        {
          id:1,
          img:'ispum.png',
          title:'Lorem Ipsum',
          text:'There’s only one way to do things when it comes to clients’ budgets, and that’s to show them exactly where every cent has gone. You don’t ever need to worry about where your dollars are going - and why - because it will all be presented to you in black and white. It’s just another way our automation agency offers a premium level of service to our clients.',
        },
        {
          id:2,
          img:'ispum.png',
          title:'Lorem Ipsum',
          text:'There’s only one way to do things when it comes to clients’ budgets, and that’s to show them exactly where every cent has gone. You don’t ever need to worry about where your dollars are going - and why - because it will all be presented to you in black and white. It’s just another way our automation agency offers a premium level of service to our clients.',
        },
        {
          id:3,
          img:'ispum.png',
          title:'Lorem Ipsum',
          text:'There’s only one way to do things when it comes to clients’ budgets, and that’s to show them exactly where every cent has gone. You don’t ever need to worry about where your dollars are going - and why - because it will all be presented to you in black and white. It’s just another way our automation agency offers a premium level of service to our clients.',
        }
      ],
        }
    }

}
</script>

<style lang="scss">
.ipsum{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 120px 190px;
    .ipsumText{
    .titleYourAgency {
        display: flex;
        justify-content: center;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        color: #101820;
    }
    p{
        margin: auto;
        margin-top: 16px;
        width: 815px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 30px;
        text-align: center;
        color: #101820;
    }
    }
    .ispumList{
     display: flex;
    justify-content: space-around;
    background: #FFFFFF;
    margin-top: 60px;
    flex-wrap: wrap;
       .ispumList1{
        padding: 20px;
        width: 27%;
        background: #FFFFFF;
        box-shadow: 0px 0px 30px rgba(2, 2, 2, 0.08);
        border-radius: 12px;
        img{
         width: 50px;
        }
        h3 {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 36px;
            margin: 10px 0px;
            color: #101820;
        }
        p {
            width: 95%;
            height: 100%;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
            color: #101820;
        }
                
    }

    }
}
</style>