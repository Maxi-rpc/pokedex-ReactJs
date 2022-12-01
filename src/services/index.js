import React from "react";
import { get_pokemon_test, get_pokemon_name } from "./api/Api";

export default function Services() {
	const [pokemon, setPokemon] = React.useState([]);
	const [pokemon1, setPokemon1] = React.useState([]);

	React.useEffect(() => {
		get_pokemon_test().then((res) => {
			setPokemon(res.pokemon);
		});

		get_pokemon_name().then((res) => {
			setPokemon1(res.pokemon);
		});
	}, []);

	return (
		<div>
			<h1>Hello Services</h1>
			<p>get_pokemon_test = {pokemon.name}</p>

			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Buscar Pokemon"
					aria-label="Recipient's username"
					aria-describedby="button-addon2"
				/>
				<button
					className="btn btn-outline-secondary"
					type="button"
					id="button-addon2"
				>
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
	);
}
