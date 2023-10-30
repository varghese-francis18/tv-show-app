import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=04c7c03d0344439e16f1f2666546d202";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
