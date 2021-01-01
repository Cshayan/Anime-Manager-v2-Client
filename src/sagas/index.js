import { all } from 'redux-saga/effects';
import {
  loginUserWatcher,
  getMeWatcher,
  registerUserWatcher,
  verifyAccountWatcher,
  forgotPasswordWatcher,
  resetPasswordWatcher,
} from './authSaga';
import {
  searchAnimeWatcher,
  addAnimeWatchlistWatcher,
  getAnimeWatchlistWatcher,
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
    getMeWatcher(),
    registerUserWatcher(),
    verifyAccountWatcher(),
    forgotPasswordWatcher(),
    resetPasswordWatcher(),
    searchAnimeWatcher(),
    addAnimeWatchlistWatcher(),
    getAnimeWatchlistWatcher(),
    deleteAnimeWatchlistWatcher(),
    setAnimeStatusWatcher(),
    getAnimeDetailsWatcher(),
    getAnimeReviewWatcher(),
    getAnimeWatchlistStatWatcher(),
    setAnimeVideoURLWatcher(),
  ]);
}
