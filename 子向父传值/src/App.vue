<template>
  <div id="app">
    <h1>app组件的值是{{num}}</h1>
    
    <count @numchang="getnum"></count>
    
  </div>
</template>

<script>
import count from './components/count.vue'

export default{
  data(){
      return {
        num:0
      }
  },
  components:{
    count
  },
  methods:{
    getnum(val){
      this.num=val
    }
  }
}
</script>

<style lang="less">

</style>
