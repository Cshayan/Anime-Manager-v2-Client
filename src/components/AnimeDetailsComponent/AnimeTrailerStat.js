import React from 'react';
import { makeStyles } from '@material-ui/core/';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  addToWatchlist: {
    width: '90%',
    border: 'none',
    outline: 'none',
    background: theme.button.background.light,
    color: '#fff',
    padding: '10px 7px',
    display: 'flex',
    borderRadius: '5px',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.9',
    },
    '&:disabled': {
      background: theme.button.background.light,
      border: `1px solid ${theme.palette.primary.main}`,
      cursor: 'no-drop',
      opacity: '0.5',
    },
  },
  trailerCont: {
    padding: '0 1rem',
  },
}));

const AnimeTrailerStat = (props) => {
  const classes = useStyles();
  const { trailerUrl } = props;
  return (
    <>
      <div className={classes.trailerCont}>
        <ReactPlayer width="100%" height="100%" url={trailerUrl} controls />
      </div>
      {/* <button
        className={classes.addToWatchlist}
        disabled={isAnimeAlreadyPresent}
      >
        <AddCircleIcon /> Add to Watchlist
      </button> */}
    </>
  );
};

AnimeTrailerStat.propTypes = {
  trailerUrl: PropTypes.string,
  // isAnimeAlreadyPresent: PropTypes.bool.isRequired,
};

AnimeTrailerStat.defaultProps = {
  trailerUrl: '',
};

export default AnimeTrailerStat;
