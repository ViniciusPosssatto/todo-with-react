const Search = ({search, setSearch}) => {
    return <div className="search">
        <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite para pesquisar..."
            className="input-search"
        />
    </div>
};

export default Search;