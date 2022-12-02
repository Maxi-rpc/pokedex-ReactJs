import Template from "../template/Template";
import { ContainerPokemon, CardPokemon } from "../../components/index";

export default function Home() {
	return (
		<>
			<Template>
				<div>Home</div>
				<ContainerPokemon>
					<CardPokemon></CardPokemon>
				</ContainerPokemon>
			</Template>
		</>
	);
}
