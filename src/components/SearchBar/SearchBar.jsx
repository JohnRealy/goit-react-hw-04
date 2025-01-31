export default function SearchBar({ onSubmit, setInputValue, inputValue }) {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
