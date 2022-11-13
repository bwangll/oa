import React, { useState } from 'react';
import IconMap from '@/compoents/IconMap';
import { Button, Form, Input } from 'antd';
import { loginRule } from '@/utils/roles';
import { LoginInputProps } from '@/pages/users/login';

const SmsCodeLogin = ({ form }: LoginInputProps) => {
  const [disabled, setDisabled] = useState(true);
  const defaultTimeLength = 60;
  let [currentTime, setCurrentTime] = useState(defaultTimeLength);
  const [currentStatus, setCurrentStatus] = useState(true);
  const FormItem = Form.Item;

  const checkedMobile = async () => {
    try {
      const mobile = await form.validateFields(['mobile']);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };

  const runTime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        setCurrentTime(defaultTimeLength);
        return;
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };

  const _sendSmsCode = () => {
    setCurrentStatus(false);
    setDisabled(true);
    runTime();
  };

  return (
    <>
      <FormItem name='mobile'
        // @ts-ignore
                rules={loginRule.mobileRule}
                onChange={checkedMobile}
                hasFeedback>
        <Input placeholder='请输入手机号'
               prefix={IconMap.mobileIcon}
        />
      </FormItem>
      <FormItem name='code'
                rules={loginRule.codeRule}>
        <Input placeholder='请输入验证码'
               prefix={IconMap.codeIcon}
               addonAfter={<Button
                 disabled={disabled}
                 onClick={_sendSmsCode}
               >{currentStatus ? '发送验证码' : `${currentTime}后重新发送`}</Button>} />
      </FormItem>
    </>
  );
};

export default SmsCodeLogin;
