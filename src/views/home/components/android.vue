<template>
  <div>
    <itemList :text="['热门', '最新', '热榜']" />
  </div>
</template>

<script>
import itemList from 'components/itemList.vue'
export default {
  components: {
    itemList
  },
  data() {
    return {}
  }
}
</script>

<style></style>
