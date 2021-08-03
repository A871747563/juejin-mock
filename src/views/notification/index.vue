<template>
  <div id="Notification">
    <div class="empty">
      <img src="@/assets/images/notify.png" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { stateInit } from './model.js'
export default {
  setup() {
    // 数据初始化
    stateInit()
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/notification.scss';
</style>
