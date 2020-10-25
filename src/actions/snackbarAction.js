import { snackBar } from "../constants/snackBarConstant";

export const snackBarOpen = (message, type) => ({
  type: snackBar.SNACKBAR_OPEN,
  payload: { message, type },
});

export const snackBarClose = () => ({ type: snackBar.SNACKBAR_CLOSE });
