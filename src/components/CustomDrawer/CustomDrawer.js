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
import cls from 'classnames';
import { ReactComponent as DashboardIcon } from 'assets/dashboard.svg';
import { ReactComponent as User } from '../../assets/userHam.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as Pie } from '../../assets/pie.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/nightMode.svg';

const useStyles = makeStyles((theme) => ({
  userIcon: {
    width: 30,
    height: 30,
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
  pieIcon: {
    width: 30,
    height: 30,
  },
  logoutIcon: {
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

const CustomDrawer = (props) => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
  const { open, onLogOutClick, onClose, handleDarkModeClick } = props;

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={isMobile ? open : true}
      onClose={onClose}
      classes={{ paper: classes.drawer }}
    >
      <List className={classes.list}>
        <Tooltip title="Dashboard">
          <ListItem
            button
            className={cls(classes.listButton, classes.activeIcon)}
          >
            <DashboardIcon className={classes.userIcon} />
          </ListItem>
        </Tooltip>
        <Tooltip title="View Profile">
          <ListItem button className={classes.listButton}>
            <User className={classes.userIcon} />
          </ListItem>
        </Tooltip>
        <Tooltip title="View Stats">
          <ListItem button className={classes.listButton}>
            <Pie className={classes.pieIcon} />
          </ListItem>
        </Tooltip>
        <Tooltip title="Notifications">
          <ListItem button className={classes.listButton}>
            <Bell className={classes.bellIcon} />
          </ListItem>
        </Tooltip>
        <Divider />
        <Tooltip title="Change theme">
          <ListItem
            button
            className={classes.listButton}
            onClick={handleDarkModeClick}
          >
            <DarkModeIcon className={classes.bellIcon} />
          </ListItem>
        </Tooltip>
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
};

export default CustomDrawer;
