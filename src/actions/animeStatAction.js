import {
  GET_ANIME_WATCHLIST_STAT_START,
  GET_ANIME_WATCHLIST_STAT_FAIL,
  GET_ANIME_WATCHLIST_STAT_SUCCESS,
} from 'constants/animeStatConstant';

export const getAnimeWatchlistStatAPIStart = (data) => ({
  type: GET_ANIME_WATCHLIST_STAT_START,
  payload: data,
});

export const getAnimeWatchlistStatAPISuccess = (data) => ({
  type: GET_ANIME_WATCHLIST_STAT_SUCCESS,
  payload: data,
});

export const getAnimeWatchlistStatAPIFail = (data) => ({
  type: GET_ANIME_WATCHLIST_STAT_FAIL,
  payload: data,
});
