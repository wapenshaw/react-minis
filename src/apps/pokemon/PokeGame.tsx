import {
	Backdrop,
	CircularProgress,
	Grid,
	Snackbar,
	Typography,
	Button,
} from '@material-ui/core';
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

	getDexAndUpdate = (): void => {
		this.setState({ isLoading: true });
		getTenPokemonFromAPI().then((res) =>
			this.setState({
				topDex: res.slice(0, 5),
				botDex: res.slice(5, 10),
				isLoading: false,
				topExp: this.calculateDexExp(res.slice(0, 5)),
				botExp: this.calculateDexExp(res.slice(5, 10)),
			})
		);
	};

	componentDidMount(): void {
		this.getDexAndUpdate();
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
				<Grid
					spacing={2}
					container
					style={{ padding: '20px' }}
					direction="column"
				>
					<PokeDex
						winDex={this.state.topExp > this.state.botExp}
						pokedex={this.state.topDex}
					/>
					<PokeDex
						winDex={this.state.topExp < this.state.botExp}
						pokedex={this.state.botDex}
					/>
					<Grid
						container
						style={{ padding: '20px', margin: '10px' }}
						spacing={4}
						item
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Button
							style={{ padding: '10px', margin: '10px' }}
							onClick={this.getDexAndUpdate}
							variant="contained"
							color="primary"
						>
							Get a Fresh Set!
						</Button>
					</Grid>
					<Snackbar
						open
						anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
						message={
							this.state.topExp > this.state.botExp
								? `Top Hand Wins! ${this.state.topExp} > ${this.state.botExp}`
								: `Bottom Hand Wins! ${this.state.topExp} < ${this.state.botExp}`
						}
					/>
				</Grid>
			);
	}
}

export default PokeGame;
