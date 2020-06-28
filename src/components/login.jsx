import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Axios from 'axios';
import React from "react";
import { AuthContext } from "../App";
import 'antd/dist/antd.css';
const NormalLoginForm = () => {
  const { dispatch } = React.useContext(AuthContext);
  const onFinish = value => {
    Axios.get('http://localhost:3000/mock.json', 
      {
        params:{
          username:value.username,
          password:value.password
        }
      }
    )
    .then(res => {
          if(res.data.code === 200){
            dispatch({
              type: "LOGIN",
              payload: res.data.data
          })
        }
     })
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input 
          prefix={<UserOutlined 
          className="site-form-item-icon" />} 
          placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;
