import { AUTH } from '../constants/authConstant';
import { ANIME_TOKEN } from '../constants/url';

const initialState = {
  token: localStorage.getItem(ANIME_TOKEN),
  isUserLoading: false,
  isAuthenticated: !!localStorage.getItem(ANIME_TOKEN),
  user: null,
  error: null,
  isUserLogging: false,
  isUserVerifying: false,
  isUserVerified: false,
  hasUserRegistered: false,
  isForgotAPIOn: false,
  forgotPasswordMessage: '',
  isResetPasswordAPIOn: false,
  isResetPasswordSuccess: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH.LOGIN_API_START:
    case AUTH.REGISTER_API_START:
      return {
        ...state,
        isAuthenticated: false,
        isUserLogging: true,
        hasUserRegistered: false,
      };
    case AUTH.LOGIN_API_SUCCESS:
      localStorage.setItem(ANIME_TOKEN, payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isUserLogging: false,
        isUserVerifed: true,
        ...payload,
        error: null,
      };
    case AUTH.REGISTER_API_SUCCESS:
      return {
        ...state,
        hasUserRegistered: true,
      };
    case AUTH.LOGIN_API_FAIL:
    case AUTH.REGISTER_API_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        isUserLogging: false,
        token: null,
        error: payload,
        hasUserRegistered: false,
      };
    case AUTH.GET_ME_API_START:
      return {
        ...state,
        isUserLoading: true,
      };
    case AUTH.GET_ME_API_SUCCESS:
      return {
        ...state,
        isUserLoading: false,
        isAuthenticated: true,
        user: payload.data,
        error: null,
      };
    case AUTH.GET_ME_API_FAIL:
      return {
        ...state,
        isUserLoading: false,
        isAuthenticated: false,
        error: payload,
        user: null,
      };
    case AUTH.VERIFY_ACCOUNT_START:
      return {
        ...state,
        isUserVerifying: true,
        isUserVerified: false,
      };
    case AUTH.VERIFY_ACCOUNT_SUCCESS:
      return {
        ...state,
        isUserVerifying: false,
        isUserVerified: true,
      };
    case AUTH.VERIFY_ACCOUNT_FAIL:
      return {
        ...state,
        isUserVerifying: false,
        isUserVerified: false,
      };
    case AUTH.FORGOT_PASSWORD_START:
      return {
        ...state,
        isForgotAPIOn: true,
        forgotPasswordMessage: '',
      };
    case AUTH.FORGOT_PASSWORD_SUCCESS:
    case AUTH.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isForgotAPIOn: false,
        forgotPasswordMessage: payload.message,
      };
    case AUTH.RESET_PASSWORD_START:
      return {
        ...state,
        isResetPasswordAPIOn: true,
        isResetPasswordSuccess: false,
      };
    case AUTH.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isResetPasswordAPIOn: false,
        isResetPasswordSuccess: true,
      };
    case AUTH.RESET_PASSWORD_FAIL:
      return {
        ...state,
        isResetPasswordAPIOn: false,
        isResetPasswordSuccess: false,
      };
    case AUTH.LOGOUT_USER_SUCCESS:
    case AUTH.RESET_ALL:
      localStorage.removeItem(ANIME_TOKEN);
      return initialState;
    default:
      return state;
  }
};
