import React from 'react';
import {loginRule} from "@/utils/roles";
import {Form, Input} from "antd";
import IconMap from "@/compoents/IconMap";
import {LoginInputProps} from "../Login";

const UpdatePassword = ({form}: LoginInputProps) => {
    const FormItem = Form.Item;
    return (
        <>
            <FormItem name="password"
                      rules={loginRule.passwordRule}
                      hasFeedback>
                <Input placeholder='请输入密码'
                       type="password"
                       prefix={IconMap.passwordIcon}
                />
            </FormItem>
            <FormItem name="confirmPassword"
                // @ts-ignore
                      rules={loginRule.confirmPasswordRule(form)}
                      hasFeedback>
                <Input placeholder='请再次输入密码'
                       type="password"
                       prefix={IconMap.passwordIcon}
                />
            </FormItem>
        </>
    );
};

export default UpdatePassword;
