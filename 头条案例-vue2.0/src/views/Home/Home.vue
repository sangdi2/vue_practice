<template>
  <div>
      <van-nav-bar title="首页" fixed/>
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
      <Aritical v-for="item in articallist" :key="item.id" :title="item.title" :autid="item.aut_id" :commmcount="item.comm_count"
      :pubdate="item.pubdate" :autname="item.aut_name" :cover="item.cover"></Aritical>
      </van-list>
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
       articallist:[],
       loading:true,
       finished:false
     }
  },
    methods:{
      async initaritical(){
        const {data:res}= await request.get('/articles',{params:{
          _page:this.page,
          _limit:this.limit
        }})
        console.log(res)
        this.articallist=[...this.articallist,...res]
        this.loading=false
        if(res.length===0){
          this.finished=true
        }
      },
      onLoad(){
        this.page++
        this.initaritical()
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

