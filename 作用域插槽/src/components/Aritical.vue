<template>
   <div class="app">
       <div class="title">
           <slot name="title"></slot>
       </div>
       <div class="content">
           <slot name="content"></slot>
       </div>
       <div class="author">
           <slot name="author" msg="hello vue.js"></slot>
       </div>
   </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
   .app div {
       width: 500px;
       height: 250px;
   }
   .title {
       background-color: pink;
   }
   .content {
       background-color: rgb(176, 176, 218);
   }
   .author {
       background-color: aquamarine;
   }

</style>