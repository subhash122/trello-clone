import React from 'react'
import './Login.css'
import {
    Card, Button, Form, Input,
} from 'antd';
import { Link } from 'react-router-dom';

function Login() {
    const onLogin = (values) => {
        localStorage.setItem("isAuthenticated", true)
        localStorage.setItem("email", values.email)
        window.open("/", "_self");
    };

    return (
        <div className="Auth-form-container">
            <Card style={{ borderRadius: '20px' }} className='Auth-form'>
                <h1 className='text-center text-xl font-bold'>Log in </h1>
                <Form layout="vertical" onFinish={onLogin}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Email is required' },
                            { type: 'email', message: 'Must be in email format' },
                        ]}
                        style={{ marginBottom: 15 }}
                    >
                        <Input name="email" type="email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Password is required' }]}
                        style={{ marginBottom: 15 }}
                    >
                        <Input.Password name="password" />
                    </Form.Item>
                    <Form.Item>
                        <Button className='w-full' type="primary" htmlType="submit" id="login-submit">
                            Sign in
                        </Button>
                    </Form.Item>

                    <p>Not Registered? <Link to='/signup'>Register here</Link></p>

                </Form>
            </Card>

        </div>
    )
}

export default Login
