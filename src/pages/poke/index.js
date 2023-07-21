import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// template
import Template from "../template";
// bootstrap
import {
	Col,
	Row,
	Card,
	Image,
	Container,
	Button,
	Tab,
	Tabs,
	ProgressBar,
} from "react-bootstrap";
// api
import { Get_pokemon } from "../../services";
// utilitis
import { ColorType } from "../../utils";

export default function Poke() {
	const { name } = useParams();
	const [pokeData, setPokeData] = useState(null);
	useEffect(() => {
		Get_pokemon(name).then((res) => {
			setPokeData(res.data);
			console.log(res.data);
		});
	}, [name]);

	if (!pokeData) {
		return <h5>No data</h5>;
	}

	return (
		<Template>
			<Container
				style={{ backgroundColor: ColorType[pokeData.types[0].type.name] }}
			>
				<Row className="pt-3">
					<Col md="3">
						<Button variant="outline-dark" size="lg">
							<i className="fa-solid fa-arrow-left"></i>
						</Button>
					</Col>
				</Row>
				{/* title image */}
				<Row className="align-items-center">
					<Col md="6" className="text-capitalize">
						<h5>#{pokeData.id.toString().padStart(3, 0)}</h5>
						<h1>{pokeData.name}</h1>
						<div className="py-3">
							{pokeData.types.map((type) => (
								<Button
									key={type.type.name}
									className="text-capitalize px-3 me-3"
									style={{
										backgroundColor: ColorType[type.type.name],
										borderColor: "white",
									}}
								>
									{type.type.name}
								</Button>
							))}
						</div>
						<h6>
							Height {pokeData.height} - weight {pokeData.weight}
						</h6>
					</Col>
					<Col md="6">
						<Image
							className="img-fluid"
							src={pokeData.sprites.other["official-artwork"].front_default}
						></Image>
					</Col>
				</Row>
				{/* tabs */}
				<Row>
					<Col>
						<Card>
							<Card.Body>
								<Tabs
									defaultActiveKey="about"
									className="mb-3 justify-content-between"
								>
									<Tab eventKey="about" title="About">
										Contenido de about
									</Tab>
									<Tab eventKey="stats" title="Stats">
										<Row>
											<Col>
												<h6 className="fw-bold py-3">Base Stats</h6>
												{pokeData.stats.map((stat) => (
													<Row className="align-items-center justify-content-between">
														<Col md="3">
															<span className="fw-bold text-capitalize">
																{stat.stat.name}
															</span>
														</Col>
														<Col md="3">{stat.base_stat}</Col>
														<Col md="3">
															<ProgressBar
																now={stat.base_stat}
																max="255"
															></ProgressBar>
														</Col>
													</Row>
												))}
											</Col>
										</Row>
									</Tab>
									<Tab eventKey="evolutions" title="Evolutions">
										contenido evolutions
									</Tab>
								</Tabs>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Template>
	);
}
