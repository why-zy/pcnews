<template>
  <div class="rightf">
      <div class="rightf1">
        <img src="../../../assets/img/righta.png" alt="">
        <span>国企人才网</span>
        <a href="">更多>></a>
      </div>
      <div class="rightf2">
              <img src="../../../assets/img/rightl.png" alt="">
              <img src="../../../assets/img/rightl.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:'Rightf'

}
</script>
<style lang="scss" scoped>
.rightf{
    position:absolute;
    float: left;
    top: 1760px;
    left: 820px;
    width: 385px;
    height: 255px;

.rightf1{
  width: 385px;
  height: 60px;
  border: 1px solid #dbdbdb;
  border-top-width: 2px;
    border-right-width: 2px;
    border-left-width: 2px;
  line-height: 60px;

  img{
    position: absolute;
     float: left;
     top: 22px;
     left: 22px;
  }
  span{
        position: absolute;
     float: left;
      font-weight:bold;
     left: 33px;
    font-size: 20px;
    color: red;
  }
  a{
    position: absolute;
     right: 19px;
    font-size: 17px;
    color: #272826;
    text-decoration:none;
  }
}}
.rightf2{
    width: 385px;
    height: 200px;
    border: 1px solid red;
        position: absolute;
        float: left;
        display: flex;
    line-height: 200px;
    flex: auto;
    align-items: center;
    justify-content: space-evenly;

}

</style>