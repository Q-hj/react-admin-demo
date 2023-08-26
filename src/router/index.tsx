import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// * 两种路由模式的组件： BrowserRouter(History模式)， HashRouter( Hash模式)

import React, { lazy } from 'react';

// import Home from '@/pages/Home';
// import User from '@/pages/User';

// 懒加载写法
const Layout = lazy(() => import('@/pages/Layout'));

const Home = lazy(() => import('@/pages/Home'));
const User = lazy(() => import('@/pages/User'));

// 加载中效果
const withLoading = (el: JSX.Element) => (
	<React.Suspense fallback={<div>加载中...</div>}>{el}</React.Suspense>
);

const baseRouter = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/home',
				element: withLoading(<Home />),
			},
			{
				path: '/user',
				element: withLoading(<User />),
			},
		],
	},
];

export default baseRouter;
