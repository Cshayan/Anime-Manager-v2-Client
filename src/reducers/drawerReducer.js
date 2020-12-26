import { DRAWER_CLOSE, DRAWER_OPEN } from 'constants/drawerConstant';
import { AUTH } from 'constants/authConstant';
import { screenNames } from 'custom-hooks/drawerHook';

const initialState = {
  isDrawerOpen: false,
  screenName: screenNames.Dashboard,
};

export const drawerReducer = (state = initialState, action) => {
  const { type, payload } = action;
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
    case 'SET_SCREEN_NAME':
      return {
        ...state,
        screenName: payload.screenName,
      };
    case AUTH.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
