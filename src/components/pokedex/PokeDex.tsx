import { AppBar, Grid, Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Pokemon } from './api/types';
import PokeCard from './PokeCard';

interface Props {
	pokedex: Pokemon[];
	topDex: boolean;
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

const PokeDex: React.FunctionComponent<Props> = ({ pokedex, topDex }) => {
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
			<AppBar position="static" color={topDex ? 'primary' : 'secondary'}>
				<Typography className={classes.title} variant="h6">
					Hand - {topDex ? 'One' : 'Two'}
				</Typography>{' '}
			</AppBar>
			{renderDex()}
		</Grid>
	);
};

export default PokeDex;
