import { useState } from "react";
import css from "./App.module.css";
import SerchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import api from "../api";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const onSubmit = (e) => {
    e.preventDefault();
    setArticles(api({ inputValue, page }));
  };
  return (
    <div>
      <SerchBar onSubmit={(onSubmit, inputValue, setInputValue)} />
      <ImageGallery articles={articles} />
    </div>
  );
}
