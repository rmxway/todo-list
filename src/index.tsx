import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';
import './base.css';

const appNode = document.getElementById('root');

if (appNode) {
	const root = createRoot(appNode);

	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}
