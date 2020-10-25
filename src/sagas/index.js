import { all } from 'redux-saga/effects';
import {
  loginUserWatcher,
  getMeWatcher,
  registerUserWatcher,
} from './authSaga';
import {
  searchAnimeWatcher,
  addAnimeWatchlistWatcher,
  getAnimeWatchlistWatcher,
  deleteAnimeWatchlistWatcher,
  setAnimeStatusWatcher,
} from './animeSaga';

export default function* rootSaga() {
  yield all([
    loginUserWatcher(),
    getMeWatcher(),
    registerUserWatcher(),
    searchAnimeWatcher(),
    addAnimeWatchlistWatcher(),
    getAnimeWatchlistWatcher(),
    deleteAnimeWatchlistWatcher(),
    setAnimeStatusWatcher(),
  ]);
}
