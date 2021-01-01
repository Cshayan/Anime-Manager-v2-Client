import React from 'react';
import { makeStyles } from '@material-ui/core';
import Lottie from 'react-lottie';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import resetPasswordAnimation from 'assets/animation/reset-password.json';
import ResetPasswordForm from 'components/Auth/ResetPasswordForm';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0',
      height: '0',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
    },
  },
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

const ResetPasswordContainer = (props) => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
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
        <Lottie
          options={defaultOptions}
          width={isMobile ? 100 : 300}
          height={isMobile ? 100 : 300}
        />
      </div>
      <ResetPasswordForm {...props} />
    </div>
  );
};

export default ResetPasswordContainer;
