import React from 'react'
import { Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Nav() {

return (
<Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <ul className="flex-row">
          <li className="mx-1">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/resume">
              Resume
            </Link>
          </li>
        </ul>
  </Navbar.Collapse>
  </Container>
</Navbar>
)}

export default Nav;