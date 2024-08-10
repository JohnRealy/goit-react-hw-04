export default function LoadMoreBtn({ loadMore, children }) {
  return (
    <button type="button" onClick={loadMore}>
      {children}
    </button>
  );
}
