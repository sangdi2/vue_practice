<template>
  <div id="app">
    
    <h1>App组件</h1>
    <br/>
    <Aritical>
      <template #title>
         <p>一首歌</p>
      </template>
      <template #content>
         <p>一首诗</p>
      </template>
      <template #author>
         <p>一个你</p>
      </template>
    </Aritical>
  </div>
</template>

<script>

import Aritical from './components/Aritical.vue'
export default{
 components:{
   Aritical
 }
}
</script>

<style lang="less">

</style>
