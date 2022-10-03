<template>
  <div class="blocks">
    <div class="bigBlock"></div>
    <div class="miniBlock"></div>
    <div class="miniBlock"></div>
    <div class="bigBlock"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .blocks{
        padding: 6% 10%;
        display: flex;
        flex-wrap: wrap;
        .bigBlock{       
        margin: 5px;
        width: 883px;
        height: 430px;
        background: #D9D9D9;
        border-radius: 6px;
        }
            
        .miniBlock {
        margin: 5px;
        width: 580px;
        height: 430px;
        background: #D9D9D9;
        border-radius: 6px;

        }
    }
</style>