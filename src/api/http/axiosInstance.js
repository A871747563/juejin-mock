// http/index.js
import axios from 'axios'
import { getLStorage } from 'utils/webDatabase.js'
// 头部请求进度条相关
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ ease: 'ease', speed: 2000 }) // 调整动画设置
NProgress.configure({ minimum: 0.5 }) // 设置最低百分比

// 创建axios的一个实例
var instance = axios.create({
  timeout: 3000, // 设置超时
  headers: {
    'Content-Type': 'application/json;charset=UTF-8;'
  }
})

// 请求拦截器-----------------------------------------------
instance.interceptors.request.use(
  (config) => {
    const token = getLStorage('token')
    token && (config.headers.Authorization = token)
    // 若请求方式为post，则将data参数转为JSON字符串
    if (config.method === 'POST') {
      config.data = JSON.stringify(config.data)
    }
    NProgress.start() // 进度条开始
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器------------------------------------------------
instance.interceptors.response.use(
  (response) => {
    // 进度条结束
    NProgress.done()
    // 响应成功
    return response.data
  },
  (error) => {
    // 进度条结束
    NProgress.done()
    // 响应错误(当服务器有响应并且有状态码时进行判断)
    if (error.response && error.response.status) {
      const status = error.response.status
      let message = ''
      switch (status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          message = '请求错误'
          break
        case 404:
          message = '请求地址出错'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误!'
          break
        case 501:
          message = '服务未实现!'
          break
        case 502:
          message = '网关错误!'
          break
        case 503:
          message = '服务不可用!'
          break
        case 504:
          message = '网关超时!'
          break
        case 505:
          message = 'HTTP版本不受支持'
          break
        default:
          message = '请求失败'
      }
      if (message) {
        return Promise.reject(message)
      } else {
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export default instance