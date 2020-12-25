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
  SET_ANIME_FILTER,
  GET_ANIME_DETAILS_START,
  GET_ANIME_DETAILS_SUCCESS,
  GET_ANIME_DETAILS_FAIL,
  GET_ANIME_REVIEW_START,
  GET_ANIME_REVIEW_SUCCESS,
  GET_ANIME_REVIEW_FAIL,
  SET_ANIME_VIDEO_URL_START,
  SET_ANIME_VIDEO_URL_SUCCESS,
  SET_ANIME_VIDEO_URL_FAIL,
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

export const setAnimeFilter = (payload) => ({
  type: SET_ANIME_FILTER,
  payload,
});

export const getAnimeDetailsStart = (payload) => ({
  type: GET_ANIME_DETAILS_START,
  payload,
});

export const getAnimeDetailsSuccess = (payload) => ({
  type: GET_ANIME_DETAILS_SUCCESS,
  payload,
});

export const getAnimeDetailsFail = (payload) => ({
  type: GET_ANIME_DETAILS_FAIL,
  payload,
});

export const getAnimeReviewStart = (payload) => ({
  type: GET_ANIME_REVIEW_START,
  payload,
});

export const getAnimeReviewSuccess = (payload) => ({
  type: GET_ANIME_REVIEW_SUCCESS,
  payload,
});

export const getAnimeReviewFail = (payload) => ({
  type: GET_ANIME_REVIEW_FAIL,
  payload,
});

export const setAnimeVideoURLStart = (payload) => ({
  type: SET_ANIME_VIDEO_URL_START,
  payload,
});

export const setAnimeVideoURLSuccess = (payload) => ({
  type: SET_ANIME_VIDEO_URL_SUCCESS,
  payload,
});

export const setAnimeVideoURLFail = (payload) => ({
  type: SET_ANIME_VIDEO_URL_FAIL,
  payload,
});
