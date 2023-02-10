import { Container, Row } from "react-bootstrap";
import { HeaderComponent, FooterComponent } from "../../components";

export default function Template(props) {
	const children = props.children;
	return (
		<>
			<Container fluid>
				<HeaderComponent></HeaderComponent>
				{children}
				<FooterComponent></FooterComponent>
			</Container>
		</>
	);
}
