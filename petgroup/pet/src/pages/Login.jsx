import React from 'react';

// * antd (https://ant.design/components/form)
// import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./Login.scss";


const Login = () => {
  const navigate = useNavigate();


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <section className="onboarding__login">
        <div className="layout-fix">
          <div className="heading">
            <h2 className="tit">로그인</h2>
            <p className="displaynone sub">Welcome!</p>
          </div>
         
          <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="아이디"
                name="user-id"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="비밀번호"
                name="user-pw"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" label={null}>
                <Checkbox>아이디 저장</Checkbox>
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">로그인</Button>
              </Form.Item>
            </Form>


        </div>
      </section>
    </>
  );
};

export default Login;