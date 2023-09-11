const SortBy = ({ setSearchParams, setOrder }) => {
  const options = [
    { value: "created_at", label: "Date posted" },
    { value: "comment_count", label: "Comment count" },
    { value: "votes", label: "Likes" },
  ];

  const handleChange = (event) => {
    event.preventDefault();
    setSearchParams(`?sort_by=${event.target.value}`);
  };

  return (
    <div className="sortby-container">
      <label htmlFor="sort">
        Sort by:
        <select name="sort" id="sort" onChange={handleChange}>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            setOrder("asc");
          }}
        >
          ⬆️
        </button>
        <button
          onClick={() => {
            setOrder("desc");
          }}
        >
          ⬇️
        </button>
      </label>
    </div>
  );
};

export default SortBy;
