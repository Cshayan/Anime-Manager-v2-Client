import { AUTH } from '../constants/authConstant';
import { ANIME_TOKEN } from '../constants/url';

const initialState = {
  token: null,
  isUserLoading: false,
  isAuthenticated: false,
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
  isProfilePicUploading: false,
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
    case AUTH.GET_ME_API_SUCCESS:
      return {
        ...state,
        isUserLoading: false,
        isAuthenticated: true,
        user: payload.data,
        error: null,
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
    case AUTH.UPLOAD_PROFILE_PIC_START:
      return {
        ...state,
        isProfilePicUploading: true,
      };
    case AUTH.UPLOAD_PROFILE_PIC_SUCCESS:
      return {
        ...state,
        isProfilePicUploading: false,
        user: { ...state.user, profilePicUrl: payload.profilePicUrl },
      };
    case AUTH.UPLOAD_PROFILE_PIC_FAIL:
      return {
        ...state,
        isProfilePicUploading: false,
      };
    case AUTH.LOGOUT_USER_SUCCESS:
    case AUTH.RESET_ALL:
      localStorage.removeItem(ANIME_TOKEN);
      return initialState
    default:
      return state;
  }
};
