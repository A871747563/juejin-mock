<template>
  <div id="Layout">
    <n-dialog-provider>
      <n-notification-provider>
        <Header />
      </n-notification-provider>
    </n-dialog-provider>
    <n-message-provider>
      <n-notification-provider>
        <Main />
      </n-notification-provider>
    </n-message-provider>
    <ToTopBtn />
    <!-- 遮罩层 -->
    <div v-if="$store.state.maskingStatus" class="masking">
      <div class="text">
        <n-spin size="medium" />
        <span>页面加载中Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Main from './components/main.vue'
import ToTopBtn from 'components/toTopBtn.vue'
export default {
  components: {
    Header,
    Main,
    ToTopBtn
  }
}
</script>

<style scoped lang="scss">
#Layout {
  min-width: 100%;
  min-height: 100vh;
  background: #f4f5f5;
  overflow: hidden;
}
.masking {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    user-select: none;
    > span {
      margin-left: 15px;
    }
  }
}
</style>
