/* Root Reducer to combine all the reducers */
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { snackBarReducer } from './snackbarReducer';
import { drawerReducer } from './drawerReducer';
import { globalAnimeSearchReducer } from './globalAnimeSearchReducer';
import { darkModeReducer } from './darkModeReducer';
import { dialogReducer } from './dialogReducer';
import { animeReducer } from './animeReducer';
import { animeFilterReducer } from './animeFilterSortReducer';
import { animeDetailsReducer } from './animeDetailsReducer';
import { animeReviewReducer } from './animeReviewsReducer';

export default combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  drawer: drawerReducer,
  globalAnimeSearch: globalAnimeSearchReducer,
  darkMode: darkModeReducer,
  dialog: dialogReducer,
  anime: animeReducer,
  animeFilter: animeFilterReducer,
  animeDetails: animeDetailsReducer,
  animeReview: animeReviewReducer,
});
