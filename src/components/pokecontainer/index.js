import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// bootstrap
import { Col, Row, Card } from "react-bootstrap";
// components
import { PokeCard } from "../index";

export default function PokeContainer({ data }) {
	const [listPokemon, setListPokemon] = useState([]);

	useEffect(() => {
		setListPokemon(data);
	}, [data]);

	if (listPokemon.length < 1) {
		return (
			<>
				<h1>No hay data</h1>
			</>
		);
	}
	const listItem = listPokemon.map((poke) => (
		<Col className="my-2" md="2" key={poke.name}>
			<Link to={`/poke/${poke.name}`}>
				<PokeCard data={poke.name}></PokeCard>
			</Link>
		</Col>
	));
	return (
		<>
			<Row className="my-2">
				<Col md="12">
					<Card>
						<Card.Body>
							<Row>{listItem}</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}
