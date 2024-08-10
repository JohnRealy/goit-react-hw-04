import axios from "axios";
const API_KEY = "W3sW7W8ecbaQDhqbZ7j602qIs0WpCxzsiIrb5YQ84Sk";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
  client_id: API_KEY,
};

export default async function api(query, page) {
  const res = await axios.get("search/photos", {
    params: {
      page,
      query,
    },
  });
  return res;
}
