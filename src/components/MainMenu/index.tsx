import React, { useState } from 'react';

import { Menu } from 'antd';

import { useNavigate } from 'react-router-dom';

import {
	AppstoreOutlined,
	DesktopOutlined,
	MailOutlined,
	PieChartOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';

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

const MainMenu: React.FC = () => {
	// 菜单点击跳转
	const navigateTo = useNavigate();

	const handleMenuClick = ({ key }: { key: string }) => {
		if (key.includes('/')) navigateTo(key);
	};

	// 菜单展开时
	const [openKeys, setOpenKeys] = useState<string[]>(['']);
	const handleOpenChange = (keys: string[]) => {
		setOpenKeys([keys.at(-1)!]);
	};

	return (
		<Menu
			defaultSelectedKeys={['/home']}
			openKeys={openKeys}
			mode="inline"
			theme="dark"
			items={items}
			onClick={handleMenuClick}
			onOpenChange={handleOpenChange}
		/>
	);
};

export default MainMenu;
