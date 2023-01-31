import { Card, Col, Row } from "react-bootstrap";

export default function ContainerPokemon(props) {
	const children = props.children;
	return (
		<>
			<Row>
				<Col md="12">
					<Card>
						<Card.Body>
							<Row>{children}</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}
