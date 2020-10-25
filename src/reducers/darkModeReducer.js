import {
  DARK_MODE_ENABLED,
  DARK_MODE_DISABLED,
  DARK_MODE_LOCAL_ANIME_MANAGER,
} from '../constants/darkModeConstant';

const getInitialThemeMode = localStorage.getItem(DARK_MODE_LOCAL_ANIME_MANAGER);

const initialState = {
  isDarkModeEnabled: getInitialThemeMode === 'YES',
};

export const darkModeReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case DARK_MODE_ENABLED:
      localStorage.setItem(DARK_MODE_LOCAL_ANIME_MANAGER, 'YES');
      return {
        ...state,
        isDarkModeEnabled: true,
      };
    case DARK_MODE_DISABLED:
      localStorage.setItem(DARK_MODE_LOCAL_ANIME_MANAGER, 'NO');
      return {
        ...state,
        isDarkModeEnabled: false,
      };
    default:
      return state;
  }
};
