import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: theme.card.background,
  },
  loaderText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(26),
    fontWeight: 'bold',
    letterSpacing: '0.1rem',
  },
  spinner: {
    color: theme.palette.primary.main,
  },
  '@media screen and (max-width: 600px)': {
    loaderContainer: {
      padding: '1rem',
    },
  },
}));

const SpinnerLoader = (props) => {
  const classes = useStyles();
  const { title } = props;
  return (
    <div className={classes.loaderContainer}>
      <CircularProgress className={classes.spinner} />
      <Typography className={classes.loaderText}>{title}</Typography>
    </div>
  );
};

SpinnerLoader.defaultProps = {
  title: 'Please wait.',
};

SpinnerLoader.propTypes = {
  title: PropTypes.string,
};

export default SpinnerLoader;
