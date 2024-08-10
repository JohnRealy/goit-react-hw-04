import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import api from "../api";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const serchPhoto = async () => {
      if (searchQuery.length === 0) return;
      try {
        setError(false);
        setLoading(true);
        const data = (await api(searchQuery, page)).data;
        setArticles((prev) => [...prev, ...data.results]);
        setTotal(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    serchPhoto();
  }, [searchQuery, page]);

  const serchPhoto = (query) => {
    setSearchQuery(query);
    setArticles([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={css.container}>
      <h1>AppStart</h1>
      {total > page && !loading && (
        <LoadMoreBtn loadMore={loadMore}>Load more.</LoadMoreBtn>
      )}
      <SearchBar serchPhoto={serchPhoto} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery images={articles} />}
      <Toaster />
    </div>
  );
}
