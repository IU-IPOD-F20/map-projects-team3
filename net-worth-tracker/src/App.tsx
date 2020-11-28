import React, { FC } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import { MainPage } from './pages';

export const App: FC = () => {
	return (
		<div className="App">
			<Switch>
				<Route path="/" component={MainPage} />
			</Switch>
		</div>
	);
};

export default App;
