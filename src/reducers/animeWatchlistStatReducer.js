import {
  GET_ANIME_WATCHLIST_STAT_START,
  GET_ANIME_WATCHLIST_STAT_FAIL,
  GET_ANIME_WATCHLIST_STAT_SUCCESS,
} from 'constants/animeStatConstant';

const initialState = {
  isAnimeWatchlistStatsLoading: false,
};

export const animeWatchlistStatsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ANIME_WATCHLIST_STAT_START:
      return {
        ...state,
        isAnimeWatchlistStatsLoading: true,
      };
    case GET_ANIME_WATCHLIST_STAT_SUCCESS:
      return {
        ...state,
        isAnimeWatchlistStatsLoading: false,
        ...payload,
      };
    case GET_ANIME_WATCHLIST_STAT_FAIL:
      return {
        ...state,
        isAnimeWatchlistStatsLoading: false,
      };
    default:
      return state;
  }
};
