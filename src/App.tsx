import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import { PokeGame } from './components/pokedex';

const App: React.FunctionComponent = () => {
	return (
		<Container maxWidth="lg">
			<PokeGame></PokeGame>
		</Container>
	);
};

export default App;
