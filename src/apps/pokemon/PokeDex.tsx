import { AppBar, Grid, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Pokemon } from './api/types';
import PokeCard from './PokeCard';

interface Props {
	pokedex: Pokemon[];
	winDex: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			marginLeft: 20,
			padding: 10,
		},
	})
);

const PokeDex: React.FunctionComponent<Props> = ({ pokedex, winDex }) => {
	const classes = useStyles();

	const renderDex = () => {
		if (pokedex) {
			const render = pokedex.map((pokemon) => {
				return (
					<Grid key={pokemon.id} item xs={2}>
						<PokeCard
							id={pokemon.id}
							name={pokemon.name}
							baseExp={pokemon.base_experience}
							type={pokemon.species.name}
						/>
					</Grid>
				);
			});
			return render;
		}
	};

	return (
		<Grid container spacing={4} item direction="row" justify="center" alignItems="center">
			<AppBar position="relative" color={winDex ? 'primary' : 'secondary'}>
				<Typography align="center" className={classes.title} variant="h4">
					{winDex ? 'Winning Hand' : 'Losing Hand'}
				</Typography>{' '}
			</AppBar>
			{renderDex()}
		</Grid>
	);
};

export default PokeDex;
