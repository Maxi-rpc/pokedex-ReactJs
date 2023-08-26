import React, { useEffect, useState } from "react";
// api
import { Get_pokemon } from "../../services";
// bootstrap
import { Card, Spinner } from "react-bootstrap";
// util
import { ColorType } from "../../utils";
import Config from "../../config";

export default function PokeCard({ name }) {
	const [pokeData, setPokeData] = useState(null);

	useEffect(() => {
		Get_pokemon(name).then((res) => {
			setPokeData(res.data);
		});
	}, [name]);

	if (!pokeData) {
		return (
			<>
				<Card>
					<Card.Img
						variant="top"
						src={Config.logo}
						alt="no data"
						width="100rem"
					/>
					<Card.Footer className="bg-dark text-center">
						<Spinner animation="border" variant="light"></Spinner>
					</Card.Footer>
				</Card>
			</>
		);
	}

	return (
		<>
			<Card
				className="h-100"
				style={{ borderColor: ColorType[pokeData.types[0].type.name] }}
			>
				<Card.Img
					variant="top"
					src={pokeData.sprites.front_default}
					alt={pokeData.name}
					width="150rem"
				/>
				<Card.Footer
					style={{ backgroundColor: ColorType[pokeData.types[0].type.name] }}
					className="h-100 text-light text-capitalize"
				>
					#{pokeData.id.toString().padStart(3, 0)} - {pokeData.name}
				</Card.Footer>
			</Card>
		</>
	);
}
