import React from "react";
// bootstrap
import { Row, Col } from "react-bootstrap";
// config
import Config from "../../config";

export default function FooterComponent() {
	return (
		<>
			<Row className="justify-content-center bg-dark text-light py-3">
				<Col md="6" className="text-center">
					<p className="mb-0">Creado por {Config.creator}</p>
				</Col>
			</Row>
		</>
	);
}
