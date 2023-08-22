import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// * 两种路由模式的组件： BrowserRouter(History模式)， HashRouter( Hash模式)

import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';

const baseRouter = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
];

export default baseRouter;
