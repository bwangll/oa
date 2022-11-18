import React from 'react';
import {Form, Input} from 'antd';
import {loginRule} from "@/utils/roles";
import IconMap from "@/compoents/IconMap";

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
               type="password"
               prefix={IconMap.passwordIcon}
        />
      </FormItem>
    </>
  );
};

export default AccountLogin;
