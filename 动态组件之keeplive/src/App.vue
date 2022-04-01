<template>
  <div id="app">
    <p>app组件</p>
    <button @click="comp='left'">显示left组件</button>
    <button @click="comp='right'">显示right组件</button>
    <keep-alive include="left">
      <component :is="comp"></component>
    </keep-alive>
    
    
  </div>
</template>

<script>
import left from './components/left.vue'

import right from './components/right.vue'

export default{
  data(){
      return {
        comp:"left"
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
