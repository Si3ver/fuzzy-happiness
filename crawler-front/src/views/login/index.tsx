import { useState } from 'react';
import { Redirect } from 'react-router';
import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import qs from 'qs'
import './index.css'

const LoginPage = () => {

  const [isLogin, setIsLogin] = useState(false)

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const { password = '' } = values
    axios.post(
      '/api/login',
      qs.stringify({password}),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then(res => {
      if (res.data) {
        setIsLogin(true)
      } else {
        // setTimeout(() => {
          message.error('登录失败！')
        // }, 1000)
      }
    })
  };

  // message.error('登录失败！')
  if (isLogin) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-page">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage
