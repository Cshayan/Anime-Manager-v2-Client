import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core/';
import AnimewatchlistCard from '../AnimeCard/AnimeWatchlistCard';
import { useAnime, useAnimeDetailDialog } from '../../custom-hooks/animeHook';
import { ReactComponent as WatchlistIcon } from '../../assets/watchlist.svg';

const useStyles = makeStyles((theme) => ({
  animeText: {
    fontSize: '1.5rem',
    letterSpacing: '0.1rem',
    color: theme.palette.primary.main,
  },
  searchlistContainer: {
    padding: theme.typography.pxToRem(20),
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '100%',
    height: '100%',
  },
  totalStyle: {
    padding: '5px 8px',
    borderRadius: '20px',
    background: theme.button.background.light,
    color: '#fff',
    fontSize: theme.typography.pxToRem(22),
  },
  icon: {
    width: theme.typography.pxToRem(60),
    height: theme.typography.pxToRem(60),
    margin: '0 5px',
  },
  titleCont: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.typography.pxToRem(15),
  },
  '@media screen and (max-width: 600px)': {
    animeText: {
      fontSize: '0.8rem',
    },
    icon: {
      width: theme.typography.pxToRem(30),
      height: theme.typography.pxToRem(30),
    },
    totalStyle: {
      padding: '3px',
      borderRadius: '20px',
      background: theme.button.background.light,
      color: '#fff',
      fontSize: theme.typography.pxToRem(16),
    },
  },
}));

const AnimeWatchlist = (props) => {
  const { animeWatchlist } = props;
  const classes = useStyles();
  const { handleDeleteFromWatchlistClick } = useAnime();
  const { handleStatusClick } = useAnimeDetailDialog();

  return (
    <div className={classes.searchlistContainer}>
      <div className={classes.titleCont}>
        <WatchlistIcon className={classes.icon} />
        <Typography className={classes.animeText}>Your watchlist </Typography>
      </div>
      <Grid container spacing={4}>
        {animeWatchlist.map((anime) => (
          <Grid item xs={12} md={6} lg={6} key={anime._id}>
            <AnimewatchlistCard
              animeId={anime._id}
              status={anime.animeStatus}
              {...anime}
              onDeleteClick={handleDeleteFromWatchlistClick}
              onStatusClick={handleStatusClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

AnimeWatchlist.propTypes = {
  animeWatchlist: PropTypes.array,
};

AnimeWatchlist.defaultProps = {
  animeWatchlist: [],
};

export default AnimeWatchlist;
