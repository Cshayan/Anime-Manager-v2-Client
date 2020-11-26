import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';
import AnimeTrailerStat from './AnimeTrailerStat';

const useStyles = makeStyles((theme) => ({
  synopsisContainer: {
    padding: '1rem',
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr',
    gridGap: '1em',
  },
  scoreBox: {
    background: theme.card.background,
    width: '100%',
    borderRadius: '5px',
    alignSelf: 'center',
  },
  scoreHeading: {
    background: theme.badge.background,
    color: '#fff',
    padding: '0.2rem',
    fontSize: theme.typography.pxToRem(18),
    textAlign: 'center',
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(40),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  synopsisCont: {
    marginTop: '1rem',
    display: 'grid',
    gridColumn: '1/3',
  },
  synopsisHeading: {
    background: theme.badge.background,
    color: '#fff',
    fontSize: theme.typography.pxToRem(30),
    padding: '0.2rem',
    borderRadius: '5px',
  },
  synopsisText: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.primary,
    lineHeight: '20px',
  },
  infoCont: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)',
    alignSelf: 'center',
  },
  infoStyle: {
    color: '#fff',
    fontSize: theme.typography.pxToRem(16),
    background: theme.badge.background2,
    padding: '0.5rem',
    borderRadius: '5px',
    margin: '0.3rem 0',
  },
  present: {
    fontSize: theme.typography.pxToRem(20),
    color: '#27ae60',
  },
  absent: {
    fontSize: theme.typography.pxToRem(20),
    color: '#e74c3c',
  },
  icon: {
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    margin: `0 ${theme.typography.pxToRem(5)}`,
  },
  '@media screen and (max-width:600px)': {
    present: {
      fontSize: theme.typography.pxToRem(16),
    },
    absent: {
      fontSize: theme.typography.pxToRem(16),
    },
    presentAbCont: {
      gridColumn: '1/3',
      width: '100%',
    },
    icon: {
      width: theme.typography.pxToRem(30),
      height: theme.typography.pxToRem(30),
    },
    synopsisContainer: {
      gridTemplateColumns: '1fr',
    },
    mobileInfo: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 1.5fr',
      gridGap: '1em',
    },
  },
}));

const AnimeSynopsis = (props) => {
  const {
    synopsis,
    score,
    status,
    episodes,
    trailerUrl,
    popularity,
    isAnimeAlreadyPresent,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.synopsisContainer}>
      <div className={classes.mobileInfo}>
        <div className={classes.scoreBox}>
          <Typography className={classes.scoreHeading}>Score</Typography>
          <Typography className={classes.scoreText}>{score}</Typography>
        </div>
        <div className={classes.infoCont}>
          <div className={classes.infoStyle}>Episodes: {episodes}</div>
          <div className={classes.infoStyle}>{status}</div>
          <div className={classes.infoStyle}>Popularity : {popularity}</div>
        </div>
      </div>
      <div className={classes.presentAbCont}>
        <AnimeTrailerStat
          trailerUrl={trailerUrl}
          isAnimeAlreadyPresent={isAnimeAlreadyPresent}
        />
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
  trailerUrl: PropTypes.string,
  status: PropTypes.string,
  episodes: PropTypes.number,
  popularity: PropTypes.number,
  isAnimeAlreadyPresent: PropTypes.bool,
};

AnimeSynopsis.defaultProps = {
  synopsis: 'No synopsis found.',
  score: 0.0,
  trailerUrl: '',
  status: 'No status found.',
  episodes: 0,
  popularity: 0,
  isAnimeAlreadyPresent: false,
};

export default AnimeSynopsis;
