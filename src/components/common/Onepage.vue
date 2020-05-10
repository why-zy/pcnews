<template>
  <div class="onep">
    <img src="../../assets/img/china.png" alt="">
    <div class="page1">
     <div class="page2">
         <div class="page3"></div>
      <span class="span1">四川省政府国有资产监督管理委员会外部董事服务中心</span>
      <br>
      <span class="span2">SI CHUAN SHENG ZHENG FU GUO YOU ZI CHAN JIAN DU GUAN LI WEI YUAN HUI WAI BU DONG SHI FU WU ZHONG XIN</span>
      <br>
      <div class="page3"></div>
       <div class="onep2"></div>
      <span class="span1">四川省政府国有资产监督管理委员会工作技术研究中心</span>
      <br>
      <span class="span2">SI CHUAN SHENG ZHENG FU GUO YOU ZI CHAN JIAN DU GUAN LI WEI YUAN HUI GONG ZUO JI SHU YAN JIU ZHONG XIN</span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Onepage'

}
</script>

<style scoped>
.onep{
    width: 1920px;
    height: 230px;
    background-color: #ffffff;
    display: flex;
    align-items: center
    }
.page3{
    margin-bottom: 10px;
}
.onep img{
    float: left;
    margin-left: 270px;
     align-items: center;
}
.page1{
    width: 810px;
    height: 160px;
    margin-left: 20px;
    margin-top:20px;
}
.page1 span{
    
    white-space:pre-wrap;

}
.span1{
    color: #000002;
    font-size: 28px;
    font-weight: bold;
    
}
.span2{
    margin-left: 3px;
    font-size: 13.2px;
    color: #bebcbd;
    margin-bottom: 40px;
}
</style>