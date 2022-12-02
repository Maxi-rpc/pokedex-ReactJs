import logo from "./logo.svg";
import "./App.css";
import { Template } from "./pages/index";
//import Components from "./components/index";
//import Services from "./services/index";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Template></Template>
			</header>
		</div>
	);
}

export default App;
