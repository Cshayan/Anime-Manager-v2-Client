import {
  ADD_ANIME_WATCHLIST_START,
  ADD_ANIME_WATCHLIST_SUCCESS,
  ADD_ANIME_WATCHLIST_FAIL,
  GET_ANIME_WATCHLIST_START,
  GET_ANIME_WATCHLIST_SUCCESS,
  GET_ANIME_WATCHLIST_FAIL,
  SET_ANIME_ID,
  DELETE_ANIME_WATCHLIST_SUCCESS,
  DELETE_ANIME_WATCHLIST_FAIL,
  SET_ANIME_DIALOG_DETAIL,
  ANIME_STATUS_SAVE_SUCCESS,
} from '../constants/animeConstant';

const initialState = {
  isAnimeLoading: false,
  watchlist: [],
  animeAddMessage: null,
  animeAddError: null,
  animeGetMessage: null,
  animeGetError: null,
  animeIdToDelete: '',
  animeDeleteMessage: null,
  animeDeleteError: null,
  animeDialogDetail: {},
};

export const animeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ANIME_WATCHLIST_START:
      return {
        ...state,
        animeAddMessage: null,
        addAnimeError: null,
        animeIdToDelete: '',
      };
    case ADD_ANIME_WATCHLIST_SUCCESS:
      return {
        ...state,
        animeAddMessage: payload.msg,
        animeAddError: null,
        watchlist: [payload.data, ...state.watchlist],
        animeIdToDelete: '',
      };
    case ADD_ANIME_WATCHLIST_FAIL:
      return {
        ...state,
        animeAddMessage: null,
        animeAddError: payload.error,
        animeIdToDelete: '',
      };
    case GET_ANIME_WATCHLIST_START:
      return {
        ...state,
        isAnimeLoading: true,
        animeGetMessage: null,
        animeGetError: null,
        animeIdToDelete: '',
      };
    case GET_ANIME_WATCHLIST_SUCCESS:
      return {
        ...state,
        isAnimeLoading: false,
        animeGetMessage: 'Anime watchlist fetched successfully!',
        animeGetError: null,
        watchlist: payload.data,
        animeIdToDelete: '',
      };
    case GET_ANIME_WATCHLIST_FAIL:
      return {
        ...state,
        isAnimeLoading: false,
        animeGetMessage: null,
        animeGetError: 'Error in fetching Anime watchlist',
        watchlist: [],
        animeIdToDelete: '',
      };
    case SET_ANIME_ID:
      return {
        ...state,
        animeIdToDelete: payload,
      };
    case DELETE_ANIME_WATCHLIST_SUCCESS:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (currentWatchlist) => currentWatchlist._id !== payload,
        ),
        animeDeleteMessage: 'Anime deleted from your watchlist!',
        animeDeleteError: null,
      };
    case DELETE_ANIME_WATCHLIST_FAIL:
      return {
        ...state,
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
    default:
      return state;
  }
};
