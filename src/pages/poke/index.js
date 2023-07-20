import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// template
import Template from "../template";
// bootstrap
import { Col, Row, Card, Image, Carousel } from "react-bootstrap";
// api
import { Get_pokemon } from "../../services";

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
			<Row className="my-2 justify-content-center">
				<Col md="3" sm="6">
					<Card>
						<Card.Header className="bg-dark text-light text-capitalize">
							<Image src={pokeData.sprites.front_default} />#
							{pokeData.id.toString().padStart(3, 0)} - {pokeData.name}
						</Card.Header>
						<Carousel>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={pokeData.sprites.other.home.front_default}
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={pokeData.sprites.other.home.front_shiny}
									alt="Second slide"
								/>
							</Carousel.Item>
						</Carousel>
					</Card>
				</Col>
			</Row>
		</Template>
	);
}
