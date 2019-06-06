import React from 'react';
import './Movie.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {

	return (

		<Navbar expand="sm" className='navigation'>
			<Navbar.Brand exact="true" href="/">phlo'ciné</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title="User" id="basic-nav-dropdown">
						<NavDropdown.Item href='/user/favorites'>Favorites</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/user/paneau_control'>Account</NavDropdown.Item>
					</NavDropdown>
					<NavDropdown title="Admin" id="basic-nav-dropdown">
						<NavDropdown.Item href='/admin/movie_list'>Movie list</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/admin/paneau_control'>Movie database</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

	)
}

export default Navigation;