import { createBrowserRouter } from "react-router-dom";
import { Home, PokePage } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/poke/:name",
		element: <PokePage />,
	},
]);

export default router;
