import { createRouter, createWebHashHistory } from 'vue-router'

import { defaultRoute } from './routes/default.js'
import useConfig from './config/index.js'
// 路由表
const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoute
})
// 执行配置
useConfig(router)
export default router
