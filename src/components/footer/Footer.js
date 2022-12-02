import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
	const anio = new Date().getFullYear();
	return (
		<>
			<Container className="my-3">
				<Row className="justify-content-center">
					<Col className="text-center">
						<p>© {anio} All rights reserved, by Maxirpc</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
