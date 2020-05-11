<template>
  <div class="rightd">
      <div class="rightd1">
        <img src="../../../assets/img/righta.png" alt="">
        <span>国企人才网</span>
        <a href="">更多>></a>
      </div>
      <div class="rightd2">
              <img src="../../../assets/img/renc.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name:'Rightd'

}
</script>
<style lang="scss" scoped>
.rightd{
    position:absolute;
    float: left;
    top: 1180px;
    left: 820px;
    width: 385px;
    height: 255px;

.rightd1{
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
.rightd2{
    width: 385px;
    height: 200px;
    border: 1px solid red;
        position: absolute;
        float: left;
        display: flex;
    line-height: 200px;
    align-items: center;
    justify-content: center;

}

</style>