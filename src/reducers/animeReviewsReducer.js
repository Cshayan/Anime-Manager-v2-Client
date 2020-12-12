import {
  GET_ANIME_REVIEW_START,
  GET_ANIME_REVIEW_SUCCESS,
  GET_ANIME_REVIEW_FAIL,
} from 'constants/animeConstant';

const initialState = {
  isReviewsLoading: false,
  reviews: [],
  message: null,
};

export const animeReviewReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ANIME_REVIEW_START:
      return {
        ...state,
        isReviewsLoading: true,
        reviews: [],
        message: null,
      };
    case GET_ANIME_REVIEW_SUCCESS:
      return {
        ...state,
        isReviewsLoading: false,
        reviews: payload.reviews,
        message: payload.message,
      };
    case GET_ANIME_REVIEW_FAIL:
      return {
        ...state,
        isReviewsLoading: false,
        reviews: [],
        message: payload.message,
      };
    default:
      return state;
  }
};
