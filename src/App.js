import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Product from "./views/Product";
import { Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="container-fluid">
			<Router>
				<Header />

				<div className="container">
					<Row>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/product/:id">
								<Product />
							</Route>
						</Switch>
					</Row>
				</div>
			</Router>
		</div>
	);
}

export default App;
