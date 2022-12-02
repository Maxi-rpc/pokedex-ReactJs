import { Card, Col, Container, Row } from "react-bootstrap";

export default function ContainerPokemon(props) {
	const children = props.children;
	return (
		<>
			<Container>
				<h2>ContainerPokemon</h2>
				<Row>
					<Col md="12">
						<Card>
							<Card.Body>
								<Row>{children}</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
