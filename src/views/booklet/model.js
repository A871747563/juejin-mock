import { useStore } from 'vuex'
import { TickEvent } from 'utils/hooks.js'
import { ref } from 'vue'
import { useNotification, useMessage } from 'naive-ui'
export function stateInit() {
  // 使用vuex
  const store = useStore()
  const notification = useNotification()
  store.commit('changeToStatus', true)
  store.commit('changeHeaderMenuOptions1', [
    {
      label: '全部',
      key: 'default'
    },
    {
      label: '后端',
      key: 'a'
    },
    {
      label: '前端',
      key: 'b'
    },
    {
      label: 'Android',
      key: 'c'
    },
    {
      label: 'iOS',
      key: 'd'
    },
    {
      label: '人工智能',
      key: 'e'
    },
    {
      label: '开发工具',
      key: 'f'
    },
    {
      label: '代码人生',
      key: 'g'
    },
    {
      label: '阅读',
      key: 'h'
    }
  ])
  store.commit('changeHeaderMenuOptions2', [])
  // 页面数控
  const items = ref([])
  const currentPage = ref(1)
  const itemCount = ref(100)
  const pageSize = ref([10])
  const message = useMessage()
  // nextTick
  TickEvent(store, notification)
  return {
    items,
    currentPage,
    itemCount,
    pageSize,
    message,
    notification
  }
}
