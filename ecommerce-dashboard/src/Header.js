import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/register");
  }
  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className="bar">
          Ecommerce
        </Navbar.Brand>
        <Nav className="me-auto navbar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/">Product List</Link>

              <Link to="/add">Add Products</Link>
              <Link to="/update">Update Products</Link>
              <Link to="/search">Search Products</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Header;
