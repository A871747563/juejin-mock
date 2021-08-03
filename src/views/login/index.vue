<template>
  <div id="Login">
    <div class="LoginBox">
      <div class="LoginForm">
        <div class="logo">
          <div class="img">
            <img src="@/assets/images/Login.png" />
          </div>
        </div>
        <n-form
          ref="formRef"
          :model="model"
          :rules="rules"
          label-placement="left"
          :show-require-mark="false"
          size="medium"
          label-width="70"
          label-align="left"
        >
          <n-form-item path="username" label="用户名">
            <n-input v-model:value="model.username" placeholder="请输入用户名" @keydown.enter.prevent />
          </n-form-item>
          <n-form-item path="password" label="密码">
            <n-input
              v-model:value="model.password"
              type="password"
              placeholder="请输入密码"
              @input="handlePasswordInput"
              @keydown.enter.prevent
            />
          </n-form-item>
          <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" label="确认密码">
            <n-input
              v-model:value="model.reenteredPassword"
              :disabled="!model.password"
              type="password"
              placeholder="请输入确认密码"
              @keydown.enter.prevent
            />
          </n-form-item>
        </n-form>
        <n-button type="success" :disabled="logining" @click="handleValidateButtonClick">登录</n-button>
      </div>
    </div>
    <div id="ParticlesBack">
      <Particles id="tsparticles" :options="options" />
    </div>
  </div>
</template>

<script>
import { reqLogin } from 'api/login.js'
import { setLStorage, setCookie } from 'utils/webDatabase.js'
import { translatUnicode } from 'utils/encrypt.js'
import { options } from 'api/tsparticlesOP.js'
import { stateInit } from './model.js'
export default {
  setup() {
    // 数据初始化
    const { message, router, formRef, rPasswordFormItemRef, logining, rules, modelRef } = stateInit()
    // 重复密码有值，初始密码输入时进行校验
    const handlePasswordInput = () => {
      if (modelRef.value.reenteredPassword) {
        // 调用校验规则函数
        // 单独item校验
        rPasswordFormItemRef.value.validate({ trigger: 'password-input' }).then(
          (res) => {
            res
          },
          (err) => {
            err
          }
        )
      }
    }
    // 点击登录表单校验
    const handleValidateButtonClick = () => {
      formRef.value.validate((errors) => {
        if (!errors) {
          logining.value = true
          reqLogin(modelRef.value)
            .then((res) => {
              if (res && res.data.status === 'success' && res.data.token) {
                setLStorage('token', res.data.token)
                setCookie('userId', res.data.userId)
                setCookie('username', res.data.username)
                setCookie('password', translatUnicode(res.data.password))
                setCookie('role', res.data.role)
                message.loading('登录成功，正在跳转，请稍后...', {
                  duration: 2000,
                  onLeave: () => {
                    router.push({
                      name: 'Recommend'
                    })
                  }
                })
              } else {
                // 捕获请求数据错误
                logining.value = false
                message.error('登录失败，请检查用户名和密码是否正确')
              }
            })
            .catch((err) => {
              // 部分请求错误
              console.log(err)
              message.error('请求出错了')
              logining.value = false
            })
        } else {
          message.error('表单错误')
        }
      })
    }

    return {
      logining,
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput,
      handleValidateButtonClick,
      options
    }
  }
}
</script>

<style scoped lang="scss">
@import 'styles/views/login.scss';
</style>
