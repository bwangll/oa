import React from 'react';
import IconMap from '@/compoents/IconMap';
import { loginRule } from '@/utils/roles';
import { Form, Input } from 'antd';

const AccountLogin = () => {
  const FormItem = Form.Item;

  return (
    <>
      <FormItem name="accountName"
        rules={loginRule.userRule}
                hasFeedback>
        <Input placeholder='请输入用户名'
               prefix={IconMap.userIcon}
        />
      </FormItem>
      <FormItem name="password"
        rules={loginRule.passwordRule}
                hasFeedback>
        <Input placeholder='请输入密码'
               prefix={IconMap.passwordIcon}
        />
      </FormItem>
    </>
  );
};

export default AccountLogin;
