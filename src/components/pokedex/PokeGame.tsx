import { Backdrop, CircularProgress, Grid, Snackbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { getTenPokemonFromAPI } from './api/helpers';
import { Pokemon } from './api/types';
import PokeDex from './PokeDex';

interface Props {}
interface State {
	topDex: Pokemon[];
	botDex: Pokemon[];
	isLoading: boolean;
	topExp: number;
	botExp: number;
}

class PokeGame extends Component<Props, State> {
	state = {
		topDex: [],
		botDex: [],
		isLoading: true,
		topExp: 0,
		botExp: 0,
	};
	calculateDexExp = (dex: Pokemon[]): number => {
		return dex.reduce((acc, cur) => acc + cur.base_experience, 0);
	};

	componentDidMount(): void {
		getTenPokemonFromAPI().then((res) =>
			this.setState({
				topDex: res.slice(0, 5),
				botDex: res.slice(5, 10),
				isLoading: false,
				topExp: this.calculateDexExp(res.slice(0, 5)),
				botExp: this.calculateDexExp(res.slice(5, 10)),
			})
		);

		console.log('Mounted');
	}

	render(): React.ReactNode {
		if (this.state.isLoading) {
			return (
				<Backdrop open={this.state.isLoading}>
					<CircularProgress color="inherit" />
					<Typography variant="h3" component="h4">
						Loading Pokemon from API....
					</Typography>
				</Backdrop>
			);
		} else
			return (
				<Grid spacing={2} container direction="column">
					<PokeDex topDex pokedex={this.state.topDex} />
					<PokeDex topDex={false} pokedex={this.state.botDex} />
					<Grid container spacing={4} item direction="row" justify="center" alignItems="center">
						<Snackbar
							open
							message={
								this.state.topExp > this.state.botExp
									? `Top Hand Wins! ${this.state.topExp} > ${this.state.botExp}`
									: `Bottom Hand Wins! ${this.state.topExp} < ${this.state.botExp}`
							}
						/>
					</Grid>
				</Grid>
			);
	}
}

export default PokeGame;
