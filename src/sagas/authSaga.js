/* Saga file to handle authentication */
import { call, takeLatest, put } from 'redux-saga/effects';
import { AUTH } from '../constants/authConstant';
import {
  loginAPISuccess,
  loginAPIFail,
  registerAPIFail,
  registerAPISuccess,
  logOutUserSuccess,
  verifyAccountAPISuccess,
  verifyAccountAPIFail,
  forgotPasswordSuccess,
  forgotPasswordFail,
  resetPasswordSuccess,
  resetPasswordFail,
  uploadProfilePicSuccess,
  uploadProfilePicFail,
} from '../actions/authAction';
import {
  snackBarOpen,
  backDropOpen,
  backDropClose,
} from '../actions/snackbarAction';
import { APIS } from '../services/authService';

/* Worker Saga */
function* registerUserWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(APIS.registerUser, payload);
    yield put(registerAPISuccess(data));
    yield put(snackBarOpen(data?.message, 'success'));
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

function* verifyAccountWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(APIS.verifyAccount, payload);
    yield put(verifyAccountAPISuccess());
    yield put(snackBarOpen(data?.message, 'success'));
  } catch (err) {
    yield put(verifyAccountAPIFail());
    yield put(snackBarOpen(err.response.data.error, 'error'));
  }
}

function* forgotPasswordWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(APIS.forgotPassword, payload);
    yield put(
      forgotPasswordSuccess({
        message:
          'Check your mail! We have sent you a link to reset your password.',
      }),
    );
    yield put(snackBarOpen(data?.message, 'success'));
  } catch (err) {
    yield put(forgotPasswordFail({ message: err.response.data.error }));
    yield put(snackBarOpen(err.response.data.error, 'error'));
  }
}

function* resetPasswordWorker(action) {
  const { payload } = action;
  try {
    const { data } = yield call(APIS.resetPassword, payload);
    yield put(resetPasswordSuccess());
    yield put(snackBarOpen(data?.message, 'success'));
  } catch (err) {
    yield put(resetPasswordFail());
    yield put(snackBarOpen(err.response.data.error, 'error'));
  }
}

function* logOutUserWorker() {
  yield put(logOutUserSuccess());
}

function* uploadProfilePicWorker(action) {
  const { payload } = action;
  try {
    yield put(backDropOpen());
    const { data } = yield call(APIS.updateProfilePic, payload);
    yield put(uploadProfilePicSuccess({ profilePicUrl: data?.profilePicUrl }));
    yield put(snackBarOpen(data?.message, 'success'));
  } catch (err) {
    yield put(uploadProfilePicFail());
    yield put(snackBarOpen(err.response.data.error, 'error'));
  } finally {
    yield put(backDropClose());
  }
}

/* Watcher Saga */
export function* loginUserWatcher() {
  yield takeLatest(AUTH.LOGIN_API_START, loginUserWorker);
}

export function* registerUserWatcher() {
  yield takeLatest(AUTH.REGISTER_API_START, registerUserWorker);
}

export function* verifyAccountWatcher() {
  yield takeLatest(AUTH.VERIFY_ACCOUNT_START, verifyAccountWorker);
}

export function* forgotPasswordWatcher() {
  yield takeLatest(AUTH.FORGOT_PASSWORD_START, forgotPasswordWorker);
}

export function* resetPasswordWatcher() {
  yield takeLatest(AUTH.RESET_PASSWORD_START, resetPasswordWorker);
}

export function* logOutUserWatcher() {
  yield takeLatest(AUTH.LOGOUT_USER_START, logOutUserWorker);
}

export function* uploadProfilePicWatcher() {
  yield takeLatest(AUTH.UPLOAD_PROFILE_PIC_START, uploadProfilePicWorker);
}
