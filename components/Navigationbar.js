

import { Nav, Navbar } from 'react-bootstrap'

const Navigationbar = () => {
    return (
  <Navbar 
  className="fj-navbar fj-nav-base"
  bg="transparent"
  expand="lg" >
  <Navbar.Brand className="fj-navbar-brand">
    <a href="#">Nshimiye</a>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link
        className="fj-navbar-item fj-navbar-link"
        href='/'>Home
      </Nav.Link>
      <Nav.Link
        className="fj-navbar-item fj-navbar-link"
        href='/'>About
      </Nav.Link>
      <Nav.Link
        className="fj-navbar-item fj-navbar-link"
        href='/'>Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigationbar
