import React, { useState } from 'react';

// * antd (https://ant.design/components/form)
// import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./Login.scss";

import { useAccessToken } from './AccessTokenContext';
import { API_URL } from '../config/constants';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {setAccessToken} = useAccessToken();

  const onFinish = async (values) => {
    setLoading(true);
    try {
        const result = await axios.post(`${API_URL}/users/login`, {
            user_id: values.user_id,
            pw: values.password,
        });
        if (result.data.user === values.user_id) {
            alert("로그인이 성공했습니다.");
            // accessToken을 Context와 localStorage에 저장
            setAccessToken(result.data.accessToken);
            localStorage.setItem('accessToken', result.data.accessToken);
            navigate('/'); // 메인 화면으로 이동
        } else {
            alert("로그인 정보를 다시 확인해주세요");
        }
    } catch (error) {
        console.error("Login failed", error);
        alert("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
        setLoading(false);
    }
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
                name="user_id"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="비밀번호"
                name="password"
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