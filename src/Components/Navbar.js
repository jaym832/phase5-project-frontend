import React from 'react'
import {Link} from "react-router-dom";
import { Nav,NavDropdown,Navbar } from 'react-bootstrap';
import logo from '../logo2.png'



class Navbarz extends React.Component{


render(){
return(
<div>
               

<Navbar id='main-nav' >

  <Navbar.Brand href="/adopt">
    {/* <img className='nav-logo' src={logo}></img> */}
    {/* FurEverHomes */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link className='nav-bar-ul-li a' href="/adopt">Adopt</Nav.Link>
      <Nav.Link href="/favorites">Favorites</Nav.Link>
      <Nav.Link href="/shelters">Shelters</Nav.Link>
        <NavDropdown title="Rehome"eventKey={2} href="#memes">
        <NavDropdown.Item href="/rehome">Rehome a pet</NavDropdown.Item>
        <NavDropdown.Item href="/mypets">My pets</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/messages">Messages</Nav.Link>
    </Nav>
    <Nav>
      
      <NavDropdown title="User"eventKey={2} href="#memes">
        <NavDropdown.Item href="/user">Edit profile</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>



  
</Navbar>



 </div>
        );
    }
}
export default Navbarz;