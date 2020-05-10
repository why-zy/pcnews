<template>
  <div class="monna">
      <div class="monna1">
          <span>国资企要闻</span>
      </div>
      <img src="../../../assets/img/jiao.png" alt="">
      <div class="monna2">
         <a href="">查看更多></a>
      </div>
      <div class="monna3">
          <div class="monna4">
    <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>2020-4-28</span></div></el-col>
    </el-row>
        <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>2020-4-28</span></div></el-col>
    </el-row>
        <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>2020-4-28</span></div></el-col>
    </el-row>
        <el-row>
        <el-col :span="20"><div class="grid-content bg-purple"><span>煤炭科工集团煤炭科工集团煤炭科工集团</span></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"><span>2020-4-28</span></div></el-col>
    </el-row>
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name:'Monna'

}
</script>

<style scoped>
.monna{
    position:absolute;
    top: 860px;
    float: left;
    width: 800px;
    height: 275px;

}
.monna1{
    width: 200px;
    height:60px;
    background-color: #d51814;
    font-size: 27px;
    text-align: center;
    line-height:60px;
}
.monna2{
    position:absolute;
    left: 200px;
    top:12px;
    float: right;
    width: 600px;
    height: 50px;
    background-color: #f6f6f6;
    text-align: right;
    line-height:50px;
}
.monna3{
    width: 800px;
    height: 205px;
    border: 1px solid #dbdbdb;
    margin-top: 10px;

}
.monna4{
    margin-left: 30px;
        height: 50px;
        text-align: left;
    line-height:50px;
    font-size: 18px;
    color: #585858;
    margin-top: 10px;
    }
.el-col {
    border-radius: 0px;
    height: 40px;
     margin-bottom: 5px;
  }
  .bg-purple-light {
    font-size: 17px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
.monna1 span{
align-items: center;
color: #fffeff;
}
.monna img{
    position:absolute;
    left: 200px;
    top:0
}
.monna2 a{
    margin-right: 20px;
    text-decoration:none;
    color: #676767;
    font-size: 17px;
}
</style>