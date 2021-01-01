import React from 'react';
import { makeStyles } from '@material-ui/core';
import Lottie from 'react-lottie';
import resetPasswordAnimation from 'assets/animation/reset-password.json';
import ResetPasswordForm from 'components/Auth/ResetPasswordForm';

const useStyles = makeStyles((theme) => ({
  card: {
    background: '#333',
    width: '80%',
    height: '400px',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
    opacity: '0.9',
    borderRadius: '20px',
    border: `1.5px solid ${theme.palette.primary.main}`,
  },
  lottieCont: {
    marginTop: '1.5rem',
  },
}));

const ResetPasswordContainer = (props) => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: resetPasswordAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={classes.card}>
      <div className={classes.lottieCont}>
        <Lottie options={defaultOptions} width={300} height={300} />
      </div>
      <ResetPasswordForm {...props} />
    </div>
  );
};

export default ResetPasswordContainer;
