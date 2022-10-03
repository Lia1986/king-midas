 <template>
    <div class="infoPage2" :style="{backgroundColor: background ? 'white' : 'black' }" >
        <div class="page2Section" 
         v-for="(item) in pageSection" :key = item.id :class="{reverse:item.reverse}"
        >
         <div>
            <h2 :class="item.white ? 'whiteClass': item.black ? 'blackClass':'yellowClass'">{{item.title}}</h2>
            <p :style="{color: background ?   'black':'white' }">{{item.text}}</p>
            <button class="proposalButton">Get a Free Proposal</button>
         </div>
         <div class="infoPage2Img">
            <img :src="require(`../assets/img/page2Img/${item.img}`)" alt="">
         </div>
        </div>
    </div>

 </template>

<script>
  export default{
    name:"Page2",
    props: ['pageSection'],
    data(){
   return{
   background : false
   }
  },
created (){
    this.pageSection.forEach(item => {
        this.background=item.background
    })
}
 }

</script>


 <style lang="scss">
    .infoPage2 {
    padding: 120px 183px 120px 190px;
    background-color: black;

}
.page2Section {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    div {
    margin-right: 32px;
    width: 50%;
    p {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 30px;
        color: #FFFFFF;
         }
        img{
            width:100%
        }
        
        h2 {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 42px;
            line-height: 50px;
            margin-bottom: 24px;
            width: 100%;


    }
   
}
}
.proposalButton {
    padding: 16px 32px;
    color: #FFFFFF;
    border: none;
    height: 62px;
    margin-top: 32px;
    background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
    box-shadow: 0px 4px 8px rgba(44, 38, 20, 0.1);
    border-radius: 6px;
}
.reverse{
display: flex;
flex-direction: row-reverse;
}
.yellowClass{
    background:linear-gradient(90deg, #ece364 0%, #FFB25B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.blackClass{
    color:black
}
.whiteClass{
    color:white
}
.whiteClassDisplay{
    background-color: #FFFFFF;
}
 
 </style>