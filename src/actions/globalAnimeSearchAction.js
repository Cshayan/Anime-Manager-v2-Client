import {
  GLO_ANIME_SEARCH_BLUR,
  GLO_ANIME_SEARCH_FOCUS,
  GLO_ANIME_SEARCH_START,
  GLO_ANIME_SEARCH_SUCCESS,
  GLO_ANIME_SEARCH_FAIL,
  GLO_SET_ANIME_TEXT,
} from "../constants/globalAnimeSearchConstant";

export const animeSearchBarFocus = () => ({ type: GLO_ANIME_SEARCH_FOCUS });

export const animeSearchBarBlur = () => ({ type: GLO_ANIME_SEARCH_BLUR });

export const setAnimeText = (data) => ({
  type: GLO_SET_ANIME_TEXT,
  payload: data,
});

export const animeSearchStart = (data) => ({
  type: GLO_ANIME_SEARCH_START,
  payload: data,
});

export const animeSearchSuccess = (data) => ({
  type: GLO_ANIME_SEARCH_SUCCESS,
  payload: data,
});

export const animeSearchFail = (data) => ({
  type: GLO_ANIME_SEARCH_FAIL,
  payload: data,
});
