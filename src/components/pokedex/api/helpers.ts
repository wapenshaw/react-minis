import axios from 'axios';
import { Pokemon } from './types';

const POKE_COUNT = 800;

export async function getTenPokemonFromAPI(): Promise<Pokemon[]> {
	const pokemonArray: Pokemon[] = [];
	const idArray = getTenRandomPokeIds();
	for (const id of idArray) {
		const apiResponse = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${id}/`
		);
		const pokeData: Pokemon = apiResponse.data;
		pokemonArray.push(pokeData);
	}
	console.log('Done!');
	return pokemonArray;
}

const getTenRandomPokeIds = (): number[] => {
	const pokeIdArray: number[] = [];

	while (0 < POKE_COUNT) {
		const randomID = Math.floor(Math.random() * POKE_COUNT);
		if (pokeIdArray.includes(randomID)) continue;
		pokeIdArray.push(randomID);
		if (pokeIdArray.length === 10) break;
	}
	return pokeIdArray;
};

export function getHighResImage(id: number): string {
	if (id < POKE_COUNT) {
		let url: string;
		if (id < 10)
			url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`;
		else if (id < 100)
			url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`;
		else
			url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
		return url;
	} else return '';
}
