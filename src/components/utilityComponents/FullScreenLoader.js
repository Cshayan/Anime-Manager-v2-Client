/* eslint-disable no-dupe-keys */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import logoLoader from '../../assets/logoLoader.png';
import './styles/fullScreenLoaderStyles.css';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: '-webkit-linear-gradient(to right, #085078, #85d8ce)',
    background: 'linear-gradient(to right, #085078, #85d8ce)',
  },
  loaderText: {
    color: '#fff',
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
  return (
    <div className={classes.loaderContainer}>
      <img src={logoLoader} alt="Logo-Loader" className="img" />
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
