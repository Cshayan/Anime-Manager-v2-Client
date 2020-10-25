import {
  GLO_ANIME_SEARCH_BLUR,
  GLO_ANIME_SEARCH_FOCUS,
  GLO_ANIME_SEARCH_START,
  GLO_ANIME_SEARCH_SUCCESS,
  GLO_ANIME_SEARCH_FAIL,
  GLO_SET_ANIME_TEXT,
} from "../constants/globalAnimeSearchConstant";
import { AUTH } from "../constants/authConstant";

const initialState = {
  animeText: "",
  isAnimeLoading: false,
  isSearchBarFocussed: false,
  searchResults: [],
  error: null,
};

export const globalAnimeSearchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GLO_ANIME_SEARCH_FOCUS:
      return {
        ...state,
        isSearchBarFocussed: true,
      };
    case GLO_ANIME_SEARCH_BLUR:
      return {
        ...state,
        isSearchBarFocussed: false,
      };
    case GLO_ANIME_SEARCH_START:
      return {
        ...state,
        isAnimeLoading: true,
        searchResults: [],
        error: null,
      };
    case GLO_ANIME_SEARCH_SUCCESS:
      return {
        ...state,
        isAnimeLoading: false,
        searchResults: payload.data,
        error: null,
      };
    case GLO_ANIME_SEARCH_FAIL:
      return {
        ...state,
        isAnimeLoading: false,
        searchResults: [],
        error: payload,
      };
    case GLO_SET_ANIME_TEXT:
      return {
        ...state,
        animeText: payload,
      };
    case AUTH.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
