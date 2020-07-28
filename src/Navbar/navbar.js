import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const navbar = (props) => {
  const navLinks = [
    {
      site: "About",
      href: "#About"
    },
    {
      site: "Work",
      href: "#Work"
    },
    {
      site: "Uses",
      href: "#Uses"
    },
    {
      site: "Contact",
      href: "#Contact"
    }
  ]

  return (
  <Navbar bg="light" expand="lg">
    <div className="container">
      <Navbar.Brand href="/">{props.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            navLinks.map(data => {
              return (
                <Nav.Link href={data.href}>{data.site}</Nav.Link>
              )
            })
          }
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
  )
}

export default navbar

