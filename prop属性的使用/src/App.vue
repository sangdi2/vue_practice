<template>
  <div id="app">
    <left style="flex:1"></left>
    <right style="flex:1"></right>
  </div>
</template>

<script>
import left from './components/left.vue'
import right from './components/right.vue'
export default{
  components:{
    left,
    right
  }
}
</script>

<style lang="less">
#app {
  display: flex
}
</style>
