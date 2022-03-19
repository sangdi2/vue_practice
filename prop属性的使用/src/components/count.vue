<template>
  <div id="app">count的值是{{count}}<br/>
  <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  props:{
    init:{
      default:0
    }
  },
  el:'#app',
  data(){
    return {
      count:this.init
    }
  },
  methods:{
    add(){
      this.count++;
    }
  }
}
</script>

<style>

</style>