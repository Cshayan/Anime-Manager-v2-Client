import React from 'react';
import { useAnimeStatistics } from 'custom-hooks/statsHook';
import { useAnimeFilter } from 'custom-hooks/animeHook';
import AnimeWatchlistStats from '../../components/AnimeWatchlistStatsComponent/AnimeWatchlistStats';

const AnimeWatchlistStatsContainer = () => {
  const { watchlist, animeStats } = useAnimeStatistics();
  const { selectedFilter, handleFilterButtonClick } = useAnimeFilter();
  return (
    <>
      <AnimeWatchlistStats
        watchlist={watchlist}
        animeStats={animeStats}
        selectedFilter={selectedFilter}
        handleFilterButtonClick={handleFilterButtonClick}
      />
    </>
  );
};

export default AnimeWatchlistStatsContainer;
