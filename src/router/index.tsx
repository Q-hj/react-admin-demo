import { BrowserRouter, Routes, Route } from 'react-router-dom';
// * 两种路由模式的组件： BrowserRouter(History模式)， HashRouter( Hash模式)

import App from '@/App';
import Home from '@/pages/Home';
import About from '@/pages/About';

const baseRouter = () => (
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={<App />}
			></Route>

			<Route
				path="/home"
				element={<Home />}
			></Route>

			<Route
				path="/about"
				element={<About />}
			></Route>
		</Routes>
	</BrowserRouter>
);

export default baseRouter;
