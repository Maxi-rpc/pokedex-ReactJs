import Template from "../template";
import { Col, Row } from "react-bootstrap";

export default function Home() {
	return (
		<>
			<Template>
				<h1>Home</h1>
				<Row>
					<Col md="8"></Col>
					<Col md="4"></Col>
				</Row>
			</Template>
		</>
	);
}
