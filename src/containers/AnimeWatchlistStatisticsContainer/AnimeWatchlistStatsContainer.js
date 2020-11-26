import React from 'react';
import { useAnimeStatistics } from 'custom-hooks/statsHook';
import { useAnimeFilter } from 'custom-hooks/animeHook';
import { useFocus } from 'custom-hooks/globalAnimeSearchHook';
import AnimeWatchlistStats from 'components/AnimeWatchlistStatsComponent/AnimeWatchlistStats';

const AnimeWatchlistStatsContainer = () => {
  const { watchlist, animeStats } = useAnimeStatistics();
  const { selectedFilter, handleFilterButtonClick } = useAnimeFilter();
  const { isSearchBarFoccused } = useFocus();
  return (
    <>
      <AnimeWatchlistStats
        watchlist={watchlist}
        animeStats={animeStats}
        selectedFilter={selectedFilter}
        handleFilterButtonClick={handleFilterButtonClick}
        isSearchBarFoccused={isSearchBarFoccused}
      />
    </>
  );
};

export default AnimeWatchlistStatsContainer;
