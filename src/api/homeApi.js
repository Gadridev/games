
import axios from "axios";

const API_KEY = "6d8f985d2998436da508ccefc6478027";
const BASE_URL = "https://api.rawg.io/api";

export const fetchTrendingGames = async () => {
  const res = await axios.get(
    `${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=6`);
  return res.data.results;
};

export const fetchTopRatedGames = async () => {
  const res = await axios.get(
    `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=3`
  );
  return res.data.results;
};

export const fetchSpotlightGame = async () => {
  const res = await axios.get(
    `${BASE_URL}/games/3497?key=${API_KEY}` 
  );
  return res.data;
};