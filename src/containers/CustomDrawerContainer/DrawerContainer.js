import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import { useLogOut } from '../../custom-hooks/authHook';
import { useDarkMode } from '../../custom-hooks/darkModeHook';
import { drawerClose } from '../../actions/drawerAction';
import {} from '../../actions/dialogAction';

const DrawerContainer = () => {
  const { handleLogoutButtonClick } = useLogOut();
  const selectIsDrawerOpen = (state) => state.drawer.isDrawerOpen;
  const isDrawerOpen = useSelector(selectIsDrawerOpen);
  const dispatch = useDispatch();
  const { handleDarkModeClick } = useDarkMode();

  const handleDrawerClose = () => {
    dispatch(drawerClose());
  };

  return (
    <CustomDrawer
      onLogOutClick={handleLogoutButtonClick}
      open={isDrawerOpen}
      onClose={handleDrawerClose}
      handleDarkModeClick={handleDarkModeClick}
    />
  );
};

export default memo(DrawerContainer);
