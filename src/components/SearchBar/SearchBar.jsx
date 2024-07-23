import { CiSearch } from "react-icons/ci";

export default function SearchBar({ searchQuery, onChange, serchPhoto }) {
  const updateSearch = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <header>
      <form onSubmit={serchPhoto}>
        <input
          onChange={updateSearch}
          type="text"
          value={searchQuery}
          placeholder="Search images and photos"
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
