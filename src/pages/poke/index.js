import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
	ProgressBar,
	Collapse,
} from "react-bootstrap";
// api
import { Get_pokemon } from "../../services";
// utilitis
import { ColorType } from "../../utils";
import { Loader } from "../../components";

export default function Poke() {
	const { name } = useParams();
	const [pokeData, setPokeData] = useState("");
	const [open, setOpen] = useState(false);
	useEffect(() => {
		Get_pokemon(name).then((res) => {
			setPokeData(res.data);
		});
	}, [name]);

	if (!pokeData) {
		return (
			<Template>
				<Loader />
			</Template>
		);
	}

	return (
		<Template>
			<Container>
				<Row className="pt-5 mt-4">
					<Col>
						<Card
							className="shadow border-0"
							style={{
								backgroundColor: ColorType[pokeData.types[0].type.name],
							}}
						>
							<Card.Body>
								{/* link to back */}
								<Row>
									<Col md="3">
										<Link to={`/`} className="btn btn-lg btn-outline-dark">
											<i className="fa-solid fa-arrow-left"></i>
										</Link>
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
									</Col>
									<Col md="6">
										<Image
											className="img-fluid"
											src={
												pokeData.sprites.other["official-artwork"].front_default
											}
										></Image>
									</Col>
								</Row>
								{/* stats */}
								<Row>
									<Col>
										<Card>
											<Card.Body>
												<div className="d-grid">
													<Button
														onClick={() => setOpen(!open)}
														aria-controls="collapse-text"
														aria-expanded={open}
														variant="outline-dark"
													>
														Ver Base Stats
													</Button>
												</div>
												<Collapse in={open}>
													<div id="collapse-text" className="pt-3">
														{pokeData.stats.map((stat) => (
															<Row className="align-items-center justify-content-around">
																<Col md="3">
																	<span className="fw-bold text-uppercase">
																		{stat.stat.name}
																	</span>
																</Col>
																<Col md="2" className="text-end">
																	{stat.base_stat}
																</Col>
																<Col md="2">
																	<ProgressBar
																		now={stat.base_stat}
																		max="255"
																		min="1"
																	></ProgressBar>
																</Col>
																<Col md="2">255</Col>
															</Row>
														))}
													</div>
												</Collapse>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Template>
	);
}
