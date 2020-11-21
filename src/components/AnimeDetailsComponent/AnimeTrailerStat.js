import React from 'react';
import { makeStyles, Typography } from '@material-ui/core/';
import PropTypes from 'prop-types';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  addToWatchlist: {
    width: '100%',
    border: 'none',
    outline: 'none',
    background: theme.button.background.light,
    color: '#fff',
    padding: '12px 7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.9',
    },
  },
  trailerCont: {
    marginTop: '2rem',
    padding: '0 1rem',
  },
  statusCont: {
    marginTop: '2rem',
    padding: '0.5rem',
    background: theme.card.background,
    textAlign: 'center',
    border: `1px dashed ${theme.palette.primary.main}`,
    borderRadius: '5px',
    width: '90%',
    margin: '5px auto',
  },
  statusText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(22),
    fontWeight: 'bold',
  },
}));

const AnimeTrailerStat = (props) => {
  const classes = useStyles();
  const { trailerUrl, status } = props;
  return (
    <div>
      <button className={classes.addToWatchlist}>
        {' '}
        <AddCircleIcon /> Add to Watchlist
      </button>
      <div className={classes.trailerCont}>
        <ReactPlayer width="100%" height="100%" url={trailerUrl} />
      </div>
      <div className={classes.statusCont}>
        <Typography className={classes.statusText}>{status}</Typography>
      </div>
    </div>
  );
};

AnimeTrailerStat.propTypes = {
  trailerUrl: PropTypes.string,
  status: PropTypes.string,
};

AnimeTrailerStat.defaultProps = {
  trailerUrl: '',
  status: 'No status found.',
};

export default AnimeTrailerStat;
