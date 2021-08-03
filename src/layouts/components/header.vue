<template>
  <div id="Header" :class="headTop ? 'actived' : ''">
    <div class="header1">
      <div class="center">
        <img class="img1" src="@/assets/images/logo.png" @click="pushHome" />
        <div class="nav">
          <n-menu :value="activeKey" mode="horizontal" :options="menuOptions1" @update:value="header01Update" />
        </div>
        <a href="https://conf.juejin.cn/xdc2021?utm_source=juejinweb " target="_blank">
          开发者大会
          <span>2021</span>
        </a>
        <div class="input" :class="actived ? 'actived' : ''">
          <n-input :placeholder="placeholder" @focus="inputfoucs" @blur="inputblur">
            <template #suffix>
              <n-icon>
                <search />
              </n-icon>
            </template>
          </n-input>
          <div class="button">
            <n-button type="success" dashed @click="innovationEvent">创作者中心</n-button>
            <n-button type="success" @click="writeEvent">写文章</n-button>
          </div>
        </div>
        <div class="info">
          <n-icon size="30" color="#86909c" @click="pushNotify">
            <alarm />
          </n-icon>
          <n-dropdown trigger="click" :options="options" class="demo" @select="handleSelect">
            <n-avatar circle size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          </n-dropdown>
        </div>
      </div>
    </div>
    <div v-if="$store.state.topStatus" class="header2">
      <div class="center">
        <div class="left">
          <n-menu
            :value="activeKey1"
            mode="horizontal"
            :options="menuOptions2"
            :expand-icon="expandIcon"
            @update:value="header02Update"
          />
        </div>
        <div class="right">
          <n-menu
            :value="null"
            mode="horizontal"
            :options="menuOptions3"
            :render-label="renderMenuLabel"
            @update:value="header03Update"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue'
import { Alarm, Search } from '@vicons/ionicons5'
import { DeleteLStorageAll, delAllCookie } from 'utils/webDatabase.js'
import { CaretDownOutline } from '@vicons/ionicons5'
import { stateInit } from './headerModel.js'
import { NIcon } from 'naive-ui'
export default {
  components: {
    Alarm,
    Search
  },
  setup() {
    const {
      notification,
      message,
      router,
      store,
      headTop,
      placeholder,
      options,
      actived,
      menuOptions1,
      menuOptions2,
      menuOptions3,
      activeKey,
      activeKey1
    } = stateInit()

    // 只存放方法-------------------------
    const inputfoucs = () => {
      actived.value = true
      placeholder.value = '搜索文章/小册/标签/用户'
    }
    const inputblur = () => {
      actived.value = false
      placeholder.value = '探索掘金'
    }
    // 路由跳转函数
    const pushNotify = () => {
      router.push({ name: 'Comment' })
    }
    const pushHome = () => {
      router.push({ name: 'Recommend' })
    }
    const header01Update = (key, item) => {
      router.push({ name: item.key })
    }
    const header02Update = (key, item) => {
      if (item.key.length > 1) {
        router.push({ name: item.key })
      } else {
        notification.info({
          title: '通知',
          content: '功能待开发~',
          duration: 1000
        })
      }
    }
    const header03Update = (key) => {
      if (key === 'tags') {
        router.push({ name: 'Subscribe' })
      }
    }
    //  路由外部链接跳转辅助渲染函数
    const renderMenuLabel = (option) => {
      if ('href' in option) {
        return h('a', { href: option.href, target: '_blank' }, option.label)
      }
      return option.label
    }
    // 尾icon辅助渲染函数
    const expandIcon = () => {
      return h(NIcon, null, { default: () => h(CaretDownOutline) })
    }
    // naive ui
    const handleSelect = (key) => {
      if (key === 'userInfo') {
        router.push({
          name: 'UserInfo'
        })
      } else if (key === 'exit') {
        // 删除浏览器数据
        DeleteLStorageAll()
        delAllCookie()
        store.commit('changeMaskingStatus', true)
        message.loading('正在退出，请稍后...', {
          duration: 2000,
          onLeave: () => {
            router.push({
              name: 'Login'
            })
            store.commit('changeMaskingStatus', false)
          }
        })
      } else {
        notification.info({
          title: '通知',
          content: '功能待开发~',
          duration: 1000
        })
      }
    }
    // 按钮事件
    const writeEvent = () => {
      notification.success({
        title: '通知',
        content: '作业写完了~',
        duration: 1000
      })
    }
    const innovationEvent = () => {
      notification.success({
        title: '通知',
        content: '我是创作者中心噢~',
        duration: 1000
      })
    }
    return {
      headTop,
      activeKey,
      activeKey1,
      menuOptions1,
      menuOptions2,
      menuOptions3,
      inputfoucs,
      inputblur,
      actived,
      placeholder,
      header01Update,
      header02Update,
      header03Update,
      pushNotify,
      pushHome,
      renderMenuLabel,
      options,
      handleSelect,
      expandIcon,
      writeEvent,
      innovationEvent
    }
  }
}
</script>

<style scoped lang="scss">
#Header {
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: all 0.2s linear;
}
#Header.actived {
  transform: translate3d(0, -60px, 0);
  transition: all 0.2s linear;
}
.header1 {
  height: 60px;
  width: 100%;
  min-width: 1200px;
  background: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  .center {
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    // border: 1px solid black;
    .img1 {
      height: 55px;
      cursor: pointer;
    }
    .nav {
      ::v-deep(.n-menu-item-content) {
        font-size: 1.6rem;
        margin: 0 20px !important;
        .n-menu-item-content-header {
          color: #86909c;
          font-weight: 500;
          &:hover {
            color: #18a058;
          }
        }
      }
      ::v-deep(.n-menu-item.n-menu-item--selected) {
        .n-menu-item-content-header {
          color: #18a058 !important;
        }
      }
    }
    > a {
      height: 60px;
      width: 168px;
      padding: 0 20px;
      font-size: 1.6rem;
      line-height: 58px;
      text-align: left;
      font-weight: 1000;
      color: #86909c;
      font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif,
        BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial;
      position: relative;
      &:hover {
        color: #19a059;
      }
      > span {
        color: #19a059;
        font-size: 1rem;
        font-weight: 500;
        position: absolute;
        right: 35px;
        top: -10px;
      }
    }
    .input {
      width: 424px;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 44px;
      overflow: hidden;
      ::v-deep(.n-input) {
        min-width: 160px;
        max-width: 160px;
        height: 31px;
        transition: all 0.3s 0s;
        font-size: 1.3rem;
      }
      &.actived {
        ::v-deep(.n-input) {
          min-width: 420px;
          max-width: 420px;
          transition: all 0.3s 0s;
        }
      }
      .button {
        min-width: 224px;
        display: flex;
        flex-flow: row nowrap;
        ::v-deep(.n-button) {
          flex: none;
          width: 102px;
          height: 31px;
          margin: 14px 12px;
        }
      }
    }
    .info {
      width: 90px;
      height: 100%;
      //   border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .n-icon {
      cursor: pointer;
    }
    .n-avatar {
      cursor: pointer;
    }
  }
}
.header2 {
  height: 45px;
  min-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-bottom: 1px solid #f1f1f1;
  .center {
    width: 1000px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ::v-deep(.n-menu-item-content) {
      font-size: 1.4rem;
      margin: 0 12px !important;
      .n-menu-item-content-header {
        color: #86909c;
        font-weight: 500;
        &:hover {
          color: #18a058;
        }
      }
    }
    ::v-deep(.n-menu-item.n-menu-item--selected) {
      .n-menu-item-content-header {
        color: #18a058 !important;
      }
    }
    .left {
      height: 100%;
      min-width: 200px;
      //   border: 1px solid black;
    }
    .right {
      height: 100%;
      min-width: 200px;
      //   border: 1px solid black;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
