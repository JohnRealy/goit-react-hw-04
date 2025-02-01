import axios from "axios";

export default function api({ query, page }) {
  axios.defaults.baseURL = "https://api.unsplash.com/";
  axios.defaults.headers.common[
    "Authorization"
  ] = `Client-ID ${api.env.REACT_APP_UNSPLASH_KEY}`;
  return axios.get(
    `search/photos?query=${query}&per_page=12&orientation=landscape&page=${page}`
  );
}
