import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoRed from "../img/cafelogored.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar className="header-container" bg="transparent" expand="lg">
      <Container fluid className="header">
        <Navbar.Brand href="/">
          <img className="redlogo" src={LogoRed} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="navlink"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="navlink"
              onClick={() => {
                navigate("/concept");
              }}
            >
              Concept
            </Nav.Link>
            <Nav.Link
              className="navlink"
              onClick={() => {
                navigate("/cuisine");
              }}
            >
              Cuisine
            </Nav.Link>
            <Nav.Link
              className="navlink"
              onClick={() => {
                navigate("/the-team");
              }}
            >
              The Team
            </Nav.Link>
            <Nav.Link
              className="navlink"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
