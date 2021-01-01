import React from 'react';
import { makeStyles } from '@material-ui/core';
import ForgotPasswordContainer from 'containers/Auth/ForgotPasswordContainer';
import Logo from '../../components/utilityComponents/Logo';

const useStyles = makeStyles((theme) => ({
  backgroundCover: {
    height: '100vh',
    width: '100vw',
    background: theme.palette.background.default,
  },
}));

const ForgotPasswordView = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundCover}>
      <Logo />
      <div>
        <ForgotPasswordContainer />
      </div>
    </div>
  );
};

export default ForgotPasswordView;
