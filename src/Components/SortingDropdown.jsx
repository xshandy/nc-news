function SortingDropdown({ setSearchParams, orderQuery, sortByQuery }) {
  const sortByGreenList = ["created_at", "votes", "comment_count"];

  const orderOption = ["desc", "asc"];

  function handleSortByChange(e) {
    const newSortBy = e.target.value;
    const newParams = new URLSearchParams();
    newParams.set("sort_by", newSortBy);
    newParams.set("order", orderQuery);
    setSearchParams(newParams);
  }

  function handleOrderByChange(e) {
    const newOrder = e.target.value;
    const newParams = new URLSearchParams();
    newParams.set("sort_by", sortByQuery);
    newParams.set("order", newOrder);
    setSearchParams(newParams);
  }

  return (
    <div>
      <label htmlFor="dropdown">Sort by:</label>
      <select
        id="dropdown"
        onChange={handleSortByChange}
        value={sortByQuery || "created_at"}
      >
        {sortByGreenList.map((sortOption, index) => {
          return (
            <option key={index} value={sortOption}>
              {sortOption}
            </option>
          );
        })}
      </select>

      <label htmlFor="orderDropdown">Order:</label>
      <select
        id="orderDropdown"
        onChange={handleOrderByChange}
        value={orderQuery || "desc"}
      >
        {orderOption.map((orderOption, index) => {
          return (
            <option key={index} value={orderOption}>
              {orderOption}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortingDropdown;
