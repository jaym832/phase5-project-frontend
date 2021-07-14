import React from 'react'
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../logo2.png'



class Navbarz extends React.Component {

  state = {
    username: ''
  }


  componentDidMount() {

    fetch(`http://localhost:3000/me`, {
      method: "GET",
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ username: data.username }))


  }


  render() {
    return (
      <div>


        <Navbar id='main-nav' >



          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/adopt" class='active'>Adopt</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Nav.Link href="/shelters">Shelters</Nav.Link>
              <NavDropdown title="Rehome" eventKey={2} href="#memes">
                <NavDropdown.Item href="/rehome">Rehome a pet</NavDropdown.Item>
                <NavDropdown.Item href="/mypets">My pets</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/messages">Messages</Nav.Link>
            </Nav>
            <Nav>

              <NavDropdown title={this.state.username} eventKey={2} href="#memes">
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