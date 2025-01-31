import axios from "axios";

export default function api({ query }) {
  axios.defaults.baseURL = "https://api.unsplash.com/";
  axios.defaults.headers.common[
    "Authorization"
  ] = `Client-ID ${api.env.REACT_APP_UNSPLASH_KEY}`;
  return axios.get(`photos?query=${query}&per_page=12`);
}
