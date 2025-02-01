import css from "./SearchBar.module.css";
import { CgSearch } from "react-icons/cg";
export default function SearchBar({ onSubmit, setInputValue, inputValue }) {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <button className={css.btn} type="submit">
          <CgSearch className={css.icon} />
        </button>
        <input
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </header>
  );
}
