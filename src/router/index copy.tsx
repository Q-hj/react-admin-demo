// 组件式写法

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// * 两种路由模式的组件： BrowserRouter(History模式)， HashRouter( Hash模式)

import App from '@/App';
import Home from '@/pages/Layout';
import User from '@/pages/User';

const baseRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={<App />}
			/>

			{/* 重定向 */}
			<Route
				path="/"
				element={<Navigate to="/home" />}
			/>

			<Route
				path="/home"
				element={<Home />}
			/>
			<Route
				path="/User"
				element={<User />}
			/>
		</Routes>
	</BrowserRouter>
);

export default baseRouter;
