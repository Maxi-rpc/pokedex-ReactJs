import { Card, Col, Row, Pagination } from "react-bootstrap";

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
						<Card.Footer className="d-flex justify-content-center">
							<Pagination>
								<Pagination.Prev />
								<Pagination.Next />
							</Pagination>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</>
	);
}
