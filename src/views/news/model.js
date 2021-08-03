import { useStore } from 'vuex'
import { ref } from 'vue'
import { useNotification } from 'naive-ui'
import { TickEvent } from 'utils/hooks.js'
import { nextTick } from 'vue'
export function stateInit() {
  const notification = useNotification()
  // 使用vuex
  const store = useStore()
  store.commit('changeToStatus', true)
  store.commit('changeHeaderMenuOptions1', [
    {
      label: '全部',
      key: 'default'
    },
    {
      label: '行业动态',
      key: 'a'
    },
    {
      label: '软件更新',
      key: 'b'
    },
    {
      label: '编程语言',
      key: 'c'
    }
  ])
  store.commit('changeHeaderMenuOptions2', [])
  // 模态框相关
  const showModal = ref(false)
  // 表单相关
  const formRef = ref(null)
  const modelRef = ref({
    link: null,
    reason: null
  })
  //  表单校验规则
  const rules = ref({
    link: [
      {
        required: true,
        validator(rule, value) {
          const demo = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
          if (!value) {
            return new Error('网址链接不能为空')
          } else if (!demo.test(value)) {
            return new Error('请输入正确的网址')
          }
          return true
        },
        trigger: ['input', 'blur']
      }
    ],
    reason: [
      {
        required: true,
        validator(rule, value) {
          if (!value) {
            return new Error('推荐理由不能为空')
          } else if (value.length > 150) {
            return new Error('最多150字符')
          }
          return true
        },
        trigger: ['input', 'blur']
      }
    ]
  })
  const message = ref({
    topData: ['恋猫de小郭', '9小时前', '2点赞 - 0评论'],
    title: 'Android Studio Arctic Fox 大版本更新，快来了解下吧',
    description: `Android Studio Arctic Fox 是属于大版本更新，其中包含各种新功能和改进，其中主要有：版本号规则变更，支持新的测试模式，更高级的调试跟踪，更方便的导出数据库，支持 Compose`
  })
  // nextTick
  TickEvent(store, notification)
  return {
    notification,
    formRef,
    modelRef,
    rules,
    showModal,
    message
  }
}
