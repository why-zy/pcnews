<template>
  <div class="nar">
  <div class="narb" >
<el-row>
  <el-button type="danger">网站首页</el-button>
    <el-button type="danger">企业培训</el-button>
      <el-button type="danger">咨询调研</el-button>
        <el-button type="danger">机构概括</el-button>
          <el-button type="danger">新闻中心</el-button>
</el-row>
</div>
        <div class="narc">
      <el-input
    placeholder=""
    v-model="input3">
    <i slot="suffix" class="el-input__icon el-icon-search"></i>
  </el-input>
         <img src="../../assets/img/shu.png" alt="" class="nard">
            </div>

  </div>
</template>

<script>
export default {
    name:'NarBars',
   data() {
      return {
        activeName: 'second',
        input3: '',
      };
    }
    
}
</script>

<style>
.el-input__inner {
    -webkit-appearance: none;
    background-color:  #d51814;
    background-image: none;
    border-radius: 24px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #8d8f92;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
</style>
<style scoped>
.nar{
    width: 1920px;
    height: 60px;
    background-color: #d51814;
    display: flex;
    align-items: center
}
.narb{
    float: left;
    margin-left: 360px;
}
.narc{
        position:absolute;
        float: right;
        right: 280px;
}
.narc img{
    position:absolute;
    float:right;
    right: 30px;
    margin-top: 10px;
    justify-items: center;
    align-items: center;
}
.narb button{
    width: 140px;
    height: 60px;
    border: none;
     border-radius: 0;
}
.el-button {
    padding: 0;
    font-size: 16px;
}
.el-button+.el-button {
    margin-left: 0px;
}
.el-button--danger {
    color: rgb(247, 243, 243);
    background-color: #d51814;
}
.el-button:focus, .el-button:hover {
    color: #d51717;
    border-color: #fff79a;
    background-color: #fff79a
}
</style>