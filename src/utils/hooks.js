import { nextTick } from 'vue'
import { ready } from 'utils/imgJudge.js'

export function TickEvent(store, notification) {
  nextTick(() => {
    // 图片请求等待器
    const imgArr = document.getElementsByTagName('img')
    if (imgArr.length > 0) {
      store.commit('changeMaskingStatus', true)
      document.documentElement.style.overflow = 'hidden'
      ready(imgArr)
        .then(() => {
          notification.success({
            title: '通知',
            content: '图片装载完成~',
            duration: 1000
          })
          store.commit('changeMaskingStatus', false)
          document.documentElement.style.overflowY = 'auto'
        })
        .catch((e) => {
          console.log(e)
        })
    }
  })
}
