import React from 'react'
import './navs.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navs = () => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/imgs/logo.png" alt="/Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#"> Home</Nav.Link>
                        <Nav.Link href="#"> about us </Nav.Link>
                        <Nav.Link href="#"> Explore Food </Nav.Link>
                        <Nav.Link href="#"> Reviews </Nav.Link>
                        <Nav.Link href="#"> FAQ </Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href="#" id="call">0570324724</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navs;
