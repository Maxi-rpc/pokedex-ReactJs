import axios from "axios";
const API_URL = "https://pokeapi.co/api/v2/";
const API_POKEMON = API_URL + "pokemon/";

// pokemon en total 905

export const get_pokemons = (offset = 0, limit = 18) => {
	limit = 1010;
	let API_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
	return axios.get(API_POKEMONS);
};

export const get_pokemon = (name = "lucario") => {
	return axios.get(API_POKEMON + name);
};
