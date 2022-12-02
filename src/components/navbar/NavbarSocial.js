import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarSocial() {
	const url_linkedin = "https://www.linkedin.com/in/maximiliano-g-miranda/";
	const url_github = "https://github.com/Maxi-rpc";
	const url_github_repo = "https://github.com/Maxi-rpc/pokedex-reactjs";
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Nav className="ms-auto">
					<Nav.Item>
						<Nav.Link target="_blank" href={url_github}>
							<i className="fa-brands fa-github"></i>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link target="_blank" href={url_linkedin}>
							<i className="fa-brands fa-linkedin-in"></i>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link target="_blank" href={url_github_repo}>
							<i className="fa-solid fa-code"></i>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
}
