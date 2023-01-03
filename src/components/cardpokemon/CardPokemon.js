import { Card, Col, Button, Row } from "react-bootstrap";

export default function CardPokemon({ name, pokemon_id, sprites, types }) {
	const type_btn = types.forEach((type) => {
		return (
			<Button key={type.type.slot} variant="primary" className="mx-1">
				{type.type.name}
			</Button>
		);
	});
	return (
		<>
			<Col className="col-3 col-md-2 my-3">
				<Card>
					<Card.Body className="p-0">
						<Card.Img
							variant="top"
							src={sprites.front_default}
							alt={name}
						></Card.Img>
						<Card.Subtitle className="mb-1 text-center">
							{pokemon_id} {name}
						</Card.Subtitle>
						<Row className="justify-content-center my-2">
							<Col className="text-center">{type_btn}</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}
