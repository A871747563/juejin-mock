import { getLStorage, getCookie } from 'utils/webDatabase.js'

export default function useConfig(router) {
  // 前路由钩子
  router.beforeEach((to, from, next) => {
    // 验证通过条件
    // 1. 有cookie
    // 2. 有用户id
    // 3. 有用户名
    // 否则重定向回login
    const token = getLStorage('token')
    const userId = getCookie('userId')
    const username = getCookie('username')
    if (token && userId && username) {
      next()
    } else if (to.path === '/login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  })

  // 后路由钩子
  router.afterEach((to, from) => {
    // 保证路由跳转一直在顶部---------------------------
    const bodySrcollTop = document.body.scrollTop
    if (bodySrcollTop !== 0) {
      document.body.scrollTop = 0
      return
    }
    const docSrcollTop = document.documentElement.scrollTop
    if (docSrcollTop !== 0) {
      document.documentElement.scrollTop = 0
    }
  })
}
