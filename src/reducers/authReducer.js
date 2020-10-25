import { AUTH } from '../constants/authConstant';
import { ANIME_TOKEN } from '../constants/url';

const initialState = {
  token: localStorage.getItem(ANIME_TOKEN),
  isUserLoading: false,
  isAuthenticated: !!localStorage.getItem(ANIME_TOKEN),
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH.LOGIN_API_START:
    case AUTH.REGISTER_API_START:
      return {
        ...state,
        isAuthenticated: false,
      };
    case AUTH.LOGIN_API_SUCCESS:
    case AUTH.REGISTER_API_SUCCESS:
      localStorage.setItem(ANIME_TOKEN, payload.token);
      return {
        ...state,
        isAuthenticated: true,
        ...payload,
        error: null,
      };
    case AUTH.LOGIN_API_FAIL:
    case AUTH.REGISTER_API_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: payload,
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
    case AUTH.LOGOUT_USER_SUCCESS:
    case AUTH.RESET_ALL:
      localStorage.removeItem(ANIME_TOKEN);
      return {
        ...state,
        token: localStorage.getItem(ANIME_TOKEN),
        isUserLoading: false,
        isAuthenticated: !!localStorage.getItem(ANIME_TOKEN),
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
