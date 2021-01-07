import { React, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="">
				<Link to="/" className="text-dark">
					Products
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="">
						<Link to="/">Home</Link>
					</Nav.Link>

					<Nav.Link href="">
						<Link to="/about">About</Link>
					</Nav.Link>

					{/* <Nav.Link href="">
						<Link to="/product">product</Link>
					</Nav.Link> */}
				</Nav>

				{/* <Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">Search</Button>
				</Form> */}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
