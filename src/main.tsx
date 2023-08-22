import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App.tsx'
import Router from '@/router';

// 重置css样式
import 'reset-css';

// 全局css
import '@/assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
