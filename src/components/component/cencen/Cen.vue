<template>
  <div class="monna">
      <div class="monna1">
          <span>国资企要闻</span>
      </div>
      <img src="../../../assets/img/jiao.png" alt="">
      <div class="monna2">
         <a href="">查看更多></a>
      </div>
     <div class="cen1">
         <div class="left">
             <img src="../../../assets/img/left.png" alt="">
         </div>
         <div class="center">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                  <div class="center1">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                  <div class="center2">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                  <div class="center3">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                  <div class="center4">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                  <div class="center5">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                    <div class="center6">
             <img src="../../../assets/img/center.png" alt="">
         </div>
                  <div class="right">
             <img src="../../../assets/img/right.png" alt="">
         </div>
     </div>
  </div>
</template>

<script>
export default {
    name:'Cen'

}
</script>

<style scoped>
.cen1{
    width: 1200px;
    height: 150px;
    border: 1px solid red;
}
.monna{
    position:absolute;
    top: 2050px;
    float: left;
    width: 1200px;
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
    width: 1000px;
    height: 50px;
    background-color: #f6f6f6;
    text-align: right;
    line-height:50px;
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
.left img{
    float: left;
    top:100px;
    left: 20px;
    width: 30px;
    height: 70px;

}
.center img{
        float: left;
    top:90px;
    left: 80px;
    width: 110px;
    height: 90px;
}
.center1 img{
        float: left;
    top:90px;
    left: 230px;
    width: 110px;
    height: 90px;
}
.center2 img{
        float: left;
    top:90px;
    left: 380px;
    width: 110px;
    height: 90px;
}
.center3 img{
        float: left;
    top:90px;
    left: 530px;
    width: 110px;
    height: 90px;
}
.center4 img{
        float: left;
    top:90px;
    left: 680px;
    width: 110px;
    height: 90px;
}
.center5 img{
        float: left;
    top:90px;
    left: 830px;
    width: 110px;
    height: 90px;
}
.center6 img{
        float: left;
    top:90px;
    left: 980px;
    width: 110px;
    height: 90px;
}
.right img{
    float: left;
    top:100px;
    left: 1130px;
    width: 30px;
    height: 70px;
}
</style>