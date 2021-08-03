import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useNotification } from 'naive-ui'
import { useRouter } from 'vue-router'
import { TickEvent } from 'utils/hooks.js'

export function stateInit() {
  const store = useStore()
  const router = useRouter()
  const notification = useNotification()
  // 沸点数据包
  const items = ref([])
  store.commit('changeToStatus', false)
  // 一些变量
  const text = ref('')
  const textStatus = computed(() => {
    return !text.value
  })
  // 自定义事件
  const activeKey = ref('tuijian')
  const menuOptions = [
    {
      label: '推荐',
      key: 'tuijian'
    },
    {
      label: '热门',
      key: 'remen'
    },
    {
      label: '关注',
      key: 'guanzhu'
    },
    {
      label: '上班摸鱼',
      key: 'shangban'
    },
    {
      label: '树洞一下',
      key: 'shudong'
    },
    {
      label: '内推招聘',
      key: 'neibutuijian'
    },
    {
      label: '今天学到了',
      key: 'jintianxuedaole'
    },
    {
      label: '一图胜千言',
      key: 'tutu'
    },
    {
      label: '每日算法题',
      key: 'suanfa'
    },
    {
      label: '开发工具...',
      key: 'kaifagongju'
    },
    {
      label: '更多话题+',
      key: 'theme'
    }
  ]
  // nextTick
  TickEvent(store, notification)
  return {
    router,
    items,
    textStatus,
    activeKey,
    menuOptions,
    text,
    notification
  }
}
