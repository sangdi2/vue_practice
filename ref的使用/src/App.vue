<template>
    <div id="app">
        <input type="text" v-if="flag" @blur="truee" ref="she">
        <button v-else @click="changeflag">按钮</button>
    </div>
</template>

<script>
export default {
      data(){
        return {
          flag:false
        }
      },
      methods:{
        changeflag(){
          this.flag=true
          this.$nextTick(()=>{
            this.$refs.she.focus()
          })
        },
        truee(){
          this.flag=false
        }
      }
}
</script>

<style>

</style>

