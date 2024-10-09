import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../img/DragonBallLogo.png'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <div>
          <img src={logo} alt="Logo Dragon Ball" className="logo"/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/'} className="nav-link">Inicio</Link>
            <Link to={'/sobremi'} className="nav-link">Sobre Mi</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu
