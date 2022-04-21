<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>
    
    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
// 导入组件
import Home from './components/Home.vue'
import Movie from './components/Movie.vue'
import About from './components/About.vue'
import Login from './components/login.vue'
import Main from './components/main.vue'
export default {
  // data(){
  //     return {
  //       compname:''
  //     }
  // },
  name: 'App',
  // 注册组件
  components: {
    Home,
    Movie,
    About,
    Login,
    Main
  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
