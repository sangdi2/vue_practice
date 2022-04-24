<template>
  <div>
      <van-nav-bar title="首页" fixed/>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="finished">
      <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
      <Aritical v-for="item in articallist" :key="item.id" :title="item.title" :autid="item.aut_id" :commmcount="item.comm_count"
      :pubdate="item.pubdate" :autname="item.aut_name" :cover="item.cover"></Aritical>
      </van-list>
      </van-pull-refresh>
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
       finished:false,
       isLoading:false,
       refresh:true
     }
  },
    methods:{
      async initaritical(refresh){
        const {data:res}= await request.get('/articles',{params:{
          _page:this.page,
          _limit:this.limit
        }})
        console.log(res)
        if(refresh){
            this.articallist=[...res,...this.articallist]
            this.isLoading=false
        }else{
           this.articallist=[...this.articallist,...res]
           this.loading=false
        }
       
        if(res.length===0){
          this.finished=true
        }
      },
      onLoad(){
        this.page++
        this.initaritical()
      },
      onRefresh(){
        this.page++
        this.initaritical(this.refresh)
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
  //  .van-nav-bar{
  //      background-color: #007bff;
  //  }
  //  /deep/.van-nav-bar__title {
  //      color: white;
  //  }
</style>>

