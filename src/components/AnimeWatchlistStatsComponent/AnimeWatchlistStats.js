import React from 'react';
import PropTypes from 'prop-types';
import AnimeBoxStats from 'components/AnimeStatCard/AnimeBoxStats';

const AnimeWatchlistStats = (props) => {
  const {
    watchlist,
    animeStats,
    selectedFilter,
    handleFilterButtonClick,
    isSearchBarFoccused,
  } = props;

  if (isSearchBarFoccused) {
    return <></>;
  }

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
          selectedFilter={selectedFilter}
          handleFilterButtonClick={handleFilterButtonClick}
        />
      )}
    </>
  );
};

AnimeWatchlistStats.propTypes = {
  watchlist: PropTypes.array,
  animeStats: PropTypes.object,
  selectedFilter: PropTypes.string,
  handleFilterButtonClick: PropTypes.func,
  isSearchBarFoccused: PropTypes.bool,
};

AnimeWatchlistStats.defaultProps = {
  watchlist: [],
  animeStats: {},
  selectedFilter: 'Watching',
  handleFilterButtonClick: () => {},
  isSearchBarFoccused: false,
};

export default AnimeWatchlistStats;
