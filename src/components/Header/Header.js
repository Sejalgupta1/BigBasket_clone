import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import InputGroup from 'react-bootstrap/InputGroup';
import "./header.css"
function Header() {
  return (
    <div className='ceel'> 
    
     <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"> <img src="https://www.bbassets.com/static/v2623/custPage/build/content/img/bb_logo.png" alt="#"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <InputGroup className="mb-3 cell">
        <InputGroup.Text id="basic-addon1" className='type'>Search for products...</InputGroup.Text><i class="bii bi-search"></i>
        </InputGroup>
          <div className='box'>
          <i class="biiii bi-basket-fill"></i>
          <span className='bas'>My Basket 0</span>
          
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    
    </div>
  )
}

export default Header