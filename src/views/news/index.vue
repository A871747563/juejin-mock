<template>
  <div id="News">
    <div class="timeline-content">
      <div class="timeline-entry-list">
        <itemList :text="['最新', '热榜']" :data="message" />
      </div>
      <div class="index-aside">
        <div class="wrapper">
          <div class="header">
            <span>资讯投递</span>
            <n-button type="success" @click="buttonEvent">立即投递</n-button>
          </div>
          <div class="desc">欢迎投递行业动态、软件更新、编程语言相关资讯线索。</div>
        </div>
        <div class="app-link" @click="linkEvent">
          <img src="@/assets/images/scan.png" class="qr-img" />
          <div class="content-box">
            <div class="headline">关注掘金资讯公众号</div>
            <div class="desc">掌握全球前沿技术动态</div>
          </div>
        </div>
        <div class="link-list">
          <div @click="linkEvent01">
            <img src="@/assets/images/Home01.png" alt="" />
            <p>掘金社区漫游指南</p>
          </div>
          <div @click="linkEvent02">
            <img src="@/assets/images/Home02.png" alt="" />
            <p>下载掘金浏览器插件</p>
          </div>
          <div @click="linkEvent03">
            <img src="@/assets/images/Home03.png" alt="" />
            <p>前往掘金翻译计划</p>
          </div>
        </div>
      </div>
    </div>
    <n-modal
      v-model:show="showModal"
      preset="dialog"
      positive-text="确认"
      negative-text="取消"
      @positive-click="submitCallback"
      @negative-click="cancelCallback"
      @close="closeCallback"
    >
      <n-card title="资讯投递" :bordered="false" size="huge" class="newsModal">
        <div class="body">
          <div class="desc1">
            欢迎投递符合以下标准的资讯链接：
            <br />
            科技行业热门话题；科技企业最新动态；编程语言、开源项目、垂直领域产品技术更新
          </div>
          <n-form ref="formRef" :model="modelRef" :rules="rules">
            <n-form-item label="资讯链接网址" path="link">
              <div class="desc2">您投递的链接将作为资讯采编素材，不会直接出现在资讯页</div>
              <n-input v-model:value="modelRef.link" placeholder="请输入要投递的资讯链接" @keydown.enter.prevent />
            </n-form-item>
            <n-form-item path="reason" label="投递理由">
              <n-input
                v-model:value="modelRef.reason"
                type="textarea"
                :autosize="{
                  minRows: 3,
                  maxRows: 3
                }"
                placeholder="请简述投递该资讯的理由，最多150字符"
                @keydown.enter.prevent
              />
            </n-form-item>
          </n-form>
        </div>
      </n-card>
    </n-modal>
  </div>
</template>

<script>
import itemList from 'components/itemList.vue'
import { stateInit } from './model.js'
export default {
  components: {
    itemList
  },
  setup() {
    // 数据初始化
    const { notification, formRef, modelRef, rules, showModal, message } = stateInit()
    // 一些自定义事件
    const linkEvent = () => {
      window.open('https://juejin.cn/app', '_blank')
    }
    const linkEvent01 = () => {
      window.open('https://juejin.cn/book/6844733795329900551', '_blank')
    }
    const linkEvent02 = () => {
      window.open('https://juejin.cn/extension', '_blank')
    }
    const linkEvent03 = () => {
      window.open('https://github.com/xitu/gold-miner', '_blank')
    }

    const buttonEvent = () => {
      showModal.value = true
    }
    // 提交表单
    const submitCallback = () => {
      return new Promise((resolve, reject) => {
        formRef.value.validate((errors) => {
          if (!errors) {
            notification.success({
              title: '通知',
              content: '提交成功~',
              duration: 1000
            })
            modelRef.value = {
              link: null,
              reason: null
            }
            resolve()
          } else {
            notification.warning({
              title: '通知',
              content: '表单出错啦！',
              duration: 1000
            })
            reject()
          }
        })
      })
    }
    // 取消提交
    const cancelCallback = () => {
      notification.info({
        title: '通知',
        content: '取消了~',
        duration: 1000
      })
      modelRef.value = {
        link: null,
        reason: null
      }
      return true
    }
    // 关闭模态框
    const closeCallback = () => {
      notification.info({
        title: '通知',
        content: '关闭了~',
        duration: 1000
      })
      modelRef.value = {
        link: null,
        reason: null
      }
      return true
    }

    return {
      linkEvent,
      linkEvent01,
      linkEvent02,
      linkEvent03,
      showModal,
      buttonEvent,
      formRef,
      modelRef,
      rules,
      submitCallback,
      cancelCallback,
      closeCallback,
      message
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'styles/views/news.scss';
</style>
