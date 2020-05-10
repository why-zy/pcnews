<template>
  <div id="app">
    <div class="onecenter">
   <Viewen></Viewen>
    </div>
 
  </div>
</template>

<script>
import Viewen from './view/Viewen'
export default {
  name: 'App',
  components: {
    Viewen
  }
}
</script>

<style scoped>
.onecenter{
  display: flex;
  justify-content: center;

}

</style>
