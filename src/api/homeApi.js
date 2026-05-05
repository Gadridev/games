
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
    `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic&page_size=10`
  );
  return res.data.results;
};

export const fetchSpotlightGame = async () => {
  const res = await axios.get(
    `${BASE_URL}/games/3497?key=${API_KEY}` 
  );
  return res.data;
};

export const fetchGames = async (page = 1, pageSize = 12, ordering = "-rating", search = "", genres = "") => {
  let url = `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}&ordering=${ordering}`;
  if (search) url += `&search=${encodeURIComponent(search)}`;
  if (genres) url += `&genres=${genres}`;
  const res = await axios.get(url);
  return res.data;
};

export const fetchGenres = async () => {
  const res = await axios.get(`${BASE_URL}/genres?key=${API_KEY}`);
  return res.data.results;
};

export const fetchGameById = async (id) => {
  const res = await axios.get(`${BASE_URL}/games/${id}?key=${API_KEY}`);
  return res.data;
};

export const fetchGameDevelopers = async (id) => {
  const game = await fetchGameById(id);
  return game.developers || [];
};