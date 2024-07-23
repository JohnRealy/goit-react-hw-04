import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import api from "../api";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("Dog");
  useEffect(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery]);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchArticles() {
    const response = await axios.get(api(searchQuery));
    setArticles(response.data.hits);
    console.log(response);
  }
  const serchPhoto = async (query) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticles(query);
      setArticles(data);
      console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={css.container}>
      <h1>AppStart</h1>
      <SearchBar
        searchQuery={searchQuery}
        onChange={setSearchQuery}
        serchPhoto={serchPhoto}
      />
    </div>
  );
}
