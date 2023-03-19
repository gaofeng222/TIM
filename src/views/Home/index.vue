<template>
  <Heador />
  <Search />
  <div class="content-main">
    <el-carousel :interval="4000" height="600px">
      <el-carousel-item v-for="item in imgRes" :key="item.url">
        <img :src="item.url" alt="" srcset="" style="width: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import Heador from 'components/common/Heador/index.vue'
import Search from 'components/common/Search/index.vue'
const imgRes = [
  {
    url: require('assets/images/b1.jpg')
  },
  {
    url: require('assets/images/b3.jpg')
  },
  {
    url: require('assets/images/b4.jpg')
  }
]
</script>

<style lang="scss" scoped>
.content-main {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
