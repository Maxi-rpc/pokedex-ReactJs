import { Container, Row } from "react-bootstrap";
import { NavBarSocial } from "../../components";
import Header from "../../components/header/Header";

export default function Template() {
	return (
		<>
			<Container fluid>
				<h6>Template</h6>
				<Row>
					<NavBarSocial></NavBarSocial>
				</Row>
				<Header></Header>

				<p>footer</p>
			</Container>
		</>
	);
}
