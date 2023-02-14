import Template from "../template";
// bootstrap
import { Col, Row } from "react-bootstrap";
// api
import { Get_pokemon } from "../../services/index";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		Get_pokemon().then((res) => {
			console.log(res.data);
		});
	}, []);

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
