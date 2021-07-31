/* File to make the API calls here */
import api from 'api';
import { axiosInstance as axios } from '../api/api.instance';

export const searchAnime = (data) =>
  axios({
    method: 'POST',
    url: '/features/searchAnime',
    data: { animeName: data },
  });

export const addAnimeWatchlist = (data) =>
  axios({
    method: 'POST',
    url: '/features/addToWatchlist',
    data: { animeData: data },
  });

export const getAnimeWatchlist = () =>
  axios({
    method: 'GET',
    url: api.getAnimeWatchList,
  });

export const deleteAnimeWatchlist = (animeId) =>
  axios({
    method: 'DELETE',
    url: `/features/deleteFromWatchlist/${animeId}`,
  });

export const saveAnimeStatus = (animeId, status) =>
  axios({
    method: 'PUT',
    url: `/features/updateWatchlist/${animeId}`,
    data: { animeStatus: status },
  });

export const getAnimeDetails = (id) =>
  axios({
    method: 'GET',
    url: `features/anime-details/${id}`,
  });

export const getAnimeReview = (id) =>
  axios({
    method: 'GET',
    url: `features/anime-review/${id}`,
  });

export const getAnimeWatchlistStat = () =>
  axios({
    method: 'GET',
    url: '/features/getWatchlistStats',
  });

export const updateAnimeDetails = (animeId, data) =>
  axios({
    method: 'PUT',
    url: `/features/updateWatchlist/${animeId}`,
    data,
  });

export const getUserWatchlistAPI = (data) =>
  axios({
    method: 'POST',
    url: '/features/getUserWatchlist',
    data,
  });

export const getTopAnimesAPI = (page = 1, type = 'airing', limit = 8) =>
  axios({
    method: 'GET',
    url: `/features/top-animes/anime/${page}/${type}/${limit}`,
  });

export const getSeasonAnimesAPI = (year, season, limit = 8) =>
  axios({
    method: 'GET',
    url: `/features/season-animes/anime/${year}/${season}/${limit}`,
  });
