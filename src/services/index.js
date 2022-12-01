import React from "react";
import { get_pokemon_test, get_pokemon_name } from "./api/Api";

export default function Services() {
	const [pokemon, setPokemon] = React.useState([]);
	const [pokemon1, setPokemon1] = React.useState([]);

	React.useEffect(() => {
		get_pokemon_test().then((res) => {
			setPokemon(res.pokemon);
		});
		let name = "mew";
		get_pokemon_name(name).then((res) => {
			setPokemon1(res.pokemon);
		});
	}, []);

	return (
		<div>
			<h2>Hello Services</h2>
			<h5>get_pokemon_test = {pokemon.name}</h5>
			<h5>get_pokemon_name = {pokemon1.name}</h5>
		</div>
	);
}
