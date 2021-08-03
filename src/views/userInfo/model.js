import { useStore } from 'vuex'
import { TickEvent } from 'utils/hooks.js'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNotification } from 'naive-ui'
export function stateInit() {
  const store = useStore()
  const router = useRouter()
  const notification = useNotification()
  store.commit('changeToStatus', false)
  // 伪无限数据相关(16个初始数据)
  const Nums = ref([{}, {}, {}, {}, {}, {}])
  const rollingheight = () => {
    // scrollTop 滚动条滚动时，距离顶部的距离(被卷去的高度，我们看不见的那块)
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // windowHeight 可视区的高度(我们眼前的这块)
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    // scrollHeight 滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    // 滚动条到底部的条件
    if (scrollTop + windowHeight >= scrollHeight - 1) {
      Nums.value.push({}, {}, {}) // 每次滚动到底部增加3个
    }
  }
  // dom 挂载完毕
  onMounted(() => {
    window.addEventListener('scroll', rollingheight, true)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', rollingheight) //  离开页面清除（移除）滚轮滚动事件
  })
  // nextTick
  TickEvent(store, notification)
  return {
    Nums,
    router,
    notification
  }
}
