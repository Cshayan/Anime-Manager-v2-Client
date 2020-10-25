/* Root Reducer to combine all the reducers */
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { snackBarReducer } from "./snackbarReducer";
import { drawerReducer } from "./drawerReducer";
import { globalAnimeSearchReducer } from "./globalAnimeSearchReducer";
import { darkModeReducer } from "./darkModeReducer";
import { dialogReducer } from "./dialogReducer";
import { animeReducer } from "./animeReducer";

export default combineReducers({
  auth: authReducer,
  snackBar: snackBarReducer,
  drawer: drawerReducer,
  globalAnimeSearch: globalAnimeSearchReducer,
  darkMode: darkModeReducer,
  dialog: dialogReducer,
  anime: animeReducer,
});
