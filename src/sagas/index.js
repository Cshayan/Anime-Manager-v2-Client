import { all } from 'redux-saga/effects';
import {
  loginUserWatcher,
  registerUserWatcher,
  verifyAccountWatcher,
  forgotPasswordWatcher,
  resetPasswordWatcher,
  uploadProfilePicWatcher,
} from './authSaga';
import {
  searchAnimeWatcher,
  addAnimeWatchlistWatcher,
  deleteAnimeWatchlistWatcher,
  setAnimeStatusWatcher,
  getAnimeDetailsWatcher,
  getAnimeReviewWatcher,
  setAnimeVideoURLWatcher,
} from './animeSaga';
import { getAnimeWatchlistStatWatcher } from './animeStatSaga';

export default function* rootSaga() {
  yield all([
    loginUserWatcher(),
    registerUserWatcher(),
    verifyAccountWatcher(),
    forgotPasswordWatcher(),
    resetPasswordWatcher(),
    uploadProfilePicWatcher(),
    searchAnimeWatcher(),
    addAnimeWatchlistWatcher(),
    deleteAnimeWatchlistWatcher(),
    setAnimeStatusWatcher(),
    getAnimeDetailsWatcher(),
    getAnimeReviewWatcher(),
    getAnimeWatchlistStatWatcher(),
    setAnimeVideoURLWatcher(),
  ]);
}
