import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";

export default function SearchBar({ serchPhoto }) {
  const [query, setQuery] = useState("");

  const updateSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return toast.error("Search query can't be empty");
    }
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
