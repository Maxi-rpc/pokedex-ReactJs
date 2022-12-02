import { Card, Col } from "react-bootstrap";

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
};

export default function CardPokemon() {
	return (
		<>
			<Col className="col-3 col-md-4">
				<Card style={{ width: "18rem" }}>
					<Card.Body>
						<Card.Img
							variant="top"
							src={pokemon.sprites.front_default}
							alt={pokemon.name}
						></Card.Img>
						<div>
							<h4>CardPokemon</h4>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}
