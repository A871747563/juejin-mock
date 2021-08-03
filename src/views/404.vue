<template>
  <div id="page404">
    <img src="@/assets/images/404page.png" />
    <n-button type="success" ghost @click="buttonEvent">回到首页</n-button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
store.commit('changeToStatus', false)
const buttonEvent = () => {
  router.push({ name: 'Home' })
}
</script>

<style lang="scss" scoped>
#page404 {
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}
</style>
