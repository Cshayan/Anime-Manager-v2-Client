import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuthentication } from 'custom-hooks/authHook';
import homeAnimation from 'assets/animation/home-animation.json';
import browseAnimation from 'assets/animation/browse.json';
import Lottie from 'react-lottie';
import { useSnackbar } from 'custom-hooks/snackbarHook';

const useStyles = makeStyles((theme) => ({
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    padding: `0 ${theme.typography.pxToRem(40)}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: theme.palette.text.primary,
  },
  loginButton: {
    background: `${theme.palette.primary.main}`,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    fontSize: '0.8rem',
    margin: '1rem',
    fontWeight: 'bold',
    padding: '7px 25px',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    borderRadius: theme.typography.pxToRem(15),
  },
  registerButton: {
    color: '#fff',
    fontSize: '0.8rem',
    background: 'rgba(0, 0, 0, 0.2)',
    margin: '1rem',
    fontWeight: 'bold',
    padding: '7px 25px',
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: `${theme.palette.primary.main}`,
    },
    borderRadius: theme.typography.pxToRem(15),
  },
  linkStyle: {
    textDecoration: 'none',
  },
  animeText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(76),
  },
  instBox: {
    background: theme.palette.primary.main,
    padding: theme.typography.pxToRem(15),
    borderRadius: theme.typography.pxToRem(20),
    margin: `${theme.typography.pxToRem(15)} 0`,
    color: '#fff',
  },
  line: {
    background: theme.palette.text.primary,
    width: theme.typography.pxToRem(2),
    height: theme.typography.pxToRem(45),
  },
  diffBox: {
    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
    width: '100%',
    height: '10%',
    fontSize: theme.typography.pxToRem(36),
    color: '#ccc',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.typography.pxToRem(40),
    borderRadius: '5rem 5rem 0 0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media screen and (max-width: 600px)': {
    textContainer: {
      flexDirection: 'column',
    },
    topContainer: {
      flexDirection: 'column',
    },
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: homeAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const browseAnimOptions = {
  loop: true,
  autoplay: true,
  animationData: browseAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Home = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuthentication();
  useSnackbar();
  return (
    <>
      <div className={classes.topContainer}>
        <div className={classes.textContainer}>
          <h1>
            <span className={classes.animeText}>Anime</span> Manager
          </h1>
          <p>Place to manage all your favourite animes</p>
          <div>
            {!isAuthenticated ? (
              <>
                <Link
                  to={{ pathname: '/auth', state: { login: true } }}
                  className={classes.linkStyle}
                >
                  <Button className={classes.loginButton}>Login</Button>
                </Link>
                <Link
                  to={{ pathname: '/auth', state: { login: false } }}
                  className={classes.linkStyle}
                >
                  <Button className={classes.registerButton}>Sign Up</Button>
                </Link>
              </>
            ) : (
              <Link
                to={{ pathname: '/dashboard' }}
                className={classes.linkStyle}
              >
                <Button className={classes.registerButton}>
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>
        </div>
        <Lottie options={defaultOptions} width="40%" height="40%" />
        {!isAuthenticated && (
          <div className={classes.textContainer}>
            <p>3 easy steps</p>
            <div className={classes.instBox}>
              <h2>Signup</h2>
              <p>for an account.</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.instBox}>
              <h2>Login</h2>
              <p>to your account.</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.instBox}>
              <h2>Manage</h2>
              <p>your fav animes.</p>
            </div>
          </div>
        )}
      </div>
      <div className={classes.diffBox}>
        <Lottie options={browseAnimOptions} width="20%" height="100%" />
        <p>Browse all your favourite animes here!</p>
      </div>
    </>
  );
};

export default Home;
