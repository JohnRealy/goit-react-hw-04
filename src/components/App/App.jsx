import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import api from "../api";
import { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // async function fetchArticles() {
  //   const response = await axios.get(api(searchQuery));
  //   setArticles(response.data.hits);
  //   console.log(response);
  // }
  const serchPhoto = (query) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      api(query).then((res) => setArticles(res));
      // setArticles(data);
      // console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={css.container}>
      <h1>AppStart</h1>
      <SearchBar serchPhoto={serchPhoto} />
      {loading && <Loader />}
      {articles.total > 0 && <ImageGallery images={articles} />}
      <Toaster />
    </div>
  );
}
