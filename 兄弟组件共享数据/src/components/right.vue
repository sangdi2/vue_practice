<template>
  <h2>right组件{{sttr}}</h2>
</template>

<script>
import bus from './eventbus'
export default {
    data(){
        return {
            sttr:''
        }
    },
    
        created(){
            bus.$on('share',val=>
            {
                this.sttr=val
                console.log(val)
            })
        }
    
}
</script>

<style>

</style>