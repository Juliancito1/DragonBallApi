import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../img/DragonBallLogo.png'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Link to={'/'} className="navbar-brand">
            <img src={logo} alt="Logo Dragon Ball" className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className="btn nav-link text-light">
              Inicio
            </Link>
            <Link to={"/sobremi"} className="btn nav-link text-light">
              Sobre Mi
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu
