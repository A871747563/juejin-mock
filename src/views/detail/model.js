import { useStore } from 'vuex'
import { TickEvent } from 'utils/hooks.js'
import { ref } from 'vue'
import { useNotification } from 'naive-ui'
import { useRouter } from 'vue-router'

export function stateInit() {
  const store = useStore()
  const router = useRouter()
  store.commit('changeToStatus', false)
  // 一些自定义触发事件
  const notification = useNotification()
  const message = ref({
    topData: ['前端小智', '1天前', 'JavaScript - Vue.js'],
    title: '5年前，学习 null 和 undefined ，现在有了新的认知，看看这位人才怎么说？',
    description: `许多编程语言都有一个称为null的非值。它指示一个变量当前不指向一个对象，例如，当它还没有初始化的时候。 相比之下，JavaScript有两个这样的非值：undefined和null。`
  })
  // nextTick
  TickEvent(store, notification)
  return {
    router,
    notification,
    message
  }
}
