import React from "react";
import { Col, Row, Form, Button, InputGroup } from "react-bootstrap";

export default function SearchBar() {
	return (
		<>
			<Row className="justify-content-center my-3">
				<Col md="3">
					<Form className="d-flex">
						<InputGroup className="mb-3">
							<Form.Control
								placeholder="Buscar Pokemon..."
								aria-label="Buscar Pokemon..."
								aria-describedby="basic-addon2"
							/>
							<Button variant="outline-secondary" id="button-addon2">
								<i class="fa-solid fa-magnifying-glass"></i>
							</Button>
						</InputGroup>
					</Form>
				</Col>
			</Row>
		</>
	);
}
