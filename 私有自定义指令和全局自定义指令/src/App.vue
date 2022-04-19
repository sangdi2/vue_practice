<template>
  <div id="app" v-color="color">App组件<br/>
  <button @click="add">改变标题颜色</button>
  <count></count>
  </div>
</template>

<script>
import count from './components/count.vue'
export default {
  components:{
    count
  },
  
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
  directives:{
    color:{
       bind(el,bingding){
         el.style.color=bingding.value
       },
       update(el,bingding){
         el.style.color=bingding.value
       }
    }
  }
}
</script>

<style>

</style>