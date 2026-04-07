const Search = ({ handleSearchChange, query }) => {
    return (
        <div>
            Enter Search Query:{" "}
            <input value={query} onChange={handleSearchChange}></input>
        </div>
    );
};

export default Search;
