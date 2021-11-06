import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


import './Header.css';
const Header = () => {
const {user, userSignOut}=useAuth();

    return (
<>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand > Dream Holidays</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
     
      
      {
         user?.email && <Nav.Link as={Link} to="/myorder">my orders</Nav.Link>
      }

        {/* {
           user?.email &&  <Nav.Link as={Link} to="addNewService">Add new package</Nav.Link>
        } */}

        {
           user?.email && <Nav.Link as={Link}to="/order"> All Order</Nav.Link>
        }
      
   
    
      {
         user?.email? <button onClick={userSignOut} className="btn btn-info mx-2" >Log Out</button>
         :<Nav.Link  as={Link} to="/login">Login</Nav.Link>
         
      }


      {

      user?.email && <span className="text-light ml-2">{user.displayName}</span>

       }

{
        user?.email && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
      }
      
      
      
        
        
       
        

      
      
      
     
    </Navbar.Collapse>
    </Container>
  </Navbar>

 
</>
        
    );
};

export default Header;