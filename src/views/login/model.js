import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

export function stateInit() {
  const message = useMessage()
  const router = useRouter()
  const formRef = ref(null)
  const rPasswordFormItemRef = ref(null)
  const logining = ref(false)
  const modelRef = ref({
    username: 'admin',
    password: '123456',
    reenteredPassword: '123456'
  })
  // 输入重复密码时校验是否和初始密码前缀相等
  const validatePasswordStartWith = (rule, value) => {
    return (
      modelRef.value.password &&
      modelRef.value.password.startsWith(value) &&
      modelRef.value.password.length >= value.length
    )
  }
  // 比较两个密码是否相等
  const validatePasswordSame = (rule, value) => {
    return value === modelRef.value.password
  }
  // 表单校验规则
  const rules = ref({
    username: [
      {
        required: true,
        message: '请输入用户名'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码'
      }
    ],
    reenteredPassword: [
      {
        required: true,
        message: '请再次输入密码',
        trigger: ['input', 'blur']
      },
      {
        validator: validatePasswordStartWith,
        message: '两次密码输入不一致',
        trigger: 'input'
      },
      {
        validator: validatePasswordSame,
        message: '两次密码输入不一致',
        trigger: ['blur', 'password-input']
      }
    ]
  })

  return {
    message,
    router,
    modelRef,
    formRef,
    rPasswordFormItemRef,
    logining,
    rules
  }
}
