import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
// routes
import Rutas from "./routes";

function App() {
	return <RouterProvider router={Rutas}></RouterProvider>;
}

export default App;
