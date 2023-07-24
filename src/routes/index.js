import { createBrowserRouter } from "react-router-dom";
import { HomePage, PokePage } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/poke/:name",
		element: <PokePage />,
	},
]);

export default router;
