import { Link } from "react-router";

function Header() {
  return (
    <>
      <Link to="/">
        <h1 className="header-title">NC News</h1>
      </Link>
    </>
  );
}

export default Header;
