import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { Board } from './apps/diceroll';
import { PokeGame } from './apps';

const App: React.FunctionComponent = () => {
	return (
		<Container maxWidth="lg">
			<Board />
			<PokeGame></PokeGame>
		</Container>
	);
};

export default App;
