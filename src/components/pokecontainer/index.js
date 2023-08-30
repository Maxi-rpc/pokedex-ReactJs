import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// bootstrap
import { Col, Row, Card, Container } from "react-bootstrap";
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
		<Col className="my-2" md="3" sm="3" key={poke.name}>
			<Link className="h6 text-decoration-none fs-6" to={`/poke/${poke.name}`}>
				<PokeCard name={poke.name}></PokeCard>
			</Link>
		</Col>
	));
	return (
		<>
			<Container>
				<Row className="my-2">
					<Col md="12">
						<Card className="border border-0">
							<Card.Body>
								<Row>{listItem}</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
