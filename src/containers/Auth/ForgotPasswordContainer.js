import React from 'react';
import { makeStyles } from '@material-ui/core';
import Lottie from 'react-lottie';
import forgotPasswordAnimation from 'assets/animation/forgot-password.json';
import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm';

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

const ForgotPasswordContainer = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: forgotPasswordAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={classes.card}>
      <div className={classes.lottieCont}>
        <Lottie options={defaultOptions} width={300} height={300} />
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordContainer;
