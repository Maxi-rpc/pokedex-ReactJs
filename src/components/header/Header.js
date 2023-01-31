import { Col, Row } from "react-bootstrap";
import logo from "../../logo.svg";

export default function Header() {
	return (
		<Row className="justify-content-center my-3">
			<Col md="6" className="text-center">
				<Row>
					<h1>
						Pokedex <span>React js</span>{" "}
						<img
							width="50rem"
							className="img-fluid"
							src={logo}
							alt="logo"
						></img>
					</h1>
				</Row>
			</Col>
		</Row>
	);
}
