import React, { useState } from 'react';

import { Layout, Button } from 'antd';

import { Outlet } from 'react-router-dom';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import MainMenu from '@/components/MainMenu';

const { Header, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
	color: '#fff',
	backgroundColor: '#108ee9',
};

const HomeView: React.FC = () => {
	// 折叠右侧
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout style={{ height: '100vh' }}>
			<Sider
				theme="dark"
				collapsed={collapsed}
				// collapsible={true} //会在侧边栏底部出现 折叠提示箭头
			>
				<p className="mt-10px color-red @hover:color-orange p-15px text-center font-bold text-18px cursor-pointer ">
					React{collapsed ? '' : '后台管理系统'}
				</p>
				<MainMenu></MainMenu>
			</Sider>
			<Layout className="bg-gray-3">
				<Header className="p0">
					<Button onClick={toggleCollapsed}>
						{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</Button>
				</Header>
				<Content
					className="m-18px"
					style={contentStyle}
				>
					{/* {routerView} */}
					<Outlet></Outlet>
				</Content>
			</Layout>
		</Layout>
	);
};

export default HomeView;
