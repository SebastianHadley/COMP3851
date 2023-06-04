import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GetSVG } from "../Helper";
import {
  BrowserRouter as Router
} from "react-router-dom";

function NavBar({onPageChange}){

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  function handleClick(Page){
    onPageChange(Page);
  }

  return (
    <Router>
      <Navbar className="nav-styling">
          <Navbar.Brand>
            <button onClick={() => handleClick('Home')}>
              <img src={ GetSVG('logosmall')} className= "nav-image" />
            </button>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleClick('Faculty')}>Faculty</Nav.Link>
              <Nav.Link href='https://www.newcastle.edu.au/our-uni/campuses-and-locations/maps'>Map</Nav.Link>
              <Nav.Link onClick={() => handleClick('Home')}>Home</Nav.Link>
            </Nav>
            <span className="navbar-text">
            </span>
          </Navbar.Collapse>
      </Navbar>
    </Router>
  )
}
export {NavBar}