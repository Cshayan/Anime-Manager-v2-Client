import { all } from 'redux-saga/effects';
import {
  loginUserWatcher,
  getMeWatcher,
  registerUserWatcher,
  verifyAccountWatcher,
} from './authSaga';
import {
  searchAnimeWatcher,
  addAnimeWatchlistWatcher,
  getAnimeWatchlistWatcher,
  deleteAnimeWatchlistWatcher,
  setAnimeStatusWatcher,
  getAnimeDetailsWatcher,
  getAnimeReviewWatcher,
} from './animeSaga';

export default function* rootSaga() {
  yield all([
    loginUserWatcher(),
    getMeWatcher(),
    registerUserWatcher(),
    verifyAccountWatcher(),
    searchAnimeWatcher(),
    addAnimeWatchlistWatcher(),
    getAnimeWatchlistWatcher(),
    deleteAnimeWatchlistWatcher(),
    setAnimeStatusWatcher(),
    getAnimeDetailsWatcher(),
    getAnimeReviewWatcher(),
  ]);
}
