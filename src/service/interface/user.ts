// 引入封装好的fetch方法

import ajax from '../http'

// 用户登录接口api
export const userLogin = (params: any) => ajax.post('/login', params)

// 获取手机验证码
export const getSmsCode = (params: { mobile: string }) =>
    ajax.get('/getCode', params)

// 重制密码验证手机号
export const checkedCode = (params: { smCode: string }) =>
    ajax.get('/checkSmCode', params)

//重置密码
export const resetPassword = (params: { newPassword: string }) =>
    ajax.post('/resetPassword', params)
