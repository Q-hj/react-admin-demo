import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

import Particles from 'particlesjs';

const onFinish = (values: any) => {
	console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
	console.log('Failed:', errorInfo);
};

type FieldType = {
	username?: string;
	password?: string;
	remember?: string;
};
const validateMessages = {
	required: '请输入 ${label}',
	// ...
};

const Login: React.FC = () => {
	useEffect(() => {
		Particles.init({
			selector: '.bg',
			maxParticles: 100,
			speed: 0.3,
			sizeVariations: 5,
			color: '#108ee9',
			connectParticles: true,
		});
	});
	return (
		<>
			<div className="w-full h-100vh bg-gray-3 flex flex-justify-center flex-items-center">
				<canvas className="bg w-full h100vh absolute z-0"></canvas>
				<main className="p30px border border-blue border-solid bg-yellow-2/50 rounded-10px">
					<Form
						name="login"
						labelCol={{ span: 6 }}
						wrapperCol={{ span: 18 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
						validateMessages={validateMessages}
					>
						<Form.Item<FieldType>
							label="用户名"
							name="username"
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>

						<Form.Item<FieldType>
							label="密码"
							name="password"
							rules={[{ required: true, message: '请输入密码' }]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item<FieldType>
							name="remember"
							valuePropName="checked"
							wrapperCol={{ offset: 6, span: 18 }}
						>
							<Checkbox>记住我</Checkbox>
						</Form.Item>

						<Form.Item wrapperCol={{ span: 24 }}>
							<Button
								type="primary"
								block
								htmlType="submit"
							>
								登录
							</Button>
						</Form.Item>
					</Form>
				</main>
			</div>
		</>
	);
};
export default Login;
