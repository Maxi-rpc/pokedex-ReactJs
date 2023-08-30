import React from "react";
// bootstrap
import { Row, Navbar, Container, Nav } from "react-bootstrap";
// config
import Config from "../../config";

export default function FooterComponent() {
	const links = Config.social;
	const listLinks = links.map((item, index) => (
		<Nav.Link key={index} href={item.url} target="_blank">
			{item.icon}
		</Nav.Link>
	));
	return (
		<>
			<Row>
				<Navbar
					fixed="bottom"
					bg="dark"
					variant="dark"
					className="text-secondary"
				>
					<Container className="justify-content-center">
						<p className="mb-0">Creado por {Config.creator}</p>
						<Nav className="ms-2">{listLinks}</Nav>
					</Container>
				</Navbar>
			</Row>
		</>
	);
}
