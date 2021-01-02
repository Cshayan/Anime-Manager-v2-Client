import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  makeStyles,
  List,
  ListItem,
  Tooltip,
  Divider,
} from '@material-ui/core';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import { screenNames } from 'custom-hooks/drawerHook';
import cls from 'classnames';
import DashboardIcon from 'assets/dashboard.svg';
import UserIcon from 'assets/userHam.svg';
import PieIcon from 'assets/pie.svg';
import { ReactComponent as Logout } from 'assets/logout.svg';
import DarkModeIcon from 'assets/nightMode.svg';

const useStyles = makeStyles((theme) => ({
  logoutIcon: {
    width: 30,
    height: 30,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  activeIcon: {
    borderRight: `5px solid ${theme.palette.primary.main}`,
    background: theme.button.background.light,
  },
  logoutButtonPosition: {
    position: 'absolute',
    bottom: 0,
  },
  drawer: {
    background: theme.card.background,
  },
  list: {
    position: 'relative',
    height: '100vh',
  },
  listButton: {
    margin: `${theme.typography.pxToRem(10)} 0`,
    cursor: 'pointer',
  },
}));

const drawerItems = [
  {
    icon: DashboardIcon,
    toolTipText: 'Dashboard',
    id: 1,
    name: screenNames.Dashboard,
  },
  {
    icon: UserIcon,
    toolTipText: 'View your profile',
    id: 2,
    name: screenNames.Profile,
  },
  {
    icon: PieIcon,
    toolTipText: 'See statistics',
    id: 3,
    name: screenNames.Statistics,
  },
  { icon: DarkModeIcon, toolTipText: 'Change your theme', id: 4 },
];

const CustomDrawer = (props) => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
  const {
    open,
    onLogOutClick,
    onClose,
    handleDarkModeClick,
    onIconClick,
    screenName,
  } = props;

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={isMobile ? open : true}
      onClose={onClose}
      classes={{ paper: classes.drawer }}
    >
      <List className={classes.list}>
        {drawerItems.map((item) => (
          <>
            {item.id === 4 && <Divider />}
            <Tooltip key={item.id} title={item.toolTipText}>
              <ListItem
                button
                className={cls(classes.listButton, {
                  [classes.activeIcon]: screenName === item.name,
                })}
                onClick={
                  item.id === 4
                    ? handleDarkModeClick
                    : () => {
                        onIconClick(item.id);
                        onClose();
                      }
                }
              >
                <img
                  src={item.icon}
                  className={classes.iconStyle}
                  alt="drawer-icon"
                />
              </ListItem>
            </Tooltip>
          </>
        ))}
        <Tooltip title="Logout">
          <ListItem
            button
            className={cls(classes.listButton, classes.logoutButtonPosition)}
            onClick={onLogOutClick}
          >
            <Logout className={classes.logoutIcon} />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
};

CustomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleDarkModeClick: PropTypes.func.isRequired,
  onIconClick: PropTypes.func,
  screenName: PropTypes.string.isRequired,
};

CustomDrawer.defaultProps = {
  onIconClick: () => {},
};

export default CustomDrawer;
