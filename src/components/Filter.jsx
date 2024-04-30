const Filter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="filter">
      <div className="filter-options">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Todos
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Ativos
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Concluídos
        </button>
      </div>
      <div className="filter-bar">
        <button className={sort === "asc" ? "active" : ""} onClick={() => setSort("asc")}>Asc</button>
        <button className={sort === "desc" ? "active" : ""} onClick={() => setSort("desc")}>Desc</button>
      </div>
    </div>
  );
};

export default Filter;