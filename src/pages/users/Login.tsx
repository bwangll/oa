import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'antd';
import logoImg from '@/common/img/logo.svg';
import './css/login.less';
import {FormInstance} from 'antd/lib/form/hooks/useForm';
import AccountLogin from "./component/AccountLogin";
import SmsCodeLogin from "./component/SmsCodeLogin";
import IconMap from "@/compoents/IconMap";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "@/store/user/userSlice";
import {IUserStore} from "@/store/user/IUserStore";
import {UserDispatch} from "@/store/store";
import {useNavigate} from "react-router-dom";

interface LoginInputProps {
    form: FormInstance;
}

const Login: React.FC = () => {
    const [form] = Form.useForm();

    const [type, setType] = useState(true);
    const dispatch = useDispatch<UserDispatch>();
    const loading = useSelector((state: IUserStore) => state.user.loading);
    const navigate = useNavigate();

    const submitUserInfo = async (data: any) => {
        data.type = type ? 0 : 1;
        dispatch(fetchLogin(data));
    };

    //- 组件选择的容器函数
    const ComponentSelector = (props: FormInstance) => {
        return type ? <AccountLogin/> : <SmsCodeLogin form={props}/>;
    };


    return (
        <div className='form'>
            <div className='logo'>
                <img src={logoImg} alt='logoImg'/>
                <span>织信人事管理系统</span>
            </div>
            <Form form={form} onFinish={submitUserInfo}>
                {ComponentSelector(form)}
                <Row>
                    <Button type='primary'
                            block
                            htmlType='submit' loading={loading}>登录</Button>
                </Row>
                <Row className='ft-12'>
                    <Col span={6} onClick={() => {
                        navigate('/users/forgetPassword')
                    }}>忘记密码?</Col>
                    <Col span={18} className='align-right' onClick={() => setType(!type)}>
                        {type ? '使用手机号登录' : '使用账户名密码登录'}
                        {IconMap.arrRowRight}
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Login;
export type {LoginInputProps};
