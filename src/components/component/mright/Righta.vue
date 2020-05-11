<template>
  <div class="righta">
      <div class="righta1">
        <img src="../../../assets/img/righta.png" alt="">
        <span>通知公告</span>
        <a href="">更多>></a>
      </div>
      <div class="righta2">
         <div class="righta3">
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
    name:'Righta'

}
</script>
<style lang="scss" scoped>
.righta{
    position:absolute;
    float: left;
    top: 50px;
    left: 820px;
    width: 385px;
    height: 255px;

.righta1{
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
.righta2{
  width: 385px;
  height: 185px;
  border: 1px solid #dbdbdb;
  border-right-width: 2px;
    border-left-width: 2px;
    border-bottom-width: 2px;
}
}
.righta3{
      margin-left: 30px;
        height: 45px;
        text-align: left;
    line-height:45px;
    font-size: 16px;
    color: #585858;
    margin-top: 10px;
}
</style>