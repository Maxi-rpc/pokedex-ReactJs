import Template from "../template/Template";
import { ContainerPokemon, CardPokemon } from "../../components/index";
import { Get_pokemons } from "../../services/index";
import { useState } from "react";

const pokemon = {
	id: 132,
	name: "ditto",
	sprites: {
		front_default:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
		front_shiny:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
		other: {
			home: {
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
				front_shiny:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
			},
			"official-artwork": {
				front_default:
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
			},
		},
	},
	types: [
		{
			slot: 1,
			type: {
				name: "fairy",
				url: "https://pokeapi.co/api/v2/type/18/",
			},
		},
		{
			slot: 1,
			type: {
				name: "fairy",
				url: "https://pokeapi.co/api/v2/type/18/",
			},
		},
	],
};

export default function Home() {
	const [pokemons, setPokemons] = useState([]);

	let lista = [];
	Get_pokemons(1, 1).then((res) => {
		res.forEach((element) => {
			lista.push(element.pokemon);
		});
	});

	return (
		<>
			<Template>
				<div>Home</div>
				<ContainerPokemon>
					{lista.map((singlePokemon) => (
						<CardPokemon
							name={singlePokemon.name}
							pokemon_id={singlePokemon.id}
							sprites={singlePokemon.sprites}
							types={singlePokemon.types}
						></CardPokemon>
					))}
				</ContainerPokemon>
			</Template>
		</>
	);
}
