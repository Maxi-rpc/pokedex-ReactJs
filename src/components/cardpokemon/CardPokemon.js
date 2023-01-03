import { Card, Col } from "react-bootstrap";

export default function CardPokemon({ name, pokemon_id, sprites }) {
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
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}
