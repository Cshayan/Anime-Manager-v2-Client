import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core';
import AnimeBoxStats from 'components/AnimeStatCard/AnimeBoxStats';
import AnimePieChartStats from 'components/AnimeStatCard/AnimePieChartStats';
import NoDataCard from '../NoDataCard/NoDataCard';

const useStyles = makeStyles(() => ({
  statsContainer: {
    padding: '1rem',
    width: '100%',
  },
}));

const AnimeWatchlistStats = (props) => {
  const classes = useStyles();
  const { watchlist, animeStats } = props;
  return (
    <Grid
      container
      //   direction="row"
      spacing={1}
      className={classes.statsContainer}
    >
      <Grid item xs={12}>
        {watchlist.length > 0 ? (
          <AnimeBoxStats
            total={animeStats.total}
            watching={animeStats.watching}
            unwatched={animeStats.unwatched}
            hold={animeStats.hold}
            dropped={animeStats.dropped}
            completed={animeStats.completed}
          />
        ) : (
          <NoDataCard />
        )}
      </Grid>
      <Grid item xs={12}>
        {watchlist.length > 0 ? (
          <AnimePieChartStats
            total={animeStats.total}
            watching={animeStats.watching}
            unwatched={animeStats.unwatched}
            hold={animeStats.hold}
            dropped={animeStats.dropped}
            completed={animeStats.completed}
          />
        ) : (
          <NoDataCard />
        )}
      </Grid>
    </Grid>
  );
};

AnimeWatchlistStats.propTypes = {
  watchlist: PropTypes.array,
  animeStats: PropTypes.object,
};

AnimeWatchlistStats.defaultProps = {
  watchlist: [],
  animeStats: {},
};

export default AnimeWatchlistStats;
