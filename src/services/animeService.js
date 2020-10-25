/* File to make the API calls here */
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
    url: '/features/getWatchlist',
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
