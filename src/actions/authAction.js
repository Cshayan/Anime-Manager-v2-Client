import { AUTH } from '../constants/authConstant';

export const loginAPIStart = (data) => ({
  type: AUTH.LOGIN_API_START,
  payload: data,
});

export const loginAPISuccess = (data) => ({
  type: AUTH.LOGIN_API_SUCCESS,
  payload: data,
});

export const loginAPIFail = (data) => ({
  type: AUTH.LOGIN_API_FAIL,
  payload: data,
});

export const registerAPIStart = (data) => ({
  type: AUTH.REGISTER_API_START,
  payload: data,
});

export const registerAPISuccess = (data) => ({
  type: AUTH.REGISTER_API_SUCCESS,
  payload: data,
});

export const registerAPIFail = (data) => ({
  type: AUTH.REGISTER_API_FAIL,
  payload: data,
});

export const getMeAPISuccess = (data) => ({
  type: AUTH.GET_ME_API_SUCCESS,
  payload: data,
});

export const getMeAPIFail = (data) => ({
  type: AUTH.GET_ME_API_FAIL,
  payload: data,
});

export const verifyAccountAPIStart = (data) => ({
  type: AUTH.VERIFY_ACCOUNT_START,
  payload: data,
});

export const verifyAccountAPISuccess = (data) => ({
  type: AUTH.VERIFY_ACCOUNT_SUCCESS,
  payload: data,
});

export const verifyAccountAPIFail = (data) => ({
  type: AUTH.VERIFY_ACCOUNT_FAIL,
  payload: data,
});

export const forgotPasswordStart = (data) => ({
  type: AUTH.FORGOT_PASSWORD_START,
  payload: data,
});

export const forgotPasswordSuccess = (data) => ({
  type: AUTH.FORGOT_PASSWORD_SUCCESS,
  payload: data,
});

export const forgotPasswordFail = (data) => ({
  type: AUTH.FORGOT_PASSWORD_FAIL,
  payload: data,
});

export const resetPasswordStart = (data) => ({
  type: AUTH.RESET_PASSWORD_START,
  payload: data,
});

export const resetPasswordSuccess = (data) => ({
  type: AUTH.RESET_PASSWORD_SUCCESS,
  payload: data,
});

export const resetPasswordFail = (data) => ({
  type: AUTH.RESET_PASSWORD_FAIL,
  payload: data,
});

export const uploadProfilePicStart = (data) => ({
  type: AUTH.UPLOAD_PROFILE_PIC_START,
  payload: data,
});

export const uploadProfilePicSuccess = (data) => ({
  type: AUTH.UPLOAD_PROFILE_PIC_SUCCESS,
  payload: data,
});

export const uploadProfilePicFail = (data) => ({
  type: AUTH.UPLOAD_PROFILE_PIC_FAIL,
  payload: data,
});

export const logOutUserStart = () => ({
  type: AUTH.LOGOUT_USER_START,
});

export const logOutUserSuccess = () => ({
  type: AUTH.LOGOUT_USER_SUCCESS,
});
