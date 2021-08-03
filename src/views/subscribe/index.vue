<template>
  <div id="Subscribe">
    <div class="list-header">
      <a class="actived">最热</a>
      <a>最新</a>
      <n-input v-model:value="inputValue" type="input" placeholder="搜索标签(Enter)" @keyup.enter="submitEvent" />
    </div>
    <div class="tag-list">
      <div v-for="(item, index) in items" :key="index" class="item">
        <div class="tag">
          <div class="info-box">
            <div class="img">
              <img :src="item.imgURL" />
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="meta-box">
              <span>{{ item.meta01 }}</span>
              <span>{{ item.meta02 }}</span>
            </div>
          </div>
          <div class="action-box">
            <n-button type="success" @click="buttonEvent">已关注</n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stateInit } from './model.js'
export default {
  setup() {
    // 数据初始化
    const { items, inputValue, notification } = stateInit()
    // 点击事件函数
    const buttonEvent = () => {
      notification.success({
        title: '通知',
        content: '已经关注了噢~',
        duration: 1000
      })
    }
    // 键盘事件函数
    const submitEvent = () => {
      notification.success({
        title: '通知',
        content: '搜索成功~',
        duration: 1000
      })
    }

    return {
      items,
      inputValue,
      buttonEvent,
      submitEvent
    }
  }
}
</script>

<style lang="scss" scopde>
@import 'styles/views/subscribe.scss';
</style>
