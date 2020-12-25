import { call, takeLatest, put } from 'redux-saga/effects';
import { GET_ANIME_WATCHLIST_STAT_START } from 'constants/animeStatConstant';
import {
  getAnimeWatchlistStatAPISuccess,
  getAnimeWatchlistStatAPIFail,
} from 'actions/animeStatAction';
import { snackBarOpen } from 'actions/snackbarAction';
import { getAnimeWatchlistStat } from 'services/animeService';

/* Worker Saga */
function* getAnimeWatchlistStatWorker() {
  try {
    const { data = {} } = yield call(getAnimeWatchlistStat);
    yield put(getAnimeWatchlistStatAPISuccess(data));
  } catch (err) {
    yield put(getAnimeWatchlistStatAPIFail());
    yield put(snackBarOpen('Failed to load the anime watchlist stat', 'error'));
  }
}

/* Watcher saga */
export function* getAnimeWatchlistStatWatcher() {
  yield takeLatest(GET_ANIME_WATCHLIST_STAT_START, getAnimeWatchlistStatWorker);
}
