import {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<StrictMode>
		<GlobalStyle />
		<App />
	</StrictMode>,
	rootElement,
);
