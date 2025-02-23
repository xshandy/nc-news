function SortingDropdown({ setSearchParams, orderQuery, sortByQuery }) {
  const sortOptions = [
    { value: "created_at", label: "Date" },
    { value: "votes", label: "Votes" },
    { value: "comment_count", label: "Comments" },
  ];

  const orderOptions = [
    { value: "desc", label: "Descending" },
    { value: "asc", label: "Ascending" },
  ];

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
    <div className="sorting-container">
      <label htmlFor="dropdown">Sort by:</label>
      <select
        id="dropdown"
        onChange={handleSortByChange}
        value={sortByQuery || "created_at"}
      >
        {sortOptions.map(({ value, label }, index) => {
          return (
            <option key={index} value={value}>
              {label}
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
        {orderOptions.map(({ value, label }, index) => {
          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortingDropdown;
