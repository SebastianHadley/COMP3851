import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GetSVG } from "../Helper";
import {
  BrowserRouter as Router
} from "react-router-dom";

function NavBar({onPageChange}){

  const [navResponse, setNav] = useState([]);
  useEffect(() => {
    async function fetchNav() {
      try {
        const response = await fetch("http://localhost:3001/NavBar");
        const data = await response.json();        
        setNav(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNav();
  }, []);

  function handleClick(Page){
    onPageChange(Page);
  }

  return (
    <Router>
      <Navbar className="nav-styling">
          <Navbar.Brand>
            <button onClick={() => handleClick('Home')}>
              { navResponse.SectionAdditionalText ? (<img src={ GetSVG(navResponse.SectionAdditionalText)} className= "nav-image" />) :
              <div>loading</div>}
            </button>
          </Navbar.Brand>
          <Navbar.Collapse className="navbar-content" id="basic-navbar-nav">
            <Nav className="ms-auto">
               { navResponse.Paragraphs ? navResponse.Paragraphs.map((item, index) => (
              <div key={index}>
                {item.AdditionalText ? (
                <Nav.Link href={item.AdditionalText}> {item.ParagraphText}</Nav.Link>) : 
                <Nav.Link onClick={() => handleClick(item.ParagraphText)}>{item.ParagraphText}</Nav.Link>}
              </div>
              )) :  
              <div>loading</div>}
            </Nav>
            <span className="navbar-text">
            </span>
          </Navbar.Collapse>
      </Navbar>
    </Router>
  )
}
export {NavBar}