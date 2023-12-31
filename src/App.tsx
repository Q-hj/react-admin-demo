import { useState } from 'react';

import { Button } from 'antd';

import Comp1 from '@/components/Comp1/index';

import { Outlet, useRoutes, Link } from 'react-router-dom';
import routes from '@/router';

function App() {
	const routerView = useRoutes(routes);
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <Link to="/home">首页</Link> | <Link to="/User">关于</Link> */}
			{/* 路由占位符 */}
			{/* <Outlet></Outlet> */}
			{routerView}
		</>
	);
}

export default App;
