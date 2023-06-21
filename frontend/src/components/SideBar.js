import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SideBar = ({ setActiveComponent }) => {
    const handleLinkClick = (component) => {
        setActiveComponent(component);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => handleLinkClick('home')}>
                    Share Portfolio Visualizer
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => handleLinkClick('dashboard')}>Dashboard</Nav.Link>
                        <Nav.Link onClick={() => handleLinkClick('manager')}>Manager</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default SideBar;