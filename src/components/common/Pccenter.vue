<template>
  <div class="pcenter">
           <Lunone></Lunone>
        <Monna></Monna>
        <Monnb></Monnb>
        <Monnc></Monnc>
        <Monnd></Monnd>
        
        <Righta></Righta>
        <Rightb></Rightb>
        <Rightc></Rightc>
        <Rightd></Rightd>
        <Righte></Righte>
        <Rightf></Rightf>
        
        
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

import Righta from '../component/mright/Righta'
import Rightb from '../component/mright/Rightb'
import Rightc from '../component/mright/Rightc'
import Rightd from '../component/mright/Rightd'
import Righte from '../component/mright/Righte'
import Rightf from '../component/mright/Rightf'

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
          Righta,
          Rightb,
          Rightc,
          Rightd,
          Righte,
          Rightf,
          Cen
      }
}
</script>

<style scoped>
.pcenter{
  position: relative;
    width: 1200px;
    height: 2261px; 
    background-color: #ffffff;
    display: flex;
    float: left;
    margin-left: 360px;
}

</style>