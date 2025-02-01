import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export default function api({ searchQuery, page }) {
  axios.defaults.baseURL = "https://api.unsplash.com/";
  axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
  return axios.get(
    `search/photos?query=${searchQuery}&per_page=12&orientation=landscape&page=${page}`
  );
}
