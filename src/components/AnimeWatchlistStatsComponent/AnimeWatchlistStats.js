import React from 'react';
import PropTypes from 'prop-types';
import AnimeBoxStats from 'components/AnimeStatCard/AnimeBoxStats';

const AnimeWatchlistStats = (props) => {
  const { watchlist, animeStats } = props;
  return (
    <>
      {watchlist.length > 0 && (
        <AnimeBoxStats
          total={animeStats.total}
          watching={animeStats.watching}
          unwatched={animeStats.unwatched}
          hold={animeStats.hold}
          dropped={animeStats.dropped}
          completed={animeStats.completed}
        />
      )}
    </>
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
