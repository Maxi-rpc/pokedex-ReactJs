import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// template
import Template from "../template";
// bootstrap
import { Col, Row, ListGroup, Image } from "react-bootstrap";
// api
import { Get_pokemon } from "../../services";

export default function Poke() {
	const { name } = useParams();
	const [detailPoke, setDetailPoke] = useState(null);
	useEffect(() => {
		Get_pokemon(name).then((res) => {
			setDetailPoke(res.data);
		});
	}, [name]);

	return (
		<Template>
			<Row className="my-2 justify-content-center">
				<Col md="2">
					<h2 className="text-capitalize">
						#{detailPoke.id.toString().padStart(3, 0)} - {detailPoke.name}
					</h2>
				</Col>
			</Row>
			<Row className="my-2">
				<Col md="2"></Col>
			</Row>
		</Template>
	);
}
