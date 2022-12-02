import { Container, Row } from "react-bootstrap";
import { NavBarSocial, Header, Footer } from "../../components";

export default function Template(props) {
	const children = props.children;
	return (
		<>
			<Container fluid>
				<h6>Template</h6>
				<Row>
					<NavBarSocial></NavBarSocial>
				</Row>
				<Header></Header>

				{children}

				<Footer></Footer>
			</Container>
		</>
	);
}
