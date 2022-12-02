import { Card, Col } from "react-bootstrap";

export default function CardPokemon({ name, sprites }) {
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
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}
