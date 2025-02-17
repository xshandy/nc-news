import { useState } from "react";

function Header({ setSearchTerm }) {
  const [tempSearchTerm, setTempSearchTerm] = useState("");

  function handleChange(e) {
    setTempSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchTerm(tempSearchTerm);
  }

  return (
    <>
      <h1>NC News</h1>
      <form onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          value={tempSearchTerm}
          type="text"
          placeholder="Search articles..."
          className="searchbar"
        />
        <button className="search-btn" onClick={handleChange}>
          Search
        </button>
      </form>
    </>
  );
}

export default Header;
