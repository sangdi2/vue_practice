<template>
  <div id="app">count的值是{{count}}<br/>
  <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  
  
  data(){
    return {
      count:0
    }
  },
  methods:{
    add(){
      this.count++;
      this.$emit('numchang',this.count)
      console.log('hiji')
    }
  }
}
</script>

<style>

</style>