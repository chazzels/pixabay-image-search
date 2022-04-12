import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './page.css';
import App from './app.js';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	rootElement
);
