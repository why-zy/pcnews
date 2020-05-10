<template>
<div class="fourimg">
  <div class="box">
  <div class="column">
    <img src="../../../assets/img/men.png" alt="" class="item">
    <img src="../../../assets/img/men.png" alt="" class="item">
  </div>
  <div class="column">
    <img src="../../../assets/img/men.png" alt="" class="item">
    <img src="../../../assets/img/men.png" alt="" class="item">
  </div>
</div>
</div>

</template>

<script>
export default {
  name:'Fourimg'

}
</script>

<style>
.fourimg{
    position:absolute;
    top: 1745px;
    float: left;
    width: 800px;
    height: 295px;
    margin-top: 18px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>