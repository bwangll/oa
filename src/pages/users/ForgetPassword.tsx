import { Button, Form, message, Row } from 'antd'
import './css/login.less'
import React, { useState } from 'react'
import UpdatePassword from './component/UpdatePassword'
import SmsCodeLogin from './component/SmsCodeLogin'
import { checkedCode, resetPassword } from '@/service'
import { useNavigate } from 'react-router-dom'

const ForgetPassword: React.FC = () => {
    const [form] = Form.useForm()
    // 当前展示组件的标识
    const [currentStep, setCurrentStep] = useState(1)
    const navigate = useNavigate()

    const submitSelect = (data: any) => {
        currentStep === 1
            ? _checkCode(data.code)
            : _updatePassword(data.password)
    }

    const _checkCode = async (code: string) => {
        const result = await checkedCode({ smCode: code })
        if (result.data) {
            setCurrentStep(2)
        } else {
            message.error(result.msg)
        }
    }

    const _updatePassword = async (password: string) => {
        const result = await resetPassword({ newPassword: password })
        if (result.data) {
            message.success(result.msg)
            navigate('/users/login')
        } else {
            message.error(result.msg)
        }
    }

    return (
        <div className="form forget-password">
            <div className="forget-password-title">
                {currentStep === 1 ? '忘记密码' : '重置密码'}
            </div>
            <Form form={form} onFinish={submitSelect}>
                {currentStep === 1 ? (
                    <SmsCodeLogin form={form} />
                ) : (
                    <UpdatePassword form={form} />
                )}
                <Row>
                    <Button type="primary" block htmlType="submit">
                        登录
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default ForgetPassword
