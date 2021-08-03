import { TickEvent } from 'utils/hooks.js'
import { useStore } from 'vuex'
import { h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import { BagHandle } from '@vicons/ionicons5'
import { useNotification } from 'naive-ui'
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export function stateInit() {
  const store = useStore()
  const notification = useNotification()
  const items = ref([])
  store.commit('changeToStatus', true)
  store.commit('changeHeaderMenuOptions1', [
    {
      label: '全部活动',
      key: 'default'
    },
    {
      label: '北京',
      key: 'b'
    },
    {
      label: '上海',
      key: 'v'
    },
    {
      label: '广州',
      key: 'd'
    },
    {
      label: '深圳',
      key: 'e'
    },
    {
      label: '杭州',
      key: 'f'
    },
    {
      label: '其他',
      key: 'g',
      children: [
        {
          label: '长沙',
          key: 'h'
        },
        {
          label: '成都',
          key: 'i'
        },
        {
          label: '重庆',
          key: 'j'
        },
        {
          label: '福州',
          key: 'k'
        },
        {
          label: '海外',
          key: 'l'
        },
        {
          label: '合肥',
          key: 'm'
        },
        {
          label: '南京',
          key: 'n'
        },
        {
          label: '青岛',
          key: 'o'
        },
        {
          label: '全国',
          key: 'p'
        },
        {
          label: '不限',
          key: 'q'
        }
      ]
    }
  ])
  store.commit('changeHeaderMenuOptions2', [
    {
      label: '活动合作',
      icon: renderIcon(BagHandle),
      key: 'activity',
      href: 'https://wj.toutiao.com/q/72279/9f30x52Q/46a2/#/'
    }
  ])
  // nextTick
  TickEvent(store, notification)
  return {
    notification,
    items
  }
}
