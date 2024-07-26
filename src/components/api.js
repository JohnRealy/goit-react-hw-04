import axios from "axios";
import toast from "react-hot-toast";

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
  console.log(options);
  return fetch(`${BASE_URL}${END_POINT}/?${options}`).then((res) => {
    if (!res.ok) {
      return toast.error("ERROR");
    }
    return res.json();
  });
}
