const SortBy = ({ setSearchParams, setOrder }) => {
  const options = [
    "",
    "comment_count",
    "created_at",
    "votes",
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
            return <option key={option}>{option}</option>;
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
