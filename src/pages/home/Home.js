import Template from "../template/Template";
import { ContainerPokemon, CardPokemon } from "../../components/index";
import { Get_pokemons } from "../../services/index";
import React, { useEffect, useState } from "react";

export default function Home() {
	const [list_pokemons, setList_pokemons] = useState(null);

	useEffect(() => {
		Get_pokemons().then((res) => {
			setList_pokemons(res.data.results);
		});
	}, []);

	if (list_pokemons) {
		const grid_pokemons = list_pokemons.map((pokemon) => (
			<CardPokemon key={pokemon.name} name={pokemon.name}></CardPokemon>
		));

		return (
			<>
				<Template>
					<ContainerPokemon>{grid_pokemons}</ContainerPokemon>
				</Template>
			</>
		);
	}
}
