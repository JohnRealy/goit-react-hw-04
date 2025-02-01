import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;

if (!API_KEY) {
  console.error(
    "API ключ не знайдено! Переконайтесь, що він доданий у Vercel."
  );
}

export default function api({ searchQuery, page }) {
  axios.defaults.baseURL = "https://api.unsplash.com/";
  axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
  return axios.get(
    `search/photos?query=${searchQuery}&per_page=12&orientation=landscape&page=${page}`
  );
}
