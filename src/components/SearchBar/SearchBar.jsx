import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ serchPhoto }) {
  const [query, setQuery] = useState("");

  const updateSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    serchPhoto(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={updateSearch}
          type="text"
          value={query}
          placeholder="Search images and photos"
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
