import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Typography, Button } from '@material-ui/core';
import Lottie from 'react-lottie';
import notFound404Animation from 'assets/animation/not-found-404.json';
import Logo from 'components/utilityComponents/Logo';

const useStyles = makeStyles((theme) => ({
  errorContainer: {
    width: '100vw',
    height: '100vh',
    background: theme.palette.background.default,
    overflow: 'auto',
  },
  errorContainerInner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTextContainer: {
    padding: '1rem',
  },
  heading: {
    color: theme.palette.primary.main,
    fontSize: '6rem',
  },
  subHeadingOne: {
    fontSize: '2rem',
    color: theme.palette.text.primary,
  },
  subHeadingTwo: {
    fontSize: '1rem',
    color: theme.palette.text.primary,
  },
  homeButton: {
    padding: '0.4rem 0.8rem',
    color: '#fff',
    background: theme.button.background.light,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '20px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    boxShadow: `10px 13px 45px rgba(0, 0, 0, 0.1)`,
    '&:hover': {
      opacity: 0.9,
    },
    '&:disabled': {
      background: theme.button.background.light,
      cursor: 'no-drop',
      opacity: '0.5',
    },
  },
  '@media screen and (max-width: 600px)': {
    errorContainer: {
      padding: '1rem',
    },
    errorContainerInner: {
      flexDirection: 'column',
    },
    heading: {
      fontSize: '3rem',
    },
    subHeadingOne: {
      fontSize: '1.2rem',
    },
    subHeadingTwo: {
      fontSize: '0.8rem',
    },
  },
}));

const NotFound404 = () => {
  const classes = useStyles();
  const history = useHistory();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound404Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleHomeClick = () => {
    history.push('/');
  };

  return (
    <>
      <div className={classes.errorContainer}>
        <Logo />
        <div className={classes.errorContainerInner}>
          <Lottie options={defaultOptions} width={200} height={400} />
          <Typography className={classes.errorTextContainer}>
            <Typography className={classes.heading}>404</Typography>
            <Typography className={classes.subHeadingOne}>
              UH OH! You are lost.
            </Typography>
            <Typography className={classes.subHeadingTwo}>
              The page you are looking for is not found. Maybe it has been
              removed or your in the wrong path.
            </Typography>
            <Button
              className={classes.homeButton}
              onClick={() => handleHomeClick()}
            >
              Take me to Home
            </Button>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default NotFound404;
