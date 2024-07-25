import axios from "axios";
import { IMoviesResponse } from "../types.ts";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Discover Movies
const discoverMoviesUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}`;

// Search Movies
const searchMoviesUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

// Movie Details
const movieDetailsUrl = (movieId: number) =>
  `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;

export const fetchDiscoverMovies = async () => {
  try {
    const response = await axios.get(discoverMoviesUrl);
    return response.data as IMoviesResponse;
  } catch (error) {
    console.error("Error fetching discovered movies:", error);
    throw error;
  }
};

export const fetchSearchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${searchMoviesUrl}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(movieDetailsUrl(movieId));
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
