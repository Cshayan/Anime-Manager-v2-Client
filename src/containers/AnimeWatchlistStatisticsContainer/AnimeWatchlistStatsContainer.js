import React from 'react';
import { useAnimeStatistics } from 'custom-hooks/statsHook';
import AnimeWatchlistStats from '../../components/AnimeWatchlistStatsComponent/AnimeWatchlistStats';

const AnimeWatchlistStatsContainer = () => {
  const { watchlist, animeStats } = useAnimeStatistics();
  return (
    <>
      <AnimeWatchlistStats watchlist={watchlist} animeStats={animeStats} />
    </>
  );
};

export default AnimeWatchlistStatsContainer;
