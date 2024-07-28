import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image) => {
        console.log(image);
        return (
          <li key={image.id}>
            <ImageCard img={image} />
          </li>
        );
      })}
    </ul>
  );
}
