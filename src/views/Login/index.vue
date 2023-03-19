<template>
  <div class="login-main">
    <div class="form-box">
      <h1>IM聊天系统登录</h1>
      <el-form :model="form" label-width="10px">
        <!-- {{ form.name }} -->
        <el-form-item label=" ">
          <el-input v-model="form.name" clearable />
        </el-form-item>
        <el-form-item label=" ">
          <el-input v-model="form.pwd" type="password" show-password />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            style="width: 100%; height: 40px"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, inject, getCurrentInstance, App } from 'vue'
import { useRouter } from 'vue-router'
import { SDKAPPID, SECRETKEY } from '@/config'
import { genTestUserSig } from '@/TUIKit/debug/GenerateTestUserSig.js'
import { set } from '@/utils/store'
const data = reactive({
  form: {
    name: '',
    pwd: ''
  }
})
const router = useRouter()
const userSig = genTestUserSig({
  SDKAppID: SDKAPPID,
  secretKey: SECRETKEY,
  userID: data.form.name
}).userSig
const app = inject<App<Element>>('app')
const onSubmit = () => {
  console.log('enter')
  let promise = app!.config.globalProperties.tim.login({
    userID: data.form.name,
    userSig
  })
  set('token', data.form.name)
  promise
    .then(function (imResponse: {
      data: { repeatLogin: boolean; errorInfo: any }
    }) {
      console.log('success', imResponse.data) // 登录成功

      if (imResponse.data.repeatLogin === true) {
        // 标识帐号已登录，本次登录操作为重复登录。v2.5.1 起支持
        console.log(imResponse.data.errorInfo)
      }
    })
    .catch(function (imError: any) {
      console.warn('login error:', imError) // 登录失败的相关信息
    })
  router.push('/chat')
}

const { form } = toRefs(data)
</script>

<style lang="scss" scoped>
.login-main {
  height: 100vh;
  overflow: hidden;
  background: rgb(181, 211, 255);
  .form-box {
    width: 300px;
    height: 300px;
    margin: 200px auto;
    border: 1px solid #f1f1f1;
    padding: 20px 100px 10px;
    box-shadow: 1px 1px 20px #ccc;
    background-color: #fff;
    border-radius: 10px;
  }
  .form-box h1 {
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
