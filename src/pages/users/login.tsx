import React, { FC, useState } from 'react';
import { Form, Button, Row, Col } from 'antd';
import AccountLogin from '@/pages/users/component/AccountLogin';
import SmsCodeLogin from '@/pages/users/component/SmsCodeLogin';
import IconMap from '@/compoents/IconMap';
import logoImg from '@/common/img/logo.svg';
import './css/login.less';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import { useDispatch, useSelector } from 'umi';

interface LoginInputProps {
  form: FormInstance;
}

const Login: FC = () => {
  const [form] = Form.useForm();

  const [type, setType] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  console.log(loading);

  // 提交事件
  const submitUserInfo = (data: any) => {
    data.type = type ? 0 : 1;
    dispatch({ type: 'user/login', payload: data });
  };

  //- 组件选择的容器函数
  const ComponentSelector = (props: FormInstance) => {
    return type ? <AccountLogin /> : <SmsCodeLogin form={props} />;
  };


  return (
    <div className='form'>
      <div className='logo'>
        <img src={logoImg} alt='logoImg' />
        <span>织信人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {ComponentSelector( form )}
        <Row>
          <Button type='primary'
                  block
                  htmlType='submit'
                  loading={loading.effects['user/login']}>登录</Button>
        </Row>
        <Row className='ft-12'>
          <Col span={6}>忘记密码?</Col>
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
export { LoginInputProps };
