import { useStore } from 'vuex'
import { TickEvent } from 'utils/hooks.js'
import { ref, onMounted, onUnmounted } from 'vue'
import { useNotification } from 'naive-ui'
export function stateInit() {
  // 使用vuex
  const store = useStore()
  store.commit('changeToStatus', true)
  store.commit('changeHeaderMenuOptions1', [
    {
      label: '已关注标签',
      key: 'a'
    },
    {
      label: '全部标签',
      key: 'default'
    }
  ])
  store.commit('changeHeaderMenuOptions2', [])
  // store.commit('changeActiveKey1', 'default')
  const notification = useNotification()
  const items = ref([])
  const inputValue = ref('')
  // 初始化数据 16个
  for (let i = 0; i < 4; i++) {
    items.value.push(
      {
        title: 'Vue.js',
        imgURL: 'https://i.loli.net/2021/07/30/Z5LHBarPAkjFDNh.png',
        meta01: '312672 关注',
        meta02: '28943 文章'
      },
      {
        title: 'Naive UI',
        imgURL: 'https://i.loli.net/2021/07/30/Sy1CoY7lN4xbG85.png',
        meta01: '32512 关注',
        meta02: '2892 文章'
      },
      {
        title: 'Vite',
        imgURL: 'https://i.loli.net/2021/07/30/HRVGZKNxDUQBypX.png',
        meta01: '912512 关注',
        meta02: '25451 文章'
      },
      {
        title: 'Axios',
        imgURL: 'https://i.loli.net/2021/07/30/oMFXrhL4PbkY3TR.png',
        meta01: '65125 关注',
        meta02: '5451 文章'
      }
    )
  }
  // 监听事件函数
  const rollingheight = () => {
    // scrollTop 滚动条滚动时，距离顶部的距离(被卷去的高度，我们看不见的那块)
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // windowHeight 可视区的高度(我们眼前的这块)
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    // scrollHeight 滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    // 滚动条到底部的条件
    if (scrollTop + windowHeight >= scrollHeight - 1) {
      items.value.push(
        {
          title: 'Vue.js',
          imgURL: 'https://i.loli.net/2021/07/30/Z5LHBarPAkjFDNh.png',
          meta01: '312672 关注',
          meta02: '28943 文章'
        },
        {
          title: 'Naive UI',
          imgURL: 'https://i.loli.net/2021/07/30/Sy1CoY7lN4xbG85.png',
          meta01: '32512 关注',
          meta02: '2892 文章'
        },
        {
          title: 'Vite',
          imgURL: 'https://i.loli.net/2021/07/30/HRVGZKNxDUQBypX.png',
          meta01: '912512 关注',
          meta02: '25451 文章'
        },
        {
          title: 'Axios',
          imgURL: 'https://i.loli.net/2021/07/30/oMFXrhL4PbkY3TR.png',
          meta01: '65125 关注',
          meta02: '5451 文章'
        }
      ) // 每次滚动到底部增加4个
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
    items,
    inputValue,
    notification
  }
}
