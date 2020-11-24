/* Saga file to handle anime data */
import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { GLO_ANIME_SEARCH_START } from '../constants/globalAnimeSearchConstant';
import {
  ADD_ANIME_WATCHLIST_START,
  GET_ANIME_WATCHLIST_START,
  DELETE_ANIME_WATCHLIST_START,
  ANIME_STATUS_SAVE_START,
  GET_ANIME_DETAILS_START,
  GET_ANIME_REVIEW_START,
} from '../constants/animeConstant';
import {
  animeSearchSuccess,
  animeSearchFail,
} from '../actions/globalAnimeSearchAction';
import {
  addAnimeWatchlistSuccess,
  addAnimeWatchlistFail,
  getAnimeWatchlistSuccess,
  getAnimeWatchlistFail,
  deleteAnimeWatchlistSuccess,
  deleteAnimeWatchlistFail,
  animeStatusSaveSuccess,
  animeStatusSaveFail,
  getAnimeDetailsSuccess,
  getAnimeDetailsFail,
  getAnimeReviewSuccess,
  getAnimeReviewFail,
} from '../actions/animeAction';
import { snackBarOpen } from '../actions/snackbarAction';
import {
  searchAnime,
  addAnimeWatchlist,
  getAnimeWatchlist,
  deleteAnimeWatchlist,
  saveAnimeStatus,
  getAnimeDetails,
  getAnimeReview,
} from '../services/animeService';

/* Worker Saga */
function* searchAnimeWorker(action) {
  const { payload } = action;
  yield delay(1500);
  try {
    const { data } = yield call(searchAnime, payload);
    yield put(animeSearchSuccess(data));
  } catch (err) {
    yield put(animeSearchFail('Failed to search the anime.'));
  }
}

function* addAnimeWatchlistWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(addAnimeWatchlist, payload);
    yield put(addAnimeWatchlistSuccess(data));
    yield put(snackBarOpen(data.msg, 'success'));
  } catch (err) {
    yield put(
      addAnimeWatchlistFail(
        'Anime cannot be added to the watchlist. Try again.',
      ),
    );
    yield put(
      snackBarOpen(
        'Anime cannot be added to the watchlist. Try again.',
        'error',
      ),
    );
  }
}

function* getAnimeWatchlistWorker() {
  try {
    const { data } = yield call(getAnimeWatchlist);
    yield put(getAnimeWatchlistSuccess(data));
  } catch (err) {
    yield put(
      getAnimeWatchlistFail('Anime watchlist cannot be fetched from server.'),
    );
  }
}

function* deleteAnimeWatchlistWorker(action) {
  try {
    const { payload } = action;
    const { data } = yield call(deleteAnimeWatchlist, payload);
    yield put(deleteAnimeWatchlistSuccess(payload));
    yield put(snackBarOpen(data.msg, 'success'));
  } catch (err) {
    yield put(
      deleteAnimeWatchlistFail(
        'Failed to delete the anime from the watchlist.',
      ),
    );
    yield put(
      snackBarOpen('Failed to delete the anime from the watchlist.', 'error'),
    );
  }
}

function* setAnimeStatusWorker(action) {
  const {
    payload: { animeId, statusValue },
  } = action;
  try {
    yield call(saveAnimeStatus, animeId, statusValue);
    yield put(animeStatusSaveSuccess({ animeId, statusValue }));
    yield put(snackBarOpen('Anime status updated successfully.', 'success'));
  } catch (err) {
    yield put(animeStatusSaveFail());
    yield put(
      snackBarOpen(
        'Cannot update the status. Please try again later.',
        'error',
      ),
    );
  }
}

function* getAnimeDetailsWorker(action) {
  const { payload } = action;
  try {
    const { data = {} } = yield call(getAnimeDetails, payload);
    yield put(getAnimeDetailsSuccess(data));
  } catch (err) {
    yield put(getAnimeDetailsFail());
    yield put(
      snackBarOpen(
        'Failed to load the anime details. Please try again later.',
        'error',
      ),
    );
  }
}

function* getAnimeReviewWorker(action) {
  const { payload } = action;
  delay(2000);
  try {
    const { data: { data: { reviews = [] } = {} } = {} } = yield call(
      getAnimeReview,
      payload,
    );
    yield put(
      getAnimeReviewSuccess({
        reviews,
        message: 'Reviews fetched successfully!',
      }),
    );
  } catch (err) {
    yield put(getAnimeReviewFail({ message: 'Failed to load the reviews!' }));
    yield put(snackBarOpen('Failed to load the anime reviews.', 'error'));
  }
}

/* Watcher Saga */
export function* searchAnimeWatcher() {
  yield takeLatest(GLO_ANIME_SEARCH_START, searchAnimeWorker);
}

export function* addAnimeWatchlistWatcher() {
  yield takeLatest(ADD_ANIME_WATCHLIST_START, addAnimeWatchlistWorker);
}

export function* getAnimeWatchlistWatcher() {
  yield takeLatest(GET_ANIME_WATCHLIST_START, getAnimeWatchlistWorker);
}

export function* deleteAnimeWatchlistWatcher() {
  yield takeLatest(DELETE_ANIME_WATCHLIST_START, deleteAnimeWatchlistWorker);
}

export function* setAnimeStatusWatcher() {
  yield takeLatest(ANIME_STATUS_SAVE_START, setAnimeStatusWorker);
}

export function* getAnimeDetailsWatcher() {
  yield takeLatest(GET_ANIME_DETAILS_START, getAnimeDetailsWorker);
}

export function* getAnimeReviewWatcher() {
  yield takeLatest(GET_ANIME_REVIEW_START, getAnimeReviewWorker);
}
