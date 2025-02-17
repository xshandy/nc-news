import { Link } from "react-router";

function Header() {
  return (
    <>
      <Link to="/" className="header-title">
        <h1>NC News</h1>
      </Link>
    </>
  );
}

export default Header;
