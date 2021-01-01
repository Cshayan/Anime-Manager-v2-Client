import React from 'react';
import { makeStyles } from '@material-ui/core';
import ResetPasswordContainer from 'containers/Auth/ResetPasswordContainer';
import Logo from '../../components/utilityComponents/Logo';

const useStyles = makeStyles((theme) => ({
  backgroundCover: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.background.default,
  },
}));

const ResetPasswordView = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundCover}>
      <Logo />
      <div>
        <ResetPasswordContainer {...props} />
      </div>
    </div>
  );
};

export default ResetPasswordView;
