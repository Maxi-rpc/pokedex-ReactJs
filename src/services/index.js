import axios from "axios";
import React from "react";
/*
const API_URL = "https://pokeapi.co/api/v2/";
const API_POKEMON = API_URL + "pokemon/";

function get_pokemon_name(name) {
	axios.get(API_POKEMON + name).then((res) => {
		return res.data;
	});
}

function Services() {
	return (
		<>
			<h1>Hello Services</h1>
			<p></p>
		</>
	);
}

export default Services;
*/
const baseURL = "https://pokeapi.co/api/v2/pokemon/lucario";
//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function Services() {
	const [pokemon, setPost] = React.useState(null);

	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPost(response.data);
			console.log(response.data);
		});
	}, []);

	if (!pokemon) return null;

	return (
		<div>
			<h1>Hello Services</h1>
			<p>{pokemon.name}</p>
		</div>
	);
}
