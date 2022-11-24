export const loginRule = {
    userRule: [
        { required: true, message: '账户名不能为空' },
        { max: 16, message: '账户名长度不正确' },
        { min: 4, message: '账户名长度不正确' }
    ],
    passwordRule: [
        { required: true, message: '密码不能为空' },
        { max: 16, message: '密码长度不正确' },
        { min: 4, message: '密码长度不正确' }
    ],
    confirmPasswordRule(form: any) {
        return [
            {
                validator: (rule: [], val: String) => {
                    switch (true) {
                        case !Boolean(val):
                            return Promise.reject('确认密码不能为空')
                        case form.getFieldValue('password') !== val:
                            return Promise.reject('两次输入的密码不相同')
                        default:
                            return Promise.resolve()
                    }
                }
            }
        ]
    },
    mobileRule: [
        {
            validator: (rule: [], val: string) => {
                const mobileReg = /^1[3-8][0-9]\d{8}$/
                switch (true) {
                    case !Boolean(val):
                        return Promise.reject('手机号码不能为空')
                    case !mobileReg.test(val):
                        return Promise.reject('手机号码格式不正确')
                    default:
                        return Promise.resolve()
                }
            }
        }
    ],
    codeRule: [
        { required: true, message: '验证码不能为空' },
        { max: 6, message: '验证码长度不正确' },
        { min: 6, message: '验证码长度不正确' }
    ]
}
