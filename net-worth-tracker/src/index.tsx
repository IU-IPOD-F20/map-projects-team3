import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import { ApiContext } from './context';
import { Api } from './services';

const history = createHashHistory();
const api = new Api();

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<ApiContext.Provider value={api}>
				<App />
			</ApiContext.Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
