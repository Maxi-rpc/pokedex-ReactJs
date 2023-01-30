import Template from "../template/Template";
import { ContainerPokemon, CardPokemon } from "../../components/index";
import { Get_pokemons, Get_pokemon } from "../../services/index";
import React, { useEffect, useState } from "react";

const pokemon_test = {
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
	return (
		<>
			<Template>
				<div>Home</div>
				<ContainerPokemon>
					<CardPokemon></CardPokemon>
				</ContainerPokemon>
			</Template>
		</>
	);
}
