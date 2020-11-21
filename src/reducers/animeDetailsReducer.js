import {
  GET_ANIME_DETAILS_START,
  GET_ANIME_DETAILS_SUCCESS,
  GET_ANIME_DETAILS_FAIL,
} from 'constants/animeConstant';

const initialState = {
  isAnimeDetailsLoading: false,
  details: {},
};

export const animeDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ANIME_DETAILS_START:
      return {
        ...state,
        isAnimeDetailsLoading: true,
        details: {},
      };
    case GET_ANIME_DETAILS_SUCCESS:
      return {
        ...state,
        isAnimeDetailsLoading: false,
        details: payload,
      };
    case GET_ANIME_DETAILS_FAIL:
      return {
        ...state,
        isAnimeDetailsLoading: false,
        details: {},
      };
    default:
      return state;
  }
};
