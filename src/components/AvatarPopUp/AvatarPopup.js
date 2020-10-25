import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Avatar, IconButton } from '@material-ui/core';
import cls from 'classnames';
import { drawerOpen } from '../../actions/drawerAction';
import UserIcon from '../../assets/user.svg';
import Hamburger from '../../assets/hamburger.svg';
import ProfilePopOver from '../ProfilePopOver/ProfilePopOver';
import NotificationPopOver from '../NotificationPopOver/NotificationPopOver';
import { ReactComponent as NotificationsIcon } from '../../assets/bell.svg';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'center',
  },
  notificationIcon: {
    color: theme.palette.primary.main,
    width: 30,
    height: 30,
  },
  hamburger: {
    cursor: 'pointer',
    width: 25,
    height: 25,
  },
  '@media screen and (max-width: 600px)': {
    avatarIcon: {
      width: 30,
      height: 30,
    },
    hideButton: {
      display: 'none',
    },
    hamburger: {
      width: 15,
      height: 15,
    },
  },
}));

const AvatarPopup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

  const handleProfilePopOverClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleNotificationPopOverClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleProfilePopOverClose = () => {
    setProfileAnchorEl(null);
  };

  const handleNotificationPopOverClose = () => {
    setNotificationAnchorEl(null);
  };

  const profileOpen = Boolean(profileAnchorEl);
  const profileId = profileOpen ? 'simple-popover' : undefined;

  const notificationOpen = Boolean(notificationAnchorEl);
  const notificationId = notificationOpen ? 'simple-popover' : undefined;

  const onHamburgerClick = () => {
    dispatch(drawerOpen());
  };

  return (
    <>
      <div className={classes.avatarContainer}>
        <IconButton
          onClick={handleNotificationPopOverClick}
          className={classes.hideButton}
        >
          <NotificationsIcon className={classes.notificationIcon} />
        </IconButton>
        <IconButton
          onClick={handleProfilePopOverClick}
          className={classes.hideButton}
        >
          <Avatar
            alt="avatar"
            src={UserIcon}
            className={cls(classes.avatarIcon)}
          />
        </IconButton>
        <IconButton onClick={onHamburgerClick}>
          <img
            src={Hamburger}
            alt="hamburger-menu"
            className={cls(classes.hamburger)}
          />
        </IconButton>
      </div>
      <ProfilePopOver
        open={profileOpen}
        id={profileId}
        anchorEl={profileAnchorEl}
        handleClose={handleProfilePopOverClose}
      />
      <NotificationPopOver
        open={notificationOpen}
        id={notificationId}
        anchorEl={notificationAnchorEl}
        handleClose={handleNotificationPopOverClose}
      />
    </>
  );
};

export default AvatarPopup;
