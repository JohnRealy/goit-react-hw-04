import css from "./ImageCard.module.css";

export default function ImageCard({ img, openModal }) {
  const urls = img.urls;
  return (
    <img
      className={css.img}
      onClick={() => openModal(img)}
      src={urls.small}
      alt={img.alt_description}
    />
  );
}
