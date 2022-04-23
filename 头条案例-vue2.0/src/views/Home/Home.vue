<template>
  <div>
      <van-nav-bar title="首页" fixed/>
      <Aritical v-for="item in articallist" :key="item.id"></Aritical>
  </div>
</template>

<script>
import request from '../../utils/request.js'
import Aritical from '../../components/Artical/Articalinfo.vue'
export default {
  data(){
     return {
       page:1,
       limit:10,
       articallist:[]
     }
  },
    methods:{
      async initaritical(){
        const {data:res}= await request.get('/articles',{params:{
          _page:this.page,
          _limit:this.limit
        }})
        console.log(res)
        this.articallist=res
      }
    },
    created(){
      this.initaritical()
    },
    components:{
      Aritical
    }
}
</script>

<style lang="less" scoped>
   .van-nav-bar{
       background-color: #007bff;
   }
   /deep/.van-nav-bar__title {
       color: white;
   }
</style>>

