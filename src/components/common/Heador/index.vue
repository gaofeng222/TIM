<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content_left">
        <el-dropdown>
          <span class="el-dropdown-link">
            中国大陆
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in areaDatas" :key="item.id">
                {{ item.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <router-link class="login-link" to="/login">亲,请登录</router-link>
        <router-link to="/register">免费注册</router-link>
        <router-link to="/mb">手机逛商场</router-link>
        <router-link to="/wza">网页无障碍</router-link>
      </div>
      <div class="header-content_right">
        <el-dropdown>
          <span class="el-dropdown-link">
            我的淘宝
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in areaDatas2" :key="item.id">
                {{ item.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <router-link to="/shop-cart">购物车</router-link>
        <router-link to="/login">收藏夹</router-link>
        <router-link to="/login">购物车</router-link>
        <router-link to="/chat">联系客服</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'

const data = reactive({
  areaDatas: [
    { name: '全球', id: 1 },
    { name: '中国大陆', id: 2 },
    { name: '中国香港', id: 3 },
    { name: '中国澳门', id: 4 },
    { name: '中国台湾', id: 5 }
  ],
  areaDatas2: [
    { name: '已买到的宝贝', id: 1 },
    { name: '我的足迹', id: 2 }
  ]
})

const { areaDatas, areaDatas2 } = toRefs(data)
</script>

<style lang="scss" scoped>
.header {
  height: 35px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
  font-size: 0;
  &-content {
    width: 100%;
    max-width: 1200px;
    line-height: 35px;
    // background: red;
    margin: 0 auto;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    &_left {
      //   background-color: red;
      .el-dropdown-link {
        line-height: 35px;
        background-color: #fff;
        text-align: center;
        padding: 0 10px;
      }
      & > a {
        margin: 0 6px;
        &:hover {
          color: #b11414;
        }
        &.login-link {
          color: red;
        }
      }
    }
    &_right {
      //   background: green;
      flex: 0 1 600px;
      text-align: right;
      .el-dropdown-link {
        line-height: 35px;
        // background-color: #fff;
        text-align: center;
        padding: 0 10px;
      }
      & > a {
        margin: 0 6px;
        &:hover {
          color: #b11414;
        }
      }
    }
  }
}
</style>
