export default function ImageCard({ img }) {
  const urls = img.urls;
  return (
    <div>
      <img src={urls.small} alt={img.alt_desciption} />
    </div>
  );
}
