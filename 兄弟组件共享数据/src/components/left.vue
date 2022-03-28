<template>
  <h2 @click="send">left组件</h2>
</template>

<script>
import bus from './eventbus'
export default {
    data(){
        return {
            str:'无边落木萧萧下，不尽长江滚滚来'
        }
    },
    methods:{
        send(){
           bus.$emit('share',this.str)
        }
    }
}
</script>

<style>

</style>