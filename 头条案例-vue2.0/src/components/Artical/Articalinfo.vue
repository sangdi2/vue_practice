<template>
  <div>
      <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type===1"/>
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type===3">
          <img :src="cover.images[i]" alt="" class="thumb"  v-for="(item,i) in cover.images" :key="i"/>
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者{{autname}}  &nbsp;&nbsp;  评论{{commmcount}} &nbsp;&nbsp; 发布日期{{pubdate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
   props:{
     title:{
       type:String,
       default:''
     },
     autid:{
       type:String,
       default:''
     },
     commmcount:{
       type:[Number,String],
       default:''
     },
     pubdate:{
       type:String,
       default:''
     },
     autname:{
       type:String,
       default:''
     },
     cover:{
       type:Object
     }
   }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>>
