import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.results.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard img={image} />
          </li>
        );
      })}
    </ul>
  );
}
