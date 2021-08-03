import { createStore } from 'vuex'

export default createStore({
  state: {
    topStatus: true, // 控制顶部二级菜单块显示状态
    maskingStatus: false, // 控制遮罩层显示与否
    HeaderMenuOptions1: [], // 头下左
    HeaderMenuOptions2: [] // 头下右
  },
  mutations: {
    changeToStatus(state, newValue) {
      state.topStatus = newValue
    },
    changeHeaderMenuOptions1(state, newValue) {
      state.HeaderMenuOptions1 = newValue
    },
    changeHeaderMenuOptions2(state, newValue) {
      state.HeaderMenuOptions2 = newValue
    },
    changeMaskingStatus(state, newValue) {
      state.maskingStatus = newValue
    }
  },
  action: {},
  computed: {},
  module: {}
})
