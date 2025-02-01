import { useEffect, useState } from "react";
import css from "./App.module.css";
import SerchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import api from "../api";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [imputValue, setInputValue] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const search = async () => {
      if (searchQuery.length === 0) return;
      try {
        setError(false);
        setLoading(true);
        const res = await api({ searchQuery, page });
        setArticles((prev) => [...prev, ...res.data.results]);
        setTotal(res.data.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [searchQuery, page]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setArticles([]);
    setPage(1);
    setSearchQuery(imputValue);
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className={css.container}>
      <SerchBar
        onSubmit={onSubmit}
        inputValue={imputValue}
        setInputValue={setInputValue}
      />
      {articles && <ImageGallery articles={articles} openModal={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {page < total && <LoadMoreBtn loadMore={loadMore} />}
      {selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            content: {
              background: "transparent",
              border: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            },
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                padding: "5px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                lineHeight: "1",
              }}
            >
              ✖
            </button>
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "10px",
              }}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
