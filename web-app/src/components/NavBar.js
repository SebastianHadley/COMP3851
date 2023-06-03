import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GetSVG } from "../Helper";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar className="nav-styling">
          <Navbar.Brand href="/">
            <img src={ GetSVG('logosmall')} className= "nav-image" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'FacultyInfo' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('FacultyInfo')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact Us</Nav.Link>
            </Nav>
            <span className="navbar-text">
            </span>
          </Navbar.Collapse>
      </Navbar>
    </Router>
  )
}
