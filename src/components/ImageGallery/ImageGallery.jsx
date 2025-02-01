import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({ articles }) {
  return (
    <ul>
      {articles.map((image) => (
        <li key={image.id}>
          <ImageCard />
        </li>
      ))}
    </ul>
  );
}
