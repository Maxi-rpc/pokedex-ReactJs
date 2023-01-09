import Template from "../template/Template";
import { ContainerPokemon, CardPokemon } from "../../components/index";
import { Get_pokemons } from "../../services/index";
import { useState, useEffect } from "react";

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
	for (let index = 0; index < 18; index++) {
		lista.push(pokemon);
	}

	const fetch_pokemons = async () => {
		try {
			const data = await Get_pokemons();
			setPokemons(data.pokemon);
			console.log(data);
		} catch (error) {}
	};

	useEffect(() => {
		fetch_pokemons();
	}, []);

	return (
		<>
			<Template>
				<div>Home</div>
				<ContainerPokemon>
					{lista.map((singlePokemon) => {
						return (
							<CardPokemon
								name={singlePokemon.name}
								pokemon_id={singlePokemon.id}
								sprites={singlePokemon.sprites}
								types={singlePokemon.types}
								key={singlePokemon.name + singlePokemon.id}
							></CardPokemon>
						);
					})}
				</ContainerPokemon>
			</Template>
		</>
	);
}
