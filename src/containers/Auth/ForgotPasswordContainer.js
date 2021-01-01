import React from 'react';
import { makeStyles } from '@material-ui/core';
import Lottie from 'react-lottie';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
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
  '@media screen and (max-width: 600px)': {
    card: {
      gridTemplateColumns: '1fr',
    },
  },
}));

const ForgotPasswordContainer = () => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
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
        <Lottie
          options={defaultOptions}
          width={isMobile ? 100 : 300}
          height={isMobile ? 100 : 300}
        />
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordContainer;
