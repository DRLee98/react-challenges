import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "61a2f763d465c6c6fcb3bc9d89d640c9",
  },
});

export const moviesApi = {
  nowPlaying: (page = 1) => api.get("movie/now_playing", { params: { page } }),
  upcoming: (page = 1) => api.get("movie/upcoming", { params: { page } }),
  popular: (page = 1) => api.get("movie/popular", { params: { page } }),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  movieCredits: (id) => api.get(`movie/${id}/credits`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: (page = 1) => api.get("tv/top_rated", { params: { page } }),
  popular: (page = 1) => api.get("tv/popular", { params: { page } }),
  airingToday: (page = 1) => api.get("tv/airing_today", { params: { page } }),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  showCredits: (id) => api.get(`tv/${id}/credits`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const collection = (id) => api.get(`collection/${id}`);
