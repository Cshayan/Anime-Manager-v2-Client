import {
  DARK_MODE_ENABLED,
  DARK_MODE_DISABLED,
} from "../constants/darkModeConstant";

export const enableDarkMode = () => ({
  type: DARK_MODE_ENABLED,
});

export const disableDarkMode = () => ({
  type: DARK_MODE_DISABLED,
});
