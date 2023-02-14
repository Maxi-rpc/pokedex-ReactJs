import React from "react";
// bootstrap
import { Container, Row, Navbar, Nav } from "react-bootstrap";
// assets
import Config from "../../config";

export default function HeaderComponent() {
	const links = Config.social;
	const listLinks = links.map((item, index) => (
		<Nav.Link key={index} href={item.url} target="_blank">
			{item.icon}
		</Nav.Link>
	));

	return (
		<>
			<Row>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<img
								alt=""
								src={Config.logo}
								width="30"
								height="30"
								className="d-inline-block align-top"
							/>{" "}
							{Config.title}
						</Navbar.Brand>
						<Nav className="ms-auto">{listLinks}</Nav>
					</Container>
				</Navbar>
			</Row>
		</>
	);
}
