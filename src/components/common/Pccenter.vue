<template>
  <div class="pcenter">
           <Lunone></Lunone>
        <Monna></Monna>
        <Monnb></Monnb>
        <Monnc></Monnc>
        <Monnd></Monnd>
        <Fourimg></Fourimg>
        <Cen></Cen>
  </div>
</template>

<script>
import Lunone from '../component/Lunone'
import Monna from '../component/monone/Monna'
import Monnb from '../component/monone/Monnb'
import Monnc from '../component/monone/Monnc'
import Monnd from '../component/monone/Monnd'
import Fourimg from '../component/monone/Fourimg'
import Cen from '../component/cencen/Cen'
export default {
     name:'Pccenter',
      components:{
          Lunone,
          Monna,
          Monnb,
          Monnc,
          Monnd,
          Fourimg,
          Cen
      }
}
</script>

<style scoped>
.pcenter{
  position: relative;
    width: 1200px;
    height: 2270px;
    background-color: #ffffff;
    display: flex;
    float: left;
    margin-left: 360px;
}

</style>