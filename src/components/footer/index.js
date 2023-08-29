import React from "react";
// bootstrap
import { Row, Col, Navbar, Container } from "react-bootstrap";
// config
import Config from "../../config";

export default function FooterComponent() {
	return (
		<>
			<Navbar fixed="bottom" expand="lg" className="bg-dark text-light">
				<Container fluid className="justify-content-center">
					<Row className="py-3">
						<Col md="12" className="text-center">
							<p className="mb-0">Creado por {Config.creator}</p>
						</Col>
					</Row>
				</Container>
			</Navbar>
		</>
	);
}
