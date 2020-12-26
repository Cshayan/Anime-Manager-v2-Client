import { DRAWER_OPEN, DRAWER_CLOSE } from '../constants/drawerConstant';

export const drawerOpen = () => ({ type: DRAWER_OPEN });

export const drawerClose = () => ({ type: DRAWER_CLOSE });

export const setScreenNameAction = (payload) => ({
  type: 'SET_SCREEN_NAME',
  payload,
});
