import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core/';
import { ReactComponent as WatchlistIcon } from '../../assets/watchlist.svg';
import GridListIcon from './GridListIcon';

const useStyles = makeStyles((theme) => ({
  animeText: {
    fontSize: '1.5rem',
    letterSpacing: '0.1rem',
    color: theme.palette.primary.main,
  },
  icon: {
    width: theme.typography.pxToRem(60),
    height: theme.typography.pxToRem(60),
    margin: '0 5px',
  },
  titleCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.typography.pxToRem(15),
  },
  iconTextCont: {
    display: 'flex',
    alignItems: 'center',
  },
  '@media screen and (max-width: 600px)': {
    icon: {
      width: theme.typography.pxToRem(30),
      height: theme.typography.pxToRem(30),
    },
    animeText: {
      fontSize: '0.8rem',
    },
  },
}));

const AnimeWatchlistHeader = (props) => {
  const classes = useStyles();
  const { defaultView, onGridClick, onShareIconClick } = props;
  return (
    <div className={classes.titleCont}>
      <div className={classes.iconTextCont}>
        <WatchlistIcon className={classes.icon} />
        <Typography className={classes.animeText}>Your watchlist </Typography>
      </div>
      <GridListIcon
        defaultView={defaultView}
        onGridClick={onGridClick}
        onShareIconClick={onShareIconClick}
      />
    </div>
  );
};

AnimeWatchlistHeader.propTypes = {
  defaultView: PropTypes.string.isRequired,
  onGridClick: PropTypes.func.isRequired,
  onShareIconClick: PropTypes.func.isRequired,
};

export default AnimeWatchlistHeader;
