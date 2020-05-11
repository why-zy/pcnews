<template>
  <div class="righte">
      <div class="righte1">
        <img src="../../../assets/img/righta.png" alt="">
        <span>后备人才</span>
        <a href="">更多>></a>
      </div>
      <div class="righte2">
         <div class="righte3">
    <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>4-28</span></div></el-col>
    </el-row>
        <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>4-28</span></div></el-col>
    </el-row>
        <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>4-28</span></div></el-col>
    </el-row>
        <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>4-28</span></div></el-col>
    </el-row>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Righte'

}
</script>
<style lang="scss" scoped>
.righte{
    position:absolute;
    float: left;
    top: 1480px;
    left: 820px;
    width: 385px;
    height: 255px;

.righte1{
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
}
.righte2{
  width: 385px;
  height: 185px;
  border: 1px solid #dbdbdb;
  border-right-width: 2px;
    border-left-width: 2px;
    border-bottom-width: 2px;
}
}
.righte3{
      margin-left: 30px;
        height: 45px;
        text-align: left;
    line-height:45px;
    font-size: 16px;
    color: #585858;
    margin-top: 10px;
}
</style>