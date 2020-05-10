<template>
  <div class="lunnoe">
    <div class="lunon">
              <div class="block">
    <el-carousel height="480px">
      <el-carousel-item>
        <div class="yiny1">
          <div class="text1">
          <h2>省国资委副主任薛东兵赴金龙长城督查工作</h2>
          </div>
        </div>
      </el-carousel-item>
            <el-carousel-item>
        <div class="yiny2">
          <div class="text1">
          <h2>省国资委副主任薛东兵赴金龙长城督查工作</h2>
          </div>
        </div>
      </el-carousel-item>
            <el-carousel-item>
        <div class="yiny3">
          <div class="text1">
          <h2>省国资委副主任薛东兵赴金龙长城督查工作</h2>
          </div>
        </div>
      </el-carousel-item>
            <el-carousel-item>
        <div class="yiny4">
          <div class="text1">
          <h2>省国资委副主任薛东兵赴金龙长城督查工作</h2>
          </div>
        </div>
      </el-carousel-item>
          
    </el-carousel>
  </div>
    </div>

  </div>
</template>

<script>
export default {
    name:'Lunone'

}
</script>
<style lang="scss">

.lunnoe{
  position: absolute;
  top: 50px;
    width: 800px;
    height: 480px;
    border: 1px solid #dbdbdb;
    margin: 1px;
}
.lunon{
  .el-carousel__button{
    width: 13px;
     height: 13px;
    border-radius: 50%;

  }
    .el-carousel__indicators--horizontal {
    bottom: 4%;
    left: 86%;
    transform: translateX(0%);
}
.yiny1{
  position:absolute;
  width: 100%;
height: 480px;
width: 786px;height: 466px;background: url("../../assets/img/mons.png") ;
margin-left: 4px;
margin-top: 6px;
}
.yiny2{
    position: relative;
  width: 100%;
height: 480px;
width: 790px;height: 466px;background: url("../../assets/img/mons.png") ;
margin-left: 4px;
margin-top: 6px;
}
.yiny3{
    position: relative;
  width: 100%;
height: 480px;
width: 790px;height: 466px;background: url("../../assets/img/mons.png") ;
margin-left: 4px;
margin-top: 6px;
}
.yiny4{
    position: relative;
  width: 100%;
height: 480px;
width: 790px;height: 466px;background: url("../../assets/img/mons.png") ;
margin-left: 4px;
margin-top: 6px;
}
.text1{
  position:absolute;
  width: 782px;
  height: 60px;
  background-color: #141414;
  opacity: 0.5;
  float: left;
  left: 6px;
  bottom: 4px;
  h2{
    position:absolute;
    font-size: 21px;
    font-weight: normal;
    color: #fcf3f3;
    width: 450px;
    height: 100px;
        padding: 35px 0;
    float: left;
    text-align: center;
    top: -30%;

  }

}
}


</style>
