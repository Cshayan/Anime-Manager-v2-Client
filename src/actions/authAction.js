import { AUTH } from "../constants/authConstant";

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

export const getMeAPIStart = (data) => ({
  type: AUTH.GET_ME_API_START,
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

export const logOutUserStart = () => ({
  type: AUTH.LOGOUT_USER_START,
});

export const logOutUserSuccess = () => ({
  type: AUTH.LOGOUT_USER_SUCCESS,
});
