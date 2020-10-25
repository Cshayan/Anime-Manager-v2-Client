import { DRAWER_CLOSE, DRAWER_OPEN } from "../constants/drawerConstant";
import { AUTH } from "../constants/authConstant";

const initialState = {
  isDrawerOpen: false,
};

export const drawerReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case DRAWER_OPEN:
      return {
        ...state,
        isDrawerOpen: true,
      };
    case DRAWER_CLOSE:
      return {
        ...state,
        isDrawerOpen: false,
      };
    case AUTH.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
