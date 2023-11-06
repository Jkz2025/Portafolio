import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo.png"
import "./NavBar.css"
import instagramlogo from "../assets/Icons/instagramlogo.png"
import githublogo from "../assets/Icons/githulogo.png"
import whatsapplogo from "../assets/Icons/whatsapplogo.png"
export function NavbarFormExample() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrolly > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          
          <img src={logo} alt="Logo"  className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          <Nav.Link
              href="#connect"
              className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("connect")}
              >
              Conect
            </Nav.Link>
              </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={instagramlogo} alt="" />
              </a>
              <a href="#">
            
                <img src={githublogo} alt="" />
              </a>
              <a href="#">
             
                <img src={whatsapplogo} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarFormExample;