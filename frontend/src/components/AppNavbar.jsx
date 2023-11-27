import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../public/mainLogo.png';

function AppNavbar(props) {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> <img style={{width:"80px"}} src={logo} alt='img'/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{fontWeight:'600',fontSize:'18px', color:'#fff', marginLeft:"18px"}} href="/">Home</Nav.Link>
            <Nav.Link style={{fontWeight:'600',fontSize:'18px', color:'#fff'}} href="/registration">Registration</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default AppNavbar;