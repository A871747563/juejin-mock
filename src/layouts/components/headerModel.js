import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useNotification, useMessage } from 'naive-ui'
import { ref, h, computed, onMounted } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PencilOutline,
  DocumentTextOutline,
  Accessibility,
  ThumbsUp,
  Book,
  Star,
  CheckmarkDoneCircle,
  PricetagSharp,
  FastFoodSharp,
  Settings,
  HelpCircle,
  ExitOutline
} from '@vicons/ionicons5'

export function stateInit() {
  const notification = useNotification()
  const message = useMessage()
  // 使用router
  const router = useRouter()
  const route = useRoute()
  // 使用vuex
  const store = useStore()
  // 头部隐藏控制
  const headTop = ref(false)

  const placeholder = ref('探索掘金')
  // 头像下拉框配置
  const options = ref([
    {
      label: '写文章',
      key: 'a',
      icon: renderIcon(PencilOutline)
    },
    {
      label: '草稿箱',
      key: 'b',
      icon: renderIcon(DocumentTextOutline)
    },
    {
      label: '我的主页',
      key: 'userInfo',
      icon: renderIcon(Accessibility)
    },
    {
      label: '我赞过的',
      key: 'd',
      icon: renderIcon(ThumbsUp)
    },
    {
      label: '我的小册',
      key: 'e',
      icon: renderIcon(Book)
    },
    {
      label: '我的收藏',
      key: 'f',
      icon: renderIcon(Star)
    },
    {
      label: '签到赢好礼',
      key: 'g',
      icon: renderIcon(CheckmarkDoneCircle)
    },
    {
      label: '标签管理',
      key: 'h',
      icon: renderIcon(PricetagSharp)
    },
    {
      label: '字学',
      key: 'i',
      icon: renderIcon(FastFoodSharp)
    },
    {
      label: '设置',
      key: 'j',
      icon: renderIcon(Settings)
    },
    {
      label: '关于',
      key: 'k',
      icon: renderIcon(HelpCircle),
      children: [
        {
          label: '下载应用',
          key: 'narrator'
        },
        {
          label: '翻译计划',
          key: 'sheep-man'
        }
      ]
    },
    {
      label: '退出',
      key: 'exit',
      icon: renderIcon(ExitOutline)
    }
  ])
  // 顶部输入框控制
  const actived = ref(false)
  // 顶部菜单设置
  const menuOptions1 = ref([
    {
      label: '首页',
      key: 'Home'
    },
    {
      label: '沸点',
      key: 'BoilingPoint'
    },
    {
      label: '资讯',
      key: 'News'
    },
    {
      label: '小册',
      key: 'Booklet'
    },
    {
      label: '活动',
      key: 'Activity'
    }
  ])
  const rollingheight = () => {
    headTop.value = window.pageYOffset > 430
  }
  // computed 数据--------------------------------------------------------------------
  // 顶部二级菜单获取
  const menuOptions2 = computed(() => {
    return store.state.HeaderMenuOptions1
  })
  const menuOptions3 = computed(() => {
    return store.state.HeaderMenuOptions2
  })
  // 顶部一级菜单活跃值
  const activeKey = computed(() => {
    var UrlArr = route.path.split('/')
    let str
    if (UrlArr.length > 2) {
      UrlArr.pop()
      str = UrlArr.pop()
      str = str.replace(str[0], str[0].toUpperCase())
      return str
    } else {
      str = UrlArr.pop()
      str = str.replace(str[0], str[0].toUpperCase())
      return str
    }
  })
  // 顶部二级菜单活跃值(左)
  const activeKey1 = computed(() => {
    var UrlArr = route.path.split('/')
    let str
    if (UrlArr.length > 2) {
      str = UrlArr.pop()
      str = str.replace(str[0], str[0].toUpperCase())
      return str
    } else {
      return 'default'
    }
  })
  // dom挂载生命周期
  onMounted(() => {
    window.addEventListener('scroll', rollingheight, true)
  })
  return {
    notification,
    message,
    router,
    store,
    headTop,
    placeholder,
    options,
    actived,
    menuOptions1,
    menuOptions2,
    menuOptions3,
    activeKey,
    activeKey1
  }
}
// 模块内部函数--------------------------------------------------------------

const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}
