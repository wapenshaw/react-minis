import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Palette } from './apps';

const App: React.FunctionComponent = () => {
	return (
		<Container maxWidth="lg">
			<h1 className="">React Minis</h1>
			<Palette boxNum={18} />
		</Container>
	);
};

export default App;
