import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setScreenNameAction } from 'actions/drawerAction';

export const screenNames = {
  Dashboard: 'dashboard',
  Statistics: 'statistics',
  Profile: 'profile',
};

const selectScreenName = ({ drawer: { screenName = '' } = {} }) => screenName;

export const useDrawer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const screenName = useSelector(selectScreenName);

  useEffect(() => {
    if (window.location.pathname) {
      switch (window.location.pathname) {
        case '/dashboard':
          dispatch(setScreenNameAction({ screenName: screenNames.Dashboard }));
          break;
        case '/profile':
          dispatch(setScreenNameAction({ screenName: screenNames.Profile }));
          break;
        case '/statistics':
          dispatch(setScreenNameAction({ screenName: screenNames.Statistics }));
          break;
        default:
          dispatch(setScreenNameAction({ screenName: screenNames.Dashboard }));
      }
    }
  }, [window.location.pathname]);

  const handleIconClick = (screenID) => {
    switch (screenID) {
      case 1:
        history.push(screenNames.Dashboard);
        break;
      case 2:
        history.push(screenNames.Profile);
        break;
      case 3:
        history.push(screenNames.Statistics);
        break;
      default:
        history.push(screenNames.Dashboard);
    }
  };

  return {
    screenName,
    handleIconClick,
  };
};
