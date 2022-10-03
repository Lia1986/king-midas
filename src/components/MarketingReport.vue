<template>
    <div class="marketingReport">
         <div class="marketingReport1">
            <h1>Get the 2022 Salesforce 7th State of Marketing Report</h1>
            <p>Don’t let the old ways of doing things get in the way of business success today. Our team will provide intuitive, forward-thinking marketing automation processes for businesses to thrive in this rapidly-changing industry environment.</p>
            <button>Download Now</button>
         </div>

    </div>

</template>

<script>
 export default{

}

</script>


<style lang="scss">
.marketingReport {
    padding: 120px 490px;
    background: linear-gradient(90deg, #F6EB61 0%, #FFB25B 100%);
    padding: 120px 190px 120px 190px;
    .marketingReport1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
     
        h1 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 52px;
        line-height: 70px;
        width: 65%;
        text-align: center;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #101820;
        }
        p {
        margin: 16px 0px;
        width: 56%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 30px;
        text-align: center;
        color: #101820;
        }
        button {
            width: 218px;
            height: 62px;
            background: #101820;
            box-shadow: 0px 4px 8px rgba(44, 38, 20, 0.1);
            border-radius: 6px;
            border: 0px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 21px;
            line-height: 30px;
            color: #FFFFFF;
        }
    }
   
}


</style>