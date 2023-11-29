import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          iNotebook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${location.pathname === "/about" ? "active" : ""}`}
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>
          </Nav>
          {!localStorage.getItem("token") ? (
            <Form className="d-flex">
              <Button as={Link} to="/login" variant="primary mx-2">
                Login
              </Button>{" "}
              <Button as={Link} to="/signup" variant="primary">
                Signup
              </Button>{" "}
            </Form>
          ) : (
            <Button onClick={handleLogout} variant="danger mx-2">
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
