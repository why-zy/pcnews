<template>
  <div class="view">
   <Top></Top>
   <Onepage></Onepage>
   <Narbars></Narbars>
   <Lunbo></Lunbo>
   <Pccenter></Pccenter>
   <Last></Last>
  </div>
</template>

<script>
import Top from '../components/common/Top'
import Onepage from '../components/common/Onepage'
import Narbars from '../components/common/Narbars'
import Lunbo from '../components/common/Lunbo'
import Pccenter from '../components/common/Pccenter'
import Last from './common/Last'
export default {
      name:'Viewen',
      components:{
        Top,
        Onepage,
        Narbars,
        Lunbo,
        Pccenter,
        Last

      }
}
</script>

<style scoped>
.view{
  position: relative;
  width: 1920px;
  height: 3488px;
  z-index: 1;
  background-color:#ffffff;
}
</style>>
