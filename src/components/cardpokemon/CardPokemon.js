import { Button, Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Get_pokemon } from "../../services/index";
import { TypesColors } from "../../utils/index";

export default function CardPokemon({ name = "pikachu" }) {
	const [pokemonInfo, setPokemonInfo] = useState(null);

	useEffect(() => {
		Get_pokemon(name).then((pokemon) => {
			setPokemonInfo(pokemon.data);
		});
	}, [name]);

	if (pokemonInfo) {
		const types = pokemonInfo.types;
		const list_types = types.map((type) => (
			<Button
				key={type.slot}
				variant="primary"
				className="mx-1 text-capitalize border-0"
				size="sm"
				style={{ backgroundColor: TypesColors[type.type.name] }}
			>
				{type.type.name}
			</Button>
		));

		return (
			<>
				<Col className="col-3 col-md-2 my-3 text-capitalize">
					<Card>
						<Card.Body className="p-0">
							<Card.Img
								variant="top"
								src={pokemonInfo.sprites.front_default}
								alt={pokemonInfo.name}
							></Card.Img>
							<Card.Subtitle className="mb-1 text-center">
								#{pokemonInfo.id.toString().padStart(3, 0)} {pokemonInfo.name}
							</Card.Subtitle>
							<Row className="justify-content-center my-2">
								<Col className="text-center">{list_types}</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</>
		);
	}
}
