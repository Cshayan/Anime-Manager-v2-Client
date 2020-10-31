import { SET_ANIME_FILTER } from 'constants/animeConstant';
const initialState = {
  selectedFilter: 'Total',
  filteredWatchlist: [],
};

export const animeFilterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ANIME_FILTER:
      return {
        ...state,
        selectedFilter: payload.filterType,
        filteredWatchlist: payload.filterValue,
      };
    default:
      return state;
  }
};
