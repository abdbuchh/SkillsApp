import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import Providers from './Providers.jsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);