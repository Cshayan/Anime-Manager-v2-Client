/* eslint-disable no-dupe-keys */
import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { makeStyles, Typography } from '@material-ui/core';
import defaultLoaderAnimation from 'assets/animation/default-loader.json';
import './styles/fullScreenLoaderStyles.css';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: theme.background,
  },
  loaderText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(26),
    fontWeight: 'bold',
    letterSpacing: '0.1rem',
  },
  '@media screen and (max-width: 600px)': {
    loaderContainer: {
      padding: '1rem',
    },
  },
}));

const FullScreenLoader = (props) => {
  const classes = useStyles();
  const { title } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: defaultLoaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={classes.loaderContainer}>
      <Lottie options={defaultOptions} width="50%" height="50%" />
      <Typography className={classes.loaderText}>{title}</Typography>
    </div>
  );
};

FullScreenLoader.defaultProps = {
  title: 'Please wait. Loading your dashboard...',
};

FullScreenLoader.propTypes = {
  title: PropTypes.string,
};

export default FullScreenLoader;
