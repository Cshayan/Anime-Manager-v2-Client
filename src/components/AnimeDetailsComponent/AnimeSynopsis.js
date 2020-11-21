import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  scoreBox: {
    background: theme.card.background,
    width: '20%',
    marginTop: '1rem',
  },
  scoreHeading: {
    background: theme.badge.background,
    color: '#fff',
    padding: '0.2rem',
    fontSize: theme.typography.pxToRem(18),
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(40),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  synopsisCont: {
    marginTop: '1rem',
  },
  synopsisHeading: {
    background: theme.badge.background,
    color: '#fff',
    fontSize: theme.typography.pxToRem(30),
    padding: '0.2rem',
    borderRadius: '5px',
  },
  synopsisText: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    lineHeight: '20px',
  },
}));

const AnimeSynopsis = (props) => {
  const { synopsis, score } = props;
  const classes = useStyles();
  return (
    <div>
      <div className={classes.scoreBox}>
        <Typography className={classes.scoreHeading}>Score</Typography>
        <Typography className={classes.scoreText}>{score}</Typography>
      </div>
      <div className={classes.synopsisCont}>
        <Typography className={classes.synopsisHeading}>Synopsis</Typography>
        <Typography className={classes.synopsisText}>{synopsis}</Typography>
      </div>
    </div>
  );
};

AnimeSynopsis.propTypes = {
  synopsis: PropTypes.string,
  score: PropTypes.number,
};

AnimeSynopsis.defaultProps = {
  synopsis: 'No synopsis found.',
  score: 0.0,
};

export default AnimeSynopsis;
