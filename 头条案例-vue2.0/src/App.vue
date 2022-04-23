<template>
  <div class="container">
      <router-view></router-view>
      <van-tabbar route>
          <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
          
          <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .container {
      padding: 46px 0 50px 0;
    }
</style>>

</style>