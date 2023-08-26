import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Space } from 'antd';

import { useNavigate, useRoutes, Outlet } from 'react-router-dom';

import {
	AppstoreOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
} from '@ant-design/icons';

import { Button, Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('首页', '/home', <DesktopOutlined />),
	getItem('可视化大屏', '/screen', <PieChartOutlined />),
	getItem('个人中心', 'sub1', null, [
		getItem('个人资料', '/user', <MailOutlined />),
		getItem('我的消息', '5', <MailOutlined />),
	]),

	getItem('功能菜单', 'sub2', <AppstoreOutlined />, [
		getItem('菜单一', '9'),

		getItem('二级菜单', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
	]),
];

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

	// const routerView = useRoutes(routes);

	// 菜单点击跳转
	const navigateTo = useNavigate();

	const handleMenuClick = ({ key }: { key: string }) => {
		if (key.includes('/')) navigateTo(key);
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
				<Menu
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					theme="dark"
					// inlineCollapsed={collapsed}
					items={items}
					onClick={handleMenuClick}
				/>
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
