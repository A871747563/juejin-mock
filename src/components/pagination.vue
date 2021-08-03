<template>
  <div id="Pagination">
    <n-pagination
      :item-count="itemCount"
      :on-update:page="handleCurrentChange"
      :page-sizes="limit"
      :page-slot="7"
      :page="currentPage"
    >
      <template #suffix>共 {{ itemCount }} 条数据</template>
    </n-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 当前页
    currentPage: {
      type: Number,
      default: 1
    },
    // 数据总数
    itemCount: {
      type: Number,
      default: 100
    },
    // 每页条数
    limit: {
      type: Array,
      default() {
        return ['10']
      }
    }
  },
  emits: ['updatePage', 'update:currentPage'],
  data() {
    return {}
  },
  // 组件内计算属性做拦截，达到双向绑定的效果
  computed: {},
  methods: {
    handleCurrentChange(val) {
      this.$emit('update:currentPage', val)
      this.$emit('updatePage', { currentPage: val })
    }
  }
}
</script>

<style scoped lang="scss"></style>
