import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ articles, openModal }) {
  return (
    <ul className={css.list}>
      {articles.map((image) => (
        <li key={image.id}>
          <ImageCard img={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
