export default function api(query, page = 1) {
  const API_KEY = "W3sW7W8ecbaQDhqbZ7j602qIs0WpCxzsiIrb5YQ84Sk";
  const BASE_URL = "https://api.unsplash.com";
  const END_POINT = "/search/photos";
  const params = {
    query,
    page,
    client_id: API_KEY,
  };
  const options = new URLSearchParams(params);

  return `${BASE_URL}${END_POINT}/?${options}`;
}
