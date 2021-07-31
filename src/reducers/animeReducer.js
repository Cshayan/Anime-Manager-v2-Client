import { AUTH } from 'constants/authConstant';
import {
  ADD_ANIME_WATCHLIST_START,
  ADD_ANIME_WATCHLIST_SUCCESS,
  ADD_ANIME_WATCHLIST_FAIL,
  GET_ANIME_WATCHLIST_SUCCESS,
  SET_ANIME_ID,
  DELETE_ANIME_WATCHLIST_START,
  DELETE_ANIME_WATCHLIST_SUCCESS,
  DELETE_ANIME_WATCHLIST_FAIL,
  SET_ANIME_DIALOG_DETAIL,
  ANIME_STATUS_SAVE_SUCCESS,
  SET_ANIME_VIDEO_URL_START,
  SET_ANIME_VIDEO_URL_SUCCESS,
  SET_ANIME_VIDEO_URL_FAIL,
} from '../constants/animeConstant';

const initialState = {
  isAnimeLoading: false,
  watchlist: [],
  shareWatchlistLink: '',
  animeAddMessage: null,
  animeAddError: null,
  animeGetMessage: null,
  animeGetError: null,
  animeIdToDelete: '',
  animeDeleteMessage: null,
  animeDeleteError: null,
  animeDialogDetail: {},
  isAnimeAdding: false,
  isAnimeDeleting: false,
  isAnimeVideoURLAdding: false,
};

export const animeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ANIME_WATCHLIST_START:
      return {
        ...state,
        isAnimeAdding: true,
        animeAddMessage: null,
        addAnimeError: null,
        animeIdToDelete: '',
      };
    case ADD_ANIME_WATCHLIST_SUCCESS:
      return {
        ...state,
        isAnimeAdding: false,
        animeAddMessage: payload.msg,
        animeAddError: null,
        watchlist: [payload.data, ...state.watchlist],
        animeIdToDelete: '',
      };
    case ADD_ANIME_WATCHLIST_FAIL:
      return {
        ...state,
        isAnimeAdding: false,
        animeAddMessage: null,
        animeAddError: payload.error,
        animeIdToDelete: '',
      };
    case GET_ANIME_WATCHLIST_SUCCESS:
      return {
        ...state,
        isAnimeLoading: false,
        animeGetMessage: 'Anime watchlist fetched successfully!',
        animeGetError: null,
        watchlist: payload.data,
        shareWatchlistLink: payload.shareWatchlistLink,
        animeIdToDelete: '',
      };
    case SET_ANIME_ID:
      return {
        ...state,
        animeIdToDelete: payload,
      };
    case DELETE_ANIME_WATCHLIST_START:
      return {
        ...state,
        isAnimeDeleting: true,
      };
    case DELETE_ANIME_WATCHLIST_SUCCESS:
      return {
        ...state,
        isAnimeDeleting: false,
        watchlist: state.watchlist.filter(
          (currentWatchlist) => currentWatchlist._id !== payload,
        ),
        animeDeleteMessage: 'Anime deleted from your watchlist!',
        animeDeleteError: null,
      };
    case DELETE_ANIME_WATCHLIST_FAIL:
      return {
        ...state,
        isAnimeDeleting: false,
        animeDeleteMessage: null,
        animeDeleteError: 'Failed to delete the anime from the watchlist!',
      };
    case SET_ANIME_DIALOG_DETAIL:
      return {
        ...state,
        animeDialogDetail: payload,
      };
    case ANIME_STATUS_SAVE_SUCCESS:
      return {
        ...state,
        watchlist: state.watchlist.map((list) =>
          list._id === payload.animeId
            ? { ...list, animeStatus: payload.statusValue }
            : list,
        ),
      };
    case SET_ANIME_VIDEO_URL_START:
      return {
        ...state,
        isAnimeVideoURLAdding: true,
      };
    case SET_ANIME_VIDEO_URL_SUCCESS:
      return {
        ...state,
        isAnimeVideoURLAdding: false,
        watchlist: state.watchlist.map((list) =>
          list._id === payload.animeId
            ? { ...list, urlToWatch: payload.urlToWatch }
            : list,
        ),
      };
    case SET_ANIME_VIDEO_URL_FAIL:
      return {
        ...state,
        isAnimeVideoURLAdding: false,
      };
    case AUTH.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
