import {
  THEME_DIALOG_CLOSE,
  THEME_DIALOG_OPEN,
  LOGOUT_DIALOG_OPEN,
  LOGOUT_DIALOG_CLOSE,
  ANIME_DELETE_DIALOG_OPEN,
  ANIME_DELETE_DIALOG_CLOSE,
  ANIME_DETAIL_DIALOG_OPEN,
  ANIME_DETAIL_DIALOG_CLOSE,
} from '../constants/dialogConstant';
import { AUTH } from '../constants/authConstant';

const initialState = {
  isThemeDialogOpen: false,
  isLogoutDialogOpen: false,
  isAnimeDeleteDialogOpen: false,
  isAnimeDetailDialogOpen: false,
};

export const dialogReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case THEME_DIALOG_OPEN:
      return {
        ...state,
        isThemeDialogOpen: true,
      };
    case THEME_DIALOG_CLOSE:
      return {
        ...state,
        isThemeDialogOpen: false,
      };
    case LOGOUT_DIALOG_OPEN:
      return {
        ...state,
        isLogoutDialogOpen: true,
      };
    case LOGOUT_DIALOG_CLOSE:
      return {
        ...state,
        isLogoutDialogOpen: false,
      };
    case ANIME_DELETE_DIALOG_OPEN:
      return {
        ...state,
        isAnimeDeleteDialogOpen: true,
      };
    case ANIME_DELETE_DIALOG_CLOSE:
      return {
        ...state,
        isAnimeDeleteDialogOpen: false,
      };
    case ANIME_DETAIL_DIALOG_OPEN:
      return {
        ...state,
        isAnimeDetailDialogOpen: true,
      };
    case ANIME_DETAIL_DIALOG_CLOSE:
      return {
        ...state,
        isAnimeDetailDialogOpen: false,
      };
    case AUTH.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
