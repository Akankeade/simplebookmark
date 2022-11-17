import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../images/logo-bookmark.svg'

const Navbarcom = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo1} alt="" /></Navbar.Brand>

          <div className="d-flex justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Features</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <button className='btn'>Login</button>
              {/* <Nav.Link href="#link">Login</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarcom







