import logo from "./logo.svg";
import "./App.css";
//import Pages from "./pages/index";
//import Components from "./components/index";
import Services from "./services/index";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Services></Services>
				</a>
			</header>
		</div>
	);
}

export default App;
