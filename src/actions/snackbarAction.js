import { snackBar } from '../constants/snackBarConstant';

export const snackBarOpen = (message, type) => ({
  type: snackBar.SNACKBAR_OPEN,
  payload: { message, type },
});

export const snackBarClose = () => ({ type: snackBar.SNACKBAR_CLOSE });

export const backDropOpen = () => ({
  type: snackBar.BACKDROP_OPEN,
});

export const backDropClose = () => ({
  type: snackBar.BACKDROP_CLOSE,
});
