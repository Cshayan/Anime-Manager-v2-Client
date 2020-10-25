import { snackBar } from "../constants/snackBarConstant";
import { AUTH } from "../constants/authConstant";

const initialState = {
  isSnackBarOpen: false,
  snackBarMessage: "",
  snackBarType: "info",
};

export const snackBarReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case snackBar.SNACKBAR_OPEN:
      return {
        ...state,
        isSnackBarOpen: true,
        snackBarMessage: payload.message,
        snackBarType: payload.type,
      };
    case snackBar.SNACKBAR_CLOSE:
      return {
        ...state,
        isSnackBarOpen: false,
        snackBarMessage: "",
        snackBarType: "error",
      };
    case AUTH.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
