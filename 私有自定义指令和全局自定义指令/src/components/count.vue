<template>
  <div id="app" v-color="color">count组件<br/>
  <button @click="add">改变标题颜色</button>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      color:"red"
    }
  },
  
  methods:{
    add(){
      this.color="blue"
    }
  },
  
}
</script>

<style>

</style>