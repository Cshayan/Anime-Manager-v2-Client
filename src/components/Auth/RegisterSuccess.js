import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Lottie from 'react-lottie';
import emailAnimation from 'assets/email.json';

const useStyles = makeStyles(() => ({
  waitingText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '1.8rem',
  },
  '@media screen and (max-width: 600px)': {
    waitingText: {
      fontSize: '1.5rem',
    },
  },
}));

const AuthContainer = () => {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emailAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} width={300} height={300} />
      <Typography className={classes.waitingText}>Check your inbox!</Typography>
    </>
  );
};

AuthContainer.propTypes = {};

AuthContainer.defaultProps = {};
export default AuthContainer;
