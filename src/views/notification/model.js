import { useStore } from 'vuex'
export function stateInit() {
  const store = useStore()
  store.commit('changeToStatus', true)
  store.commit('changeHeaderMenuOptions1', [
    {
      label: '评论消息',
      key: 'Comment'
    },
    {
      label: '点赞消息',
      key: 'Like'
    },
    {
      label: '关注消息',
      key: 'Attention'
    },
    {
      label: '系统消息',
      key: 'System'
    },
    {
      label: '职位沟通',
      key: 'Position'
    }
  ])
  store.commit('changeHeaderMenuOptions2', [])
}
