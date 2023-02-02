import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import { Get_pokemon } from "../../services/index";
import { TypesColors } from "../../utils/index";

export default function CardDetail({ name = "lucario" }) {
	const [pokemonDetail, setPokemonDetail] = useState(null);
	const [types, setTypes] = useState([]);
	const [stats, setStats] = useState([]);

	useEffect(() => {
		Get_pokemon(name).then((res) => {
			console.log(res.data.stats);
			setPokemonDetail(res.data);
			setTypes(res.data.types);
			setStats(res.data.stats);
		});
	}, [name]);

	const list_types = types.map((type) => (
		<Col className="text-center" key={type.slot}>
			<Button
				className="text-uppercase border-0"
				style={{
					backgroundColor: TypesColors[type.type.name],
				}}
			>
				{type.type.name}
			</Button>
		</Col>
	));

	const list_stats = stats.map((stat) => (
		<ListGroup.Item key={stat.effort} className="text-uppercase">
			{stat.stat.name} - {stat.base_stat}
		</ListGroup.Item>
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
						#{pokemonDetail.id.toString().padStart(3, 0)} - {pokemonDetail.name}
					</Card.Title>
					<Card.Img
						width={"100px"}
						height={"500px"}
						src={pokemonDetail.sprites.front_default}
					></Card.Img>
					<Row className="justify-content-around">{list_types}</Row>
					<ListGroup className="my-3">{list_stats}</ListGroup>
				</Card.Body>
			</Card>
		</>
	);
}
