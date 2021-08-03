<template>
  <div id="ItemList">
    <header class="header">
      <p v-for="(item, i) in text" :key="i">{{ item }}</p>
    </header>
    <div class="essay">
      <!-- 不存在数据时(骨架屏) -->
      <template v-if="!items">
        <div class="skeleton">
          <n-skeleton v-for="i of 6" :key="i" height="100px" width="90%" :sharp="false" />
        </div>
      </template>
      <!-- 存在数据时 -->
      <template v-if="items">
        <div v-for="(item, i) in items" :key="i" class="item" @click="pushDetail">
          <div class="top">
            <p v-for="(itemNext, index) in item.topData" :key="index">
              {{ itemNext }}
            </p>
          </div>
          <div class="bottom">
            <div class="info-box">
              <p href="" class="title">
                {{ item.title }}
              </p>
              <p href="" class="description">{{ item.description }}</p>
            </div>
            <img :src="item.imgUrl" alt="" />
          </div>
        </div>
        <div class="pagination">
          <pagination
            v-model:currentPage="currentPage"
            :item-count="itemCount"
            :limit="pageSize"
            @updatePage="updatePage"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import pagination from 'components/pagination.vue'
import { useMessage } from 'naive-ui'
import { getListItems } from 'api/informations.js'
export default {
  name: 'ItemList',
  components: { pagination },
  props: {
    text: {
      type: Array,
      default() {
        return ['数据一', '数据二', '数据三']
      }
    }
  },
  data() {
    return {
      // 当前页
      currentPage: 1,
      // 数据总数
      itemCount: 100,
      // 每页条数
      pageSize: [10],
      // 伪数据数组（通过图片区别）
      imgArr: [],
      // naive 消息方法
      message: '',
      items: ''
    }
  },

  // 数据创建时
  created() {
    // naive 函数
    this.message = useMessage()
    // 数据初始化
    this.getdatas()
  },
  methods: {
    // 请求获取列表数据（除图片外）
    getdatas() {
      getListItems()
        .then((res) => {
          const data = res.data
          for (const i in data) {
            data[i]['imgUrl'] = `https://api.noome.cn/acgurl/index.php?key=${new Date().getTime()}${i}`
          }
          this.items = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updatePage(val) {
      // 页码改变，更新数据
      this.getdatas()
      // 强制推回顶部
      this.message.success(`翻页成功！当前是第${val.currentPage}页`)
      window.scrollTo(0, 0)
    },

    // 前往文章细节页
    pushDetail() {
      if (this.$route.name === 'Detail') {
        this.message.warning(`只有这篇文章啦/(ㄒoㄒ)/，不需要跳转~`)
      } else {
        this.$router.push({ name: 'Detail' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
#ItemList {
  .header {
    height: 13px;
    padding: 15px 24px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    p:first-child {
      margin-left: 14px;
      color: #18a058;
      &::before {
        content: '';
      }
    }
    p {
      cursor: pointer;
      margin-right: 30px;
      position: relative;
      &::before {
        content: '|';
        font-size: 12px;
        position: absolute;
        left: -15px;
        color: #f1f1f1;
      }
      &:hover {
        color: #18a058;
      }
    }
  }
  .essay {
    width: 100%;
    // 骨架屏
    .skeleton {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      .n-skeleton {
        margin: 10px 0;
      }
    }
    .item {
      height: 120px;
      padding: 12px 20px 0 20px;
      border-bottom: 1px solid #f1f1f1;
      &:hover {
        background: #f1f0f0;
      }
      cursor: pointer;
      .top {
        width: 100%;
        height: 21px;
        // background: violet;
        display: flex;
        align-items: center;
        font-size: 1rem;
        p:first-child {
          color: #4e5969;
          &::before {
            content: '';
          }
        }
        p {
          margin-right: 15px;
          position: relative;
          color: #86909c;
          &::before {
            content: '|';
            color: #f1f1f1;
            font-size: 12px;
            position: absolute;
            left: -8px;
          }
        }
      }
      .bottom {
        height: 90px;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .info-box {
          flex: 1 1 100%;
          height: 100%;
          margin-right: 24px;
          // background: wheat;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-evenly;
          .title {
            font-size: 1.6rem;
            font-weight: 1000;
            color: #1d2129;
            text-align: left;
            line-height: 2.4rem;
            @include textEllipsis(1);
          }
          .description {
            font-size: 1.3rem;
            color: #86909c;
            text-align: left;
            @include textEllipsis(2);
          }
        }
        > img {
          flex: none;
          width: 120px;
          height: 80px;
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
    }
  }
}
</style>
