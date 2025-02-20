import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="#">
        <p>Articles</p>
      </Link>
      <Link to="/topics">
        <p>Topics</p>
      </Link>
      <Link to="#">
        <p>Login</p>
      </Link>
    </nav>
  );
}

export default NavBar;
