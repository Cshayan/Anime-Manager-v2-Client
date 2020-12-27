import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import cls from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  noAnimeContainer: {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  noAnimeText: {
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
    letterSpacing: '0.1rem',
    overflow: 'hidden',
  },
  '@media screen and (max-width: 600px)': {
    noAnimeText: {
      fontSize: '1rem',
    },
  },
}));

const LotteAnimation = (props) => {
  const { defaultOptions, width, height, textToRender, style } = props;
  const classes = useStyles();
  return (
    <div className={cls(classes.noAnimeContainer, style)}>
      <Lottie options={defaultOptions} width={width} height={height} />
      <Typography className={classes.noAnimeText}>{textToRender}</Typography>
    </div>
  );
};

LotteAnimation.propTypes = {
  defaultOptions: PropTypes.object.isRequired,
  width: PropTypes.any,
  height: PropTypes.any,
  textToRender: PropTypes.string,
  style: PropTypes.object,
};

LotteAnimation.defaultProps = {
  width: '100%',
  height: '100%',
  textToRender: '',
  style: {},
};

export default LotteAnimation;
