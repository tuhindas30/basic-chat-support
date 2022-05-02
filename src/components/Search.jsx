const Search = ({ input, onInput }) => {
  return (
    <input type="text" value={input} onChange={onInput} className="search" />
  );
};

export default Search;
