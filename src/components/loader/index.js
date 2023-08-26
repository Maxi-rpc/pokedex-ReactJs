import React from "react";
// bootstrap
import { Col, Row, Container, Spinner } from "react-bootstrap";

export default function Loader() {
	return (
		<>
			<Container>
				<Row className="vh-100 justify-content-center text-center align-content-center">
					<Col md="12">
						<Spinner
							style={{ width: "10rem", height: "10rem" }}
							animation="border"
							variant="primary"
						></Spinner>
					</Col>
				</Row>
			</Container>
		</>
	);
}
