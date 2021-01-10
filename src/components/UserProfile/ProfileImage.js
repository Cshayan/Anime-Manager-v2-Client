/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { usePhotoUpload } from 'custom-hooks/authHook';

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
    height: '200px',
  },
  uploadBtn: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0.5rem 0.7rem 0.3rem 0.7rem',
    borderRadius: '50%',
    background: '#e67e22',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
      background: '#e67e22',
    },
  },
  fileInput: {
    display: 'none',
  },
  editIcon: {
    color: '#fff',
  },
  '@media screen and (max-width: 600px)': {
    profileContainer: {
      flexDirection: 'column',
    },
    infoCont: {
      textAlign: 'center',
      marginTop: '0.8rem',
    },
  },
}));

const ProfileImage = (props) => {
  const { name, email, profilePicUrl, isUploadRequired } = props;
  const classes = useStyles();
  const { photoInputValue, handlePhotoInputChange } = usePhotoUpload();
  return (
    <div
      className={cls(classes.profileContainer)}
      style={{ flexDirection: 'column' }}
    >
      <div className={classes.image}>
        <img
          src={profilePicUrl}
          alt="user-profile"
          className={classes.userIconSVG}
        />
        {isUploadRequired && (
          <label className={classes.uploadBtn}>
            <input
              type="file"
              className={classes.fileInput}
              value={photoInputValue}
              onChange={handlePhotoInputChange}
            />
            <CameraAltIcon className={classes.editIcon} />
          </label>
        )}
      </div>
      <div className={classes.infoCont}>
        <Typography className={classes.nameText}>{name}</Typography>
        <Typography className={classes.emailText}>{email}</Typography>
      </div>
    </div>
  );
};

ProfileImage.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  profilePicUrl: PropTypes.string.isRequired,
  isUploadRequired: PropTypes.bool,
};

ProfileImage.defaultProps = {
  name: 'John Doe',
  email: 'john@gmail.com',
  isUploadRequired: true,
};

export default ProfileImage;
