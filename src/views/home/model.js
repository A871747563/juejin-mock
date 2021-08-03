import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { TickEvent } from 'utils/hooks.js'
import { useNotification } from 'naive-ui'
export function stateInit() {
  // 使用vuex
  const store = useStore()
  const router = useRouter()
  const notification = useNotification()
  store.commit('changeToStatus', true)
  store.commit('changeHeaderMenuOptions1', [
    {
      label: '推荐',
      key: 'Recommend'
    },
    {
      label: '关注',
      key: 'HomeAttention'
    },
    {
      label: '后端',
      key: 'Behind'
    },
    {
      label: '前端',
      key: 'Front'
    },
    {
      label: 'Android',
      key: 'Android'
    },
    {
      label: 'iOS',
      key: 'IOS'
    },
    {
      label: '人工智能',
      key: 'Intelligence'
    },
    {
      label: '开发工具',
      key: 'Development'
    },
    {
      label: '代码人生',
      key: 'Coding'
    },
    {
      label: '阅读',
      key: 'Read'
    }
  ])
  store.commit('changeHeaderMenuOptions2', [
    {
      label: '标签管理',
      key: 'tags'
    }
  ])
  // nextTick
  TickEvent(store, notification)
  return {
    router,
    notification
  }
}
