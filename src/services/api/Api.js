import axios from "axios";
const API_URL = "https://pokeapi.co/api/v2/";
const API_POKEMON = API_URL + "pokemon/";

const pokemons_cantidad = {
	max: 905,
	min: 1,
};

let offset = 1;
let limit = 18;

export const get_pokemons = (offset = 0, limit = 19) => {
	let API_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
	return axios.get(API_POKEMONS);
};

export const get_pokemon = (name) => {
	return axios.get(API_POKEMON + name);
};
