import React, { useEffect, useState } from "react";
import { Card, Row, Badge, Col } from "react-bootstrap";
import { Get_pokemon } from "../../services/index";

export default function CardDetail({ name = "lucario" }) {
	const [pokemonDetail, setPokemonDetail] = useState(null);
	const [types, setTypes] = useState([]);

	useEffect(() => {
		Get_pokemon(name).then((res) => {
			console.log(res.data);
			setPokemonDetail(res.data);
			setTypes(res.data.types);
		});
	}, [name]);

	const list_types = types.map((type) => (
		<Col className="text-center" key={type.slot}>
			<h4 className="text-uppercase">
				<Badge>{type.type.name}</Badge>
			</h4>
		</Col>
	));

	if (!pokemonDetail) {
		return (
			<>
				<h1>Selecciona un pokemon</h1>
			</>
		);
	}
	return (
		<>
			<Card className="h-100">
				<Card.Header>Detalle Pokemon</Card.Header>
				<Card.Body>
					<Card.Title className="text-center text-uppercase">
						{pokemonDetail.id} - {pokemonDetail.name}
					</Card.Title>
					<Card.Img
						width={"150px"}
						src={pokemonDetail.sprites.front_default}
					></Card.Img>
					<Row className="justify-content-around">{list_types}</Row>
				</Card.Body>
			</Card>
		</>
	);
}
