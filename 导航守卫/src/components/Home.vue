<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <router-link to="/main">去往main后台</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
