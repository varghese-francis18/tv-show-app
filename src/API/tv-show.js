import axios from "axios";
import { FAKE_POPULARS } from "./fake_data";
import { BASE_URL, API_KEY } from "./config";

export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY}`);
    // console.log(response.data.results);
    // return response.data.results;
    return FAKE_POPULARS;
  }
}
