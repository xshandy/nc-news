import { Link } from "react-router";
import { useUser } from "./UserContext";

function NavBar() {
  const { selectedUser } = useUser();

  return (
    <nav className="navbar">
      <Link to="/articles">
        <p>Articles</p>
      </Link>
      <Link to="/topics">
        <p>Topics</p>
      </Link>
      <Link to="/users">
        <p>{selectedUser ? `${selectedUser}` : "Login"}</p>
      </Link>
    </nav>
  );
}

export default NavBar;
