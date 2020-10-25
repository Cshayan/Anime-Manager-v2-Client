/* Saga file to handle authentication */
import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { AUTH } from '../constants/authConstant';
import {
  loginAPISuccess,
  loginAPIFail,
  getMeAPISuccess,
  getMeAPIFail,
  registerAPIFail,
  registerAPISuccess,
  logOutUserSuccess,
} from '../actions/authAction';
import { snackBarOpen } from '../actions/snackbarAction';
import { APIS } from '../services/authService';

/* Worker Saga */
function* getMeWorker() {
  try {
    yield delay(2000);
    const { data } = yield call(APIS.getMe);
    yield put(getMeAPISuccess(data));
  } catch (err) {
    yield put(getMeAPIFail(err.response.data));
    yield put(snackBarOpen(err.response.data.error, 'info'));
  }
}

function* registerUserWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(APIS.registerUser, payload);
    yield put(registerAPISuccess(data));
  } catch (err) {
    yield put(registerAPIFail(err.response.data));
    yield put(snackBarOpen(err.response.data.error, 'info'));
  }
}

function* loginUserWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(APIS.loginUser, payload);
    yield put(loginAPISuccess(data));
  } catch (err) {
    yield put(loginAPIFail(err.response.data));
    yield put(snackBarOpen(err.response.data.error, 'info'));
  }
}

function* logOutUserWorker() {
  yield put(logOutUserSuccess());
}

/* Watcher Saga */
export function* loginUserWatcher() {
  yield takeLatest(AUTH.LOGIN_API_START, loginUserWorker);
}

export function* registerUserWatcher() {
  yield takeLatest(AUTH.REGISTER_API_START, registerUserWorker);
}

export function* getMeWatcher() {
  yield takeLatest(AUTH.GET_ME_API_START, getMeWorker);
}

export function* logOutUserWatcher() {
  yield takeLatest(AUTH.LOGOUT_USER_START, logOutUserWorker);
}
