// 登录mock
export default [
  {
    url: '/api/getRoleById',
    method: 'post',
    response: (res) => {
      if (res.body.username === 'admin' && res.body.password === '123456') {
        return {
          code: 200,
          message: 'ok',
          data: {
            status: 'success',
            token: '17612a846b70a6d37978e3d85a3cf94efd9682e0',
            userId: 100,
            username: 'admin',
            password: '123456',
            role: 5
          }
        }
      } else {
        return {
          code: 200,
          message: 'ok',
          data: {
            status: 'reject'
          }
        }
      }
    }
  }
]
