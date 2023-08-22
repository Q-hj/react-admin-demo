import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// * 两种路由模式的组件： BrowserRouter(History模式)， HashRouter( Hash模式)

import React, { lazy } from 'react';

// import Home from '@/pages/Home';
// import About from '@/pages/About';

// 懒加载写法
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const baseRouter = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/home',
		element: (
			<React.Suspense>
				<Home />
			</React.Suspense>
		),
	},
	{
		path: '/about',
		element: (
			<React.Suspense fallback={<div>加载中...</div>}>
				<About />
			</React.Suspense>
		),
	},
];

export default baseRouter;
