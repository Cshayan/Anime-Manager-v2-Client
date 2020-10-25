import { useSelector, useDispatch } from "react-redux";
import { enableDarkMode, disableDarkMode } from "../actions/darkModeAction";
import { drawerClose } from "../actions/drawerAction";
import { openThemeDialog } from "../actions/dialogAction";

const selectDarkMode = (state) => state.darkMode.isDarkModeEnabled;

export const useDarkMode = () => {
  const isDarkModeEnabled = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleDarkModeClick = () => {
    dispatch(drawerClose());
    dispatch(openThemeDialog());
  };

  const toggleDarkMode = () => {
    if (isDarkModeEnabled) {
      dispatch(disableDarkMode());
    } else {
      dispatch(enableDarkMode());
    }
    // dispatch(closeThemeDialog());
  };

  return { isDarkModeEnabled, handleDarkModeClick, toggleDarkMode };
};
