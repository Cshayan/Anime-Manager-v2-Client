import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import UserIcon from 'assets/userPng.png';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles((theme) => ({
  userIconSVG: {
    width: theme.typography.pxToRem(200),
    height: theme.typography.pxToRem(200),
    borderRadius: '50%',
  },
  profileContainer: {
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
  },
  infoCont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2rem',
  },
  nameText: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  emailText: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.primary.main,
  },
  image: {
    position: 'relative',
    overflow: 'hidden',
  },
  uploadBtn: {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0.3rem',
    borderRadius: '50%',
    background: '#e67e22',
    '&:hover': {
      opacity: '0.8',
      background: '#e67e22',
    },
  },
  editIcon: {
    color: '#fff',
  },
  '@media screen and (max-width: 600px)': {},
}));

const ProfileImage = (props) => {
  const { userDetails } = props;
  const classes = useStyles();
  return (
    <div className={classes.profileContainer}>
      <div className={classes.image}>
        {true ? (
          <img
            src={UserIcon}
            alt="user-profile"
            className={classes.userIconSVG}
          />
        ) : null}
        <IconButton className={classes.uploadBtn}>
          <EditOutlinedIcon className={classes.editIcon} />
        </IconButton>
      </div>
      <div className={classes.infoCont}>
        <Typography className={classes.nameText}>
          {userDetails?.name}
        </Typography>
        <Typography className={classes.emailText}>
          {userDetails?.email}
        </Typography>
      </div>
    </div>
  );
};

ProfileImage.propTypes = {
  userDetails: PropTypes.object.isRequired,
};

export default ProfileImage;
