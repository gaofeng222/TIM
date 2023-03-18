import TIM from 'tim-js-sdk'
// 发送图片、文件等消息需要的上传插件
import TIMUploadPlugin from 'tim-upload-plugin'

import { SDKAPPID, EXPIRETIME, SECRETKEY } from '@/config'
let options = {
  SDKAppID: SDKAPPID // 接入时需要将0替换为您的即时通信应用的 SDKAppID
}
let tim = TIM.create(options) // SDK 实例通常用 tim 表示

tim.setLogLevel(1) // 普通级别，日志量较多，接入时建议使用

// 注册腾讯云即时通信 IM 上传插件，即时通信 IM SDK 发送图片、语音、视频、文件等消息需要使用上传插件，将文件上传到腾讯云对象存储
tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })

export { tim }
