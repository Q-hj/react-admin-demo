import { useState } from 'react';

import { Button } from 'antd';

import Comp1 from '@/components/Comp1/index';

import { Outlet } from 'react-router-dom';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Button type="primary">Button</Button>
			<Comp1></Comp1>
			{/* 路由占位符 */}
			<Outlet></Outlet>
		</>
	);
}

export default App;
