import {
  ADD_ANIME_WATCHLIST_START,
  ADD_ANIME_WATCHLIST_SUCCESS,
  ADD_ANIME_WATCHLIST_FAIL,
  GET_ANIME_WATCHLIST_START,
  GET_ANIME_WATCHLIST_SUCCESS,
  GET_ANIME_WATCHLIST_FAIL,
  SET_ANIME_ID,
  DELETE_ANIME_WATCHLIST_START,
  DELETE_ANIME_WATCHLIST_SUCCESS,
  DELETE_ANIME_WATCHLIST_FAIL,
  SET_ANIME_DIALOG_DETAIL,
  ANIME_STATUS_SAVE_START,
  ANIME_STATUS_SAVE_SUCCESS,
  ANIME_STATUS_SAVE_FAIL,
} from '../constants/animeConstant';

export const addAnimeWatchlistStart = (payload) => ({
  type: ADD_ANIME_WATCHLIST_START,
  payload,
});

export const addAnimeWatchlistSuccess = (payload) => ({
  type: ADD_ANIME_WATCHLIST_SUCCESS,
  payload,
});

export const addAnimeWatchlistFail = (payload) => ({
  type: ADD_ANIME_WATCHLIST_FAIL,
  payload,
});

export const getAnimeWatchlistStart = () => ({
  type: GET_ANIME_WATCHLIST_START,
});

export const getAnimeWatchlistSuccess = (payload) => ({
  type: GET_ANIME_WATCHLIST_SUCCESS,
  payload,
});

export const getAnimeWatchlistFail = (payload) => ({
  type: GET_ANIME_WATCHLIST_FAIL,
  payload,
});

export const setAnimeIdToDelete = (payload) => ({
  type: SET_ANIME_ID,
  payload,
});

export const deleteAnimeWatchlistStart = (payload) => ({
  type: DELETE_ANIME_WATCHLIST_START,
  payload,
});

export const deleteAnimeWatchlistSuccess = (payload) => ({
  type: DELETE_ANIME_WATCHLIST_SUCCESS,
  payload,
});

export const deleteAnimeWatchlistFail = (payload) => ({
  type: DELETE_ANIME_WATCHLIST_FAIL,
  payload,
});

export const setAnimeDialogDetail = (payload) => ({
  type: SET_ANIME_DIALOG_DETAIL,
  payload,
});

export const animeStatusSaveStart = (payload) => ({
  type: ANIME_STATUS_SAVE_START,
  payload,
});

export const animeStatusSaveSuccess = (payload) => ({
  type: ANIME_STATUS_SAVE_SUCCESS,
  payload,
});

export const animeStatusSaveFail = (payload) => ({
  type: ANIME_STATUS_SAVE_FAIL,
  payload,
});
