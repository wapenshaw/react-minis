import React from 'react';
import './App.css';
import { CardDeck } from './apps';

const App: React.FunctionComponent = () => {
	return (
		<div className="content">
			<h1 className="">React Minis</h1>
			<CardDeck />
		</div>
	);
};

export default App;
