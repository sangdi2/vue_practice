<template>
  <div id="app">
    <p>app组件</p>
    <left style="float:left"></left>
    <right style="float:right"></right>
    
    
  </div>
</template>

<script>
import left from './components/left.vue'

import right from './components/right.vue'

export default{
  data(){
      return {
        
      }
  },
  components:{
    left,
    right
  },
  methods:{
    
  }
}
</script>

<style lang="less">
  
</style>
