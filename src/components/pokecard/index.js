import React, { useEffect, useState } from "react";
// api
import { Get_pokemon } from "../../services";
// bootstrap
import { Card } from "react-bootstrap";
// util
import { ColorType } from "../../utils";

export default function PokeCard({ data }) {
	const [pokeData, setPokeData] = useState(null);

	useEffect(() => {
		Get_pokemon(data).then((res) => {
			setPokeData(res.data);
			console.log(res.data);
		});
	}, [data]);

	if (!pokeData) {
		return <h5>No data</h5>;
	}

	return (
		<>
			<Card style={{ borderColor: ColorType[pokeData.types[0].type.name] }}>
				<Card.Img
					variant="top"
					src={pokeData.sprites.front_default}
					alt={pokeData.name}
					width="200rem"
				/>
				<Card.Footer className="bg-dark text-light">
					<h4 className="text-capitalize">
						#{pokeData.id.toString().padStart(3, 0)} - {pokeData.name}
					</h4>
				</Card.Footer>
			</Card>
		</>
	);
}
