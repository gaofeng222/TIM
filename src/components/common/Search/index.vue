<template>
  <div class="search">
    <div class="search-main">
      <div class="logo"></div>
      <div class="search-wrap">
        <div>
          <el-input
            v-model="productName"
            placeholder="充电宝"
            class="input-with-select"
          >
            <template #prepend>
              <el-select
                v-model="selectShop"
                placeholder="宝贝"
                style="width: 115px"
              >
                <el-option
                  v-for="item in shopTypes"
                  :label="item.name"
                  :key="item.id"
                  :value="item.id"
                />
              </el-select>
            </template>
            <template #append>
              <!-- <el-button :icon="Search" /> -->
              搜 索
            </template>
          </el-input>
        </div>
        <div class="goods-tj">
          <router-link to="/login">购物车</router-link>
          <router-link to="/login">四件套</router-link>
          <router-link to="/login">潮流T恤</router-link>
          <router-link to="/login">时尚女鞋</router-link>
          <router-link to="/login">短裤</router-link>
          <router-link to="/login">半身裙</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import { Search } from '@element-plus/icons-vue'
const data = reactive({
  productName: '',
  selectShop: '',
  shopTypes: [
    { name: '天猫', id: 1 },
    { name: '店铺', id: 2 }
  ]
})
const { productName, selectShop, shopTypes } = toRefs(data)
</script>

<style lang="scss" scoped>
.search {
  &-main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 24px;
    height: 97px;
    // line-height: 97px;
    display: flex;
    .search-wrap {
      position: relative;
      width: 738px;
      background: #fff;
      //   height: 70px;
      margin-left: 0;
      padding-left: 150px;
      //   background-color: #cf2020;
      :deep(.el-input-group__append) {
        background-color: #cf2020;
        width: 80px;
        color: #fff;
        font-size: 16px;
      }
      .goods-tj {
        font-size: 14px;
        & > a {
          margin: 0 6px;
          color: #333;
        }
      }
    }
    .input-with-select {
      width: 100%;
      padding: 9px 0;
      height: 60px;
      color: #000;
      font-size: 14px;
      line-height: 20px;
      text-indent: 10px;
      //   vertical-align: middle;
      background-color: #fff;
      border-radius: 100px;
    }
  }
}
</style>
