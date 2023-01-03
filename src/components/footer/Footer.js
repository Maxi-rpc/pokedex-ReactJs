import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
	const anio = new Date().getFullYear();
	return (
		<>
			<Container fluid className="mt-3 bg-dark text-light">
				<Row className="justify-content-center my-2">
					<Col className="text-center">
						<p>© {anio} All rights reserved, by Maxirpc</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
