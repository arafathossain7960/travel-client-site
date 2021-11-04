import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Header.css';
const Header = () => {


    return (
<>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand > Dream Holidays</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      
        <Nav.Link as={Link} to="addNewService">Add new package</Nav.Link>
         
       
       
         <Nav.Link as={Link}to="/order">Order</Nav.Link>
       
       
           <span className="text-light ml-2">user name</span>
        
       
      
      <button >Log Out</button>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      
        
        
       
        

      
      
      
     
    </Navbar.Collapse>
    </Container>
  </Navbar>

 
</>
        
    );
};

export default Header;